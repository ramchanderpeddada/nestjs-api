import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  getUser(): Promise<User[]> {
    return this.userRepo.find();
  }

  getUserId(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  store(createUserDto: CreateUserDto) {
    return this.userRepo.save(createUserDto);
  }

  updateUser(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepo.update(userId, updateUserDto);
  }

  deleteUser(id: number) {
    return this.userRepo.delete(id);
  }
}
