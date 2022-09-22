import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { axiosBaseQuery } from 'src/utils/request';

export const api = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});