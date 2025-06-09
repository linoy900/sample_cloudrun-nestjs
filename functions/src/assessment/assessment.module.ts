import { Module } from '@nestjs/common';

import { AssessmentController } from './assessment.controller';
import { AssessmentV2Controller } from './assessmentV2.controller';

@Module({
  imports: [],
  controllers: [AssessmentController, AssessmentV2Controller],
  providers: [],
  exports: [],
})
export class AssessmentModule {}
