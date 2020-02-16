import { CreateUserDTO, LoginUserDTO } from './users.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDTO: CreateUserDTO): Promise<void>;
    login(loginUserDTO: LoginUserDTO): Promise<User>;
}
