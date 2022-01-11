/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MediaPayload = {
  type: MediaPayload.type;
  url: string;
  text?: string;
};

export namespace MediaPayload {
  export enum type {
    IMAGE = 'image',
    VIDEO = 'video',
    AUDIO = 'audio',
    DOCUMENT = 'document',
  }
}
