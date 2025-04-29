import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as jwksRsa from 'jwks-rsa';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AzureJwtStrategy extends PassportStrategy(Strategy, 'azure-jwt') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: jwksRsa.passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://login.microsoftonline.com/${configService.get('AZURE_TENANT_ID')}/discovery/v2.0/keys`,
      }),
      audience: configService.get('AZURE_CLIENT_ID'),
      issuer: `https://login.microsoftonline.com/${configService.get('AZURE_TENANT_ID')}/v2.0`,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    Logger.log(payload);
    return payload;
  }
}
