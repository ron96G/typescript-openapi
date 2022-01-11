/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TextPayload = {
  type: TextPayload.type;
  body: string;
};

export namespace TextPayload {
  export enum type {
    TEXT = 'text',
  }
}
