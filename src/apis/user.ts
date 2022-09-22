import { api } from 'src/utils/api';
import { IProfile } from 'src/types/user';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchListUser: build.query<any, IProfile>({
      query: (params) => ({
        url: `/users/${123}`,
        method: 'GET',
        params,
      }),
    }),
    createOrder: build.mutation<Omit<IProfile, 'id'>, IProfile>({
      query: (params) => ({
        url: `/users/${123}`,
        method: 'POST',
        params,
      }),
    }),
    updateUser: build.mutation<IProfile, IProfile>({
      query: (params) => ({
        url: `/users/${123}`,
        method: 'PATCH',
        params,
      }),
    }),
    retrieveUser: build.query<any, IProfile>({
      query: (params) => ({
        url: `/users/${123}`,
        method: 'GET',
        params,
      }),
    }),
    deleteUser: build.mutation({
      query: (params) => ({
        url: `/users/${123}`,
        method: 'DELETE',
        params,
      }),
    }),
    BatchUpdateUsers: build.mutation<IProfile[], IProfile[]>({
      query: (params) => ({
        url: `/users/${123}`,
        method: 'PATCH',
        params,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useFetchListUserQuery,
  useCreateOrderMutation,
  useUpdateUserMutation,
  useRetrieveUserQuery,
  useDeleteUserMutation,
  useBatchUpdateUsersMutation,
} = userApi;