import { Controller, Get, HttpStatus, HttpCode, Version } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('assesment-details')
@Controller({ path: 'redFunction/v1/assess/api/red' })
export class AssessmentController {
  @Get()
  @ApiOperation({ summary: 'get project' })
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  async findItems() {
    try {
      console.log('successOnRed-1');
      return {
        statusCode: HttpStatus.OK,
        message: 'red-success-1 with version 1',
        error: '',
        Data: 'red-helloworld-1 with version 1',
      };
    } catch (error) {
      console.log('erroroRed-1', error);
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'red-success-1 with version 1',
        error: '',
        Data: 'red-helloworld-1 with version 1',
      };
    }
  }
}
