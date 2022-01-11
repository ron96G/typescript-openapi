/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MediaPayload } from './MediaPayload';
import type { ParameterPayload } from './ParameterPayload';
import type { TextPayload } from './TextPayload';

export type MessageRequest = {
    to: string;
    type: 'text' | 'media';
    provider: string;
    payload: Array<(TextPayload | MediaPayload | ParameterPayload)>;
}