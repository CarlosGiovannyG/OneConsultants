import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Users, UsersDocument } from './schema/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UsersDocument>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }
}
