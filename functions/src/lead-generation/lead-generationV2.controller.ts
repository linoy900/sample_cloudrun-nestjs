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
@Controller({ path: 'api/blue' })
export class LeadGenerationV2Controller {
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
  @ApiExcludeEndpoint()
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @Version('2')
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
        message: 'success-2 with version 2',
        error: '',
        Data: 'helloworld-2 with version 2',
      };
    }
  }
}
