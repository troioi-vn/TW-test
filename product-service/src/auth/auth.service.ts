import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(username: string, password: string): Promise<string> {
    // В реальном приложении — проверка учетных данных
    const payload = { username, sub: 1 };
    return this.jwtService.sign(payload);
  }
}