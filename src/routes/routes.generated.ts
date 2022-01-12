/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  Controller,
  ValidationService,
  FieldErrors,
  ValidateError,
  TsoaRoute,
  HttpStatusCodeLiteral,
  TsoaResponse,
} from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GenericController } from './../controller/generic';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MessagingController } from './../controller/messaging';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../controller/user';
import * as KoaRouter from '@koa/router';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  APIResponse: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        id: { dataType: 'string' },
        errors: { dataType: 'any' },
        reason: { dataType: 'string' },
        status: {
          dataType: 'union',
          subSchemas: [
            { dataType: 'enum', enums: ['success'] },
            { dataType: 'enum', enums: ['failed'] },
          ],
          required: true,
        },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  TextPayload: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        body: { dataType: 'string', required: true },
        type: { dataType: 'enum', enums: ['text'], required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  MediaPayload: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        text: { dataType: 'string' },
        url: { dataType: 'string', required: true },
        type: {
          dataType: 'union',
          subSchemas: [
            { dataType: 'enum', enums: ['image'] },
            { dataType: 'enum', enums: ['video'] },
            { dataType: 'enum', enums: ['audio'] },
            { dataType: 'enum', enums: ['document'] },
          ],
          required: true,
        },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  ParameterPayload: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        payload: { dataType: 'any' },
        type: { dataType: 'enum', enums: ['parameter'] },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  MessageRequest: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        payload: {
          dataType: 'array',
          array: {
            dataType: 'union',
            subSchemas: [
              { ref: 'TextPayload' },
              { ref: 'MediaPayload' },
              { ref: 'ParameterPayload' },
            ],
          },
          required: true,
        },
        provider: { dataType: 'string', required: true },
        type: {
          dataType: 'union',
          subSchemas: [
            { dataType: 'enum', enums: ['text'] },
            { dataType: 'enum', enums: ['media'] },
          ],
          required: true,
        },
        to: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(router: KoaRouter) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  router.post(
    '/generic/:username',
    async function GenericController_hello(context: any, next: any) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context, next);
      } catch (err) {
        const error = err as any;
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new GenericController();

      const promise = controller.hello.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, undefined, next);
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get(
    '/generic',
    async function GenericController_foo(context: any, next: any) {
      const args = {};

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context, next);
      } catch (err) {
        const error = err as any;
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new GenericController();

      const promise = controller.foo.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, undefined, next);
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post(
    '/messaging/sendMessage',
    async function MessagingController_sendMessage(context: any, next: any) {
      const args = {
        requestBody: {
          in: 'body',
          name: 'requestBody',
          required: true,
          ref: 'MessageRequest',
        },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context, next);
      } catch (err) {
        const error = err as any;
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new MessagingController();

      const promise = controller.sendMessage.apply(
        controller,
        validatedArgs as any
      );
      return promiseHandler(controller, promise, context, undefined, next);
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post(
    '/user/login/:username',
    async function UserController_login(context: any, next: any) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context, next);
      } catch (err) {
        const error = err as any;
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new UserController();

      const promise = controller.login.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, undefined, next);
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get(
    '/user/:username',
    async function UserController_getUser(context: any, next: any) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context, next);
      } catch (err) {
        const error = err as any;
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new UserController();

      const promise = controller.getUser.apply(
        controller,
        validatedArgs as any
      );
      return promiseHandler(controller, promise, context, undefined, next);
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
    return (
      'getHeaders' in object && 'getStatus' in object && 'setStatus' in object
    );
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function promiseHandler(
    controllerObj: any,
    promise: Promise<any>,
    context: any,
    successStatus: any,
    next: () => Promise<any>
  ) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode = successStatus;
        let headers;

        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

        if (isController(controllerObj)) {
          headers = controllerObj.getHeaders();
          statusCode = controllerObj.getStatus() || statusCode;
        }
        return returnHandler(context, next, statusCode, data, headers);
      })
      .catch((error: any) => {
        context.status = error.status || 500;
        context.throw(context.status, error.message, error);
      });
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function returnHandler(
    context: any,
    next: () => any,
    statusCode?: number,
    data?: any,
    headers: any = {}
  ) {
    if (!context.headerSent && !context.response.__tsoaResponded) {
      context.set(headers);

      if (data !== null && data !== undefined) {
        context.body = data;
        context.status = 200;
      } else {
        context.status = 204;
      }

      if (statusCode) {
        context.status = statusCode;
      }

      context.response.__tsoaResponded = true;
      return next();
    }
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getValidatedArgs(args: any, context: any, next: () => any): any[] {
    const errorFields: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return context.request;
        case 'query':
          return validationService.ValidateParam(
            args[key],
            context.request.query[name],
            name,
            errorFields,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'path':
          return validationService.ValidateParam(
            args[key],
            context.params[name],
            name,
            errorFields,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'header':
          return validationService.ValidateParam(
            args[key],
            context.request.headers[name],
            name,
            errorFields,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body':
          return validationService.ValidateParam(
            args[key],
            context.request.body,
            name,
            errorFields,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body-prop':
          return validationService.ValidateParam(
            args[key],
            context.request.body[name],
            name,
            errorFields,
            'body.',
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'formData':
          if (args[key].dataType === 'file') {
            return validationService.ValidateParam(
              args[key],
              context.request.file,
              name,
              errorFields,
              undefined,
              {
                noImplicitAdditionalProperties: 'throw-on-extras',
              }
            );
          } else if (
            args[key].dataType === 'array' &&
            args[key].array.dataType === 'file'
          ) {
            return validationService.ValidateParam(
              args[key],
              context.request.files,
              name,
              errorFields,
              undefined,
              {
                noImplicitAdditionalProperties: 'throw-on-extras',
              }
            );
          } else {
            return validationService.ValidateParam(
              args[key],
              context.request.body[name],
              name,
              errorFields,
              undefined,
              {
                noImplicitAdditionalProperties: 'throw-on-extras',
              }
            );
          }
        case 'res':
          return responder(context, next);
      }
    });
    if (Object.keys(errorFields).length > 0) {
      throw new ValidateError(errorFields, '');
    }
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function responder(
    context: any,
    next: () => any
  ): TsoaResponse<HttpStatusCodeLiteral, unknown> {
    return function (status, data, headers) {
      returnHandler(context, next, status, data, headers);
    };
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
