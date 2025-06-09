import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LeadGenerationModule } from './lead-generation/lead-generation.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    LeadGenerationModule,
  ],
  controllers: [],
  providers: [],
})
export class LeadGenerationAppModule {}
