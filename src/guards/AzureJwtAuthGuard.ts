import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AzureJwtAuthGuard extends AuthGuard('azure-jwt') {}
