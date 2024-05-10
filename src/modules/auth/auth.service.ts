import { Injectable, UnauthorizedException } from '@nestjs/common';
var bcrypt = require('bcryptjs');
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';

import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(loginDto: LoginDto) {
    const user = await this.userService.findUsersByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    delete user.password;
    const payload = { sub: user.id, username: user.role };
    return {
      id: user.id,
      role: user.role,
      email: user.email,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}