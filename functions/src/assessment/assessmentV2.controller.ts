import { Controller, Get, HttpStatus, HttpCode, Version } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('assesment-details')
@Controller({ path: 'redFunction/assess/api/red2' })
export class AssessmentV2Controller {
  @Get()
  @ApiOperation({ summary: 'get project' })
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @Version('1')
  async findItems() {
    try {
      return {
        statusCode: HttpStatus.OK,
        message: 'success-2 with version 2',
        error: '',
        Data: 'helloworld-2 with version 2',
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'success-2',
        error: '',
        Data: 'helloworld-2',
      };
    }
  }
}
