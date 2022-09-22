import { AxiosError } from 'axios';

export const ERROR_NETWORK_CODE = -100;
export const RESULT_CODE_PUSH_OUT = 401;
export const STATUS_TIME_OUT = 'ECONNABORTED';
export const CODE_TIME_OUT = 408;

export interface ResponseBase<T = any> {
  code: number;

  msg?: string | undefined | null;

  data?: T | any;

  status: boolean;
}

const handleData = (responseError: ResponseBase<any>) => {
  return responseError;
};

export const handleErrorAxios = (error: AxiosError): ResponseBase<any> => {
  if (error.code === STATUS_TIME_OUT) {
    // timeout
    return HandleErrorApi(CODE_TIME_OUT, error.response?.data);
  }
  if (error.response) {
    if (error.response.status === RESULT_CODE_PUSH_OUT) {
      return HandleErrorApi(RESULT_CODE_PUSH_OUT, error.response?.data);
    } else {
      return HandleErrorApi(error.response.status, error.response?.data);
    }
  }
  return HandleErrorApi(ERROR_NETWORK_CODE);
};

export const HandleErrorApi = (status: number, data?: any) => {
  switch (status) {
    case ERROR_NETWORK_CODE:
      return handleData({
        code: ERROR_NETWORK_CODE,
        msg: '',
        data: data ? data : null,
        status: false,
      });
    case 200:
      return handleData({
        code: status,
        msg: '200',
        data: data ? data : null,
        status: false,
      });
    case 400:
      return handleData({
        code: status,
        msg: '400',
        data: data ? data : null,
        status: false,
      });
    case 401:
      return handleData({
        code: status,
        msg: '401',
        data: data ? data : null,
        status: false,
      });
    case 402:
      return handleData({
        code: status,
        msg: '402',
        data: data ? data : null,
        status: false,
      });
    case 403:
      return handleData({
        code: status,
        msg: '403',
        data: data ? data : null,
        status: false,
      });
    case 404:
      return handleData({
        code: status,
        msg: '404',
        data: data ? data : null,
        status: false,
      });
    case 405:
      return handleData({
        code: status,
        msg: '405',
        data: data ? data : null,
        status: false,
      });
    case 406:
      return handleData({
        code: status,
        msg: '406',
        data: data ? data : null,
        status: false,
      });
    case 407:
      return handleData({
        code: status,
        msg: '407',
        data: data ? data : null,
        status: false,
      });
    case 408:
      return handleData({
        code: status,
        msg: '408',
        data: data ? data : null,
        status: false,
      });

    case 409:
      return handleData({
        code: status,
        msg: '409',
        data: data ? data : null,
        status: false,
      });
    case 410:
      return handleData({
        code: status,
        msg: '410',
        data: data ? data : null,
        status: false,
      });

    case 411:
      return handleData({
        code: status,
        msg: '411',
        data: data ? data : null,
        status: false,
      });
    case 412:
      return handleData({
        code: status,
        msg: '412',
        data: data ? data : null,
        status: false,
      });

    case 413:
      return handleData({
        code: status,
        msg: '413',
        data: data ? data : null,
        status: false,
      });
    case 414:
      return handleData({
        code: status,
        msg: '414',
        data: data ? data : null,
        status: false,
      });
    case 415:
      return handleData({
        code: status,
        msg: '415',
        data: data ? data : null,
        status: false,
      });
    case 416:
      return handleData({
        code: status,
        msg: '416',
        data: data ? data : null,
        status: false,
      });
    case 417:
      return handleData({
        code: status,
        msg: '417',
        data: data ? data : null,
        status: false,
      });
    case 500:
      return handleData({
        code: status,
        msg: '500',
        data: data ? data : null,
        status: false,
      });
    case 501:
      return handleData({
        code: status,
        msg: '501',
        data: data ? data : null,
        status: false,
      });
    case 502:
      return handleData({
        code: status,
        msg: '502',
        data: data ? data : null,
        status: false,
      });
    case 503:
      return handleData({
        code: status,
        msg: '503',
        data: data ? data : null,
        status: false,
      });
    case 504:
      return handleData({
        code: status,
        msg: '504',
        data: data ? data : null,
        status: false,
      });
    case 505:
      return handleData({
        code: status,
        msg: '505',
        data: data ? data : null,
        status: false,
      });

    default:
      if (status > 503) {
        return handleData({
          code: status,
          msg: 'Server down',
          data: data ? data : null,
          status: false,
        });
      } else if (status < 500 && status >= 400) {
        return handleData({
          code: status,
          msg: 'Error request',
          data: data ? data : null,
          status: false,
        });
      } else {
        return handleData({
          code: status,
          msg: 'Error on handle',
          data: data ? data : null,
          status: false,
        });
      }
  }
};
