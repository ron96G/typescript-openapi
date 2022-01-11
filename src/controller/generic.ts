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
  @Response<string>(201)
  @SuccessResponse('201', 'Created')
  @Tags('hello')
  public async hello(@Path() username: string): Promise<APIResponse> {
    return {
      status: APIResponse.status.SUCCESS,
      reason: `Hello, ${username}`,
    };
  }

  @Get('')
  @Response<string>(200)
  @SuccessResponse('200', 'Ok')
  @Tags('foo')
  public async foo(): Promise<APIResponse> {
    return {
      status: APIResponse.status.SUCCESS,
      reason: `Hello World!`,
    };
  }
}
