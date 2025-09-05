import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUserRepository } from 'src/repositories/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUserRepository')
    private userRepo: IUserRepository,
  ) {}

  async execute(createUserDto: CreateUserDto) {
    const user = new User(createUserDto);

    // Criar criptografia em nossa senha
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);

    await this.userRepo.create(user);
    return user;
  }
}
