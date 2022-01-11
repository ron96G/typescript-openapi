import {
  Path,
  Post,
  Tags,
  Response,
  Route,
  SuccessResponse,
  Controller,
  Get,
} from 'tsoa';
import { APIResponse } from '../models/APIResponse';

@Route('generic')
@Tags('generic')
export class GenericController extends Controller {
  @Post('{username}')
  @Response<APIResponse>(201)
  @SuccessResponse('201', 'Created')
  public async hello(@Path() username: string): Promise<APIResponse> {
    return {
      status: 'success',
      reason: `Hello, ${username}`,
    };
  }

  @Get('')
  @Response<APIResponse>(200)
  @SuccessResponse('200', 'Ok')
  public async foo(): Promise<APIResponse> {
    return {
      status: 'success',
      reason: `Hello World!`,
    };
  }
}
