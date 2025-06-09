import { Module } from '@nestjs/common';
import { LeadGenerationController } from './lead-generation.controller';
import { LeadGenerationV2Controller } from './lead-generationV2.controller';

@Module({
  controllers: [LeadGenerationController, LeadGenerationV2Controller],
  providers: [],
})
export class LeadGenerationModule {}
