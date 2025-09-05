import { DeptoUser, RoleUser } from '../entities/user.entity';

export class CreateUserDto {
  name: string;

  email: string;

  password: string;

  phone: string | null;

  // document: string;

  socialnetwork: string | null;

  role: RoleUser;

  depto: DeptoUser;
}
