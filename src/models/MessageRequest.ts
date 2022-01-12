/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelSelection } from './ChannelSelection';
import type { MediaPayload } from './MediaPayload';
import type { ParameterPayload } from './ParameterPayload';
import type { TextPayload } from './TextPayload';
import type { WhatsAppRecipient } from './WhatsAppRecipient';

export type MessageRequest = {
  channel: ChannelSelection;
  recipient?: WhatsAppRecipient;
  payload: Array<TextPayload | MediaPayload | ParameterPayload>;
};
