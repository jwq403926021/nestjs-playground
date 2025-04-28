import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as jwksRsa from 'jwks-rsa';

@Injectable()
export class AzureJwtStrategy extends PassportStrategy(Strategy, 'azure-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: jwksRsa.passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://login.microsoftonline.com/dba50de4-5123-47ef-93b9-3a5a2ffc9496/discovery/v2.0/keys',
      }),
      audience: 'ccfe2668-d84e-40d9-b241-4ea46d926444',
      issuer: 'https://login.microsoftonline.com/dba50de4-5123-47ef-93b9-3a5a2ffc9496/v2.0',
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    console.log(payload, '?');
    return payload;
  }
}
