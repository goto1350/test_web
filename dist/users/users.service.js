"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_entity_1 = require("./users.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const crypto = require("crypto");
const SALT = '12345';
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    createPasswordDigest(password) {
        return crypto
            .createHash('sha256')
            .update(SALT + '/' + password)
            .digest('hex');
    }
    async findUserByScreenName(screenName) {
        const user = await this.userRepository.findOne({ where: { screenName } });
        return !!user;
    }
    async register(userData) {
        if (await this.findUserByScreenName(userData.screenName)) {
            return Promise.reject(new Error('User is already taken.'));
        }
        await this.userRepository.insert(Object.assign(Object.assign({}, userData), { password: this.createPasswordDigest(userData.password) }));
        return;
    }
    async loginUser(screenName, password) {
        return await this.userRepository.findOne({
            where: {
                screenName,
                password: this.createPasswordDigest(password),
            },
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map