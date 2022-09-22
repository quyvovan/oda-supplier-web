import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';
import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { flatten } from 'rambda';
import { handleErrorAxios } from 'src/utils/request-helper';

const BASE_URL = process.env.HOST_NAME;
const TIME_OUT_API = parseInt(process.env.TIME_OUT_API ?? '0', 10);

export const axiosBaseQuery = (baseUrl = ''): BaseQueryFn<{
  url?: string;
  method?: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
}> =>
  async ({ url, method, data, params }) => {
    try {
      const _baseUrl = baseUrl ?? BASE_URL;
      const defaultConfig: AxiosRequestConfig = {
        baseURL: baseUrl ?? BASE_URL,
        timeout: TIME_OUT_API,
        headers: {
          'Content-Type': 'application/json',
          // TODO: oauth2 & lang
          // Authorization: `Bearer ${access_token}`,
          // locale: `${lang}`,
        },
      };
      const result = await Axios.request(
        flatten([defaultConfig, { method, data, params, url: `${_baseUrl + url}` }]) as AxiosRequestConfig,
      );
      return { data: result?.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return handleErrorAxios(err) as any;
    }
  };
