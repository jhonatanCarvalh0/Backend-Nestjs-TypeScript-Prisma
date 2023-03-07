import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './User';

@Injectable()
export class UsersService {
  //database users - kidding just a array
  private users: User[] = [
    {
      id: 1,
      name: 'Jhonatan',
      lastName: 'Carvalho',
      email: 'emailWemail.com',
      password: '12345678',
    },
  ];

  create(UserDto: UserDto) {
    const id = this.users.length + 1;
    const newUser = {
      id,
      ...UserDto,
    };

    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    return this.users[userIndex];
  }

  async update(id: number, UserDto: UserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex < 0) {
      return 'Not foundddd';
    }

    console.info(userIndex);

    const updatedData = {
      id,
      ...UserDto,
    };

    this.users[userIndex] = updatedData;

    return updatedData;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    this.users.splice(userIndex, 1);
    return `User removed!`;
  }
}
