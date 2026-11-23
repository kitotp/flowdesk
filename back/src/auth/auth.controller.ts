import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.authService.createUser(dto.email);
  }

  @Get('login')
  loginWithEmail(@Query('email') email: string) {
    return this.authService.loginWithGmail(email);
  }
}
