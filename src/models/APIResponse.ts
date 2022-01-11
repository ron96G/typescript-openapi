/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type APIResponse = {
  status: 'success' | 'failed';
  reason?: string;
  errors?: any;
  id?: string;
};
