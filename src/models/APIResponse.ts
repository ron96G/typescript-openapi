/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type APIResponse = {
  status: APIResponse.status;
  reason?: string;
  errors?: any;
  id?: string;
};

export namespace APIResponse {
  export enum status {
    SUCCESS = 'success',
    FAILED = 'failed',
  }
}
