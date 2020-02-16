import { User } from './users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    private createPasswordDigest;
    findUserByScreenName(screenName: string): Promise<boolean>;
    register(userData: Partial<User>): Promise<void>;
    loginUser(screenName: string, password: string): Promise<User>;
}
