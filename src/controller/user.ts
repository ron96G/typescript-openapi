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

@Route('user')
@Tags('user')
export class UserController extends Controller {
  @Post('/login/{username}')
  @Response<APIResponse>(200)
  @SuccessResponse('200', 'Ok')
  public async login(@Path() username: string): Promise<APIResponse> {
    return {
      status: 'success',
      reason: `Logged in ${username}`,
    };
  }

  @Get('{username}')
  @Response<APIResponse>(200)
  @SuccessResponse('200', 'Ok')
  public async getUser(@Path() username: string): Promise<APIResponse> {
    return {
      status: 'success',
      reason: `This is the user ${username}`,
    };
  }
}
