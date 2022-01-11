/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ParameterPayload = {
  type?: ParameterPayload.type;
  payload?: any;
  all?: string;
};

export namespace ParameterPayload {
  export enum type {
    PARAMETER = 'parameter',
  }
}
