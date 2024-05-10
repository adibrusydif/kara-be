import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class MiddlewareService implements NestMiddleware {
  constructor(private jwtService: JwtService) { }
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header is missing' });
      }

      const token = authHeader.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Token is missing' });
      }

      const decoded = this.jwtService.verify(token);
      req['user'] = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
}
