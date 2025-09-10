import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeOrmRepository } from 'src/repositories/user.repository';
import { User } from './entities/user.entity';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { FindAllUserUseCase } from './use-cases/find-all-user.use-case';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { FindByIdUserUseCase } from './use-cases/find-by-id-user.use-case';
import { RemoveUserUseCase } from './use-cases/remove-user.use-case';
import { SetDeptoUserUseCase } from './use-cases/set-depto-user.use-case';
import { SetRoleUserUseCase } from './use-cases/set-role-user.use.case';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserUseCase,
    FindAllUserUseCase,
    FindByIdUserUseCase,
    RemoveUserUseCase,
    SetDeptoUserUseCase,
    SetRoleUserUseCase,
    UserTypeOrmRepository,
    {
      provide: 'IUserRepository',
      useExisting: UserTypeOrmRepository,
    },
  ],
})
export class UsersModule {}
