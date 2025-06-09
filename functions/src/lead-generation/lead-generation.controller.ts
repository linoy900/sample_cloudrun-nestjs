import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Version,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiExcludeEndpoint,
} from '@nestjs/swagger';

@ApiTags('lead-generation')
@Controller({ path: 'blueFunction/v1/lead/api/blue' })
export class LeadGenerationController {
  /**
   * Creates a new lead using the provided data and posts it to the Saleforce API.
   *
   * @param createLeadGenerationDto - The data required to create a new lead.
   * @returns - A promise that resolves to the result of the API call.
   * @throws - An error if the API call fails.
   */

  @Get()
  @ApiOperation({ summary: 'get project' })
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  async findItems() {
    try {
      return {
        statusCode: HttpStatus.OK,
        message: 'blue-success-2 with version 1',
        error: '',
        Data: 'blue-helloworld-2 with version 1',
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'blue-success-2 with version 1',
        error: '',
        Data: 'blue-helloworld-2 with version 1',
      };
    }
  }
}
