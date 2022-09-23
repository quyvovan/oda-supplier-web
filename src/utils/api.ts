import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { axiosBaseQuery } from 'src/utils/request';
import { HYDRATE } from 'next-redux-wrapper';

export const api = createApi({
  baseQuery: axiosBaseQuery(),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});