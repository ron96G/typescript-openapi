import {
  Path,
  Post,
  Tags,
  Response,
  Route,
  SuccessResponse,
  Controller,
  Get,
  Body,
} from 'tsoa';
import { APIResponse } from '../models/APIResponse';
import { MessageRequest } from '../models/MessageRequest';

@Route('messaging')
@Tags('messaging')
export class MessagingController extends Controller {
  
  @Post('/sendMessage')
  @Response<APIResponse>(202)
  @SuccessResponse('202', 'Accepted')
  public async sendMessage(@Body() requestBody: MessageRequest): Promise<APIResponse> {
    console.log(`Received message: ${requestBody}`)
    return {
      status: 'success',
      reason: `Received message for ${requestBody.to}`,
    };
  }
}
