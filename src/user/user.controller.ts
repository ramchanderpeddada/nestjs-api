import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Get('/:userId')
  getUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUserId(userId);
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.store(createUserDto);
  }

  @Put('/:userID')
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId') userId: number,
  ) {
    return this.userService.updateUser(updateUserDto, userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId') userId: number) {
    return this.userService.deleteUser(userId);
  }
}
