/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MediaPayload = {
  type: 'image' | 'video' | 'audio' | 'document';
  url: string;
  text?: string;
};
