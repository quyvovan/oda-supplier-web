import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';
import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { handleErrorAxios } from 'src/utils/request-helper';

const BASE_URL = process.env.HOST_NAME;
const TIME_OUT_API = parseInt(process.env.TIME_OUT_API ?? '0', 10);

export const axiosBaseQuery = (baseUrl = BASE_URL || 'https://pokeapi.co/api/v2'
): BaseQueryFn<{
  url?: string;
  method?: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
}> =>
  async ({ url, method, data, params }) => {
    try {
      const defaultConfig: AxiosRequestConfig = {
        baseURL: baseUrl!,
        timeout: TIME_OUT_API,
        headers: {
          'Content-Type': 'application/json',
          // TODO: oauth2 & lang
          // Authorization: `Bearer ${access_token}`,
          // locale: `${lang}`,
        },
      };
      const result = await Axios.request({
        ...defaultConfig,
        method,
        data,
        params,
        url: `${baseUrl! + url}`,
      }) as AxiosRequestConfig;
      return { data: result?.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return handleErrorAxios(err) as any;
    }
  };
