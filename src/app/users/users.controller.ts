import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { FindAllUserUseCase } from './use-cases/find-all-user.use-case';
import { FindByIdUserUseCase } from './use-cases/find-by-id-user.use-case';
import { RemoveUserUseCase } from './use-cases/remove-user.use-case';

@Controller('users')
export class UsersController {
  // constructor(private readonly usersService: UsersService) {}

  @Inject(FindAllUserUseCase)
  private readonly findAllUserUseCase: FindAllUserUseCase;

  @Inject(FindByIdUserUseCase)
  private readonly findByIdUserUseCase: FindByIdUserUseCase;

  @Inject(CreateUserUseCase)
  private readonly createUserUseCase: CreateUserUseCase;

  @Inject(RemoveUserUseCase)
  private readonly removeUserUseCase: RemoveUserUseCase;

  @Get()
  findAll() {
    return this.findAllUserUseCase.execute();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findByIdUserUseCase.execute(id);
  }
  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.removeUserUseCase.execute(id);
  }
}
