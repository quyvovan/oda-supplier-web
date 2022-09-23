import { api } from 'src/utils/api';
import { IProfile } from 'src/types/user';

// let see here: https://redux-toolkit.js.org/rtk-query/api/created-api/code-splitting#injectendpoints
const apiWithTag = api.enhanceEndpoints({
  addTagTypes: ['Users'],
});

export const userApi = apiWithTag.injectEndpoints({
  endpoints: (build) => ({
    getListUser: build.query<IProfile[], any>({
      query: () => ({
        url: `/pokemon`,
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    createUser: build.mutation<Omit<IProfile, 'id'>, IProfile>({
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
      query: () => ({
        url: `/pokemon/1`,
        method: 'GET',
        params: {},
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

// Export hooks for usage in functional components
export const {
  useGetListUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useRetrieveUserQuery,
  useDeleteUserMutation,
  useBatchUpdateUsersMutation,
  util: { getRunningOperationPromises },
} = userApi;

// export endpoints for use in SSR
export const { getListUser, createUser } = userApi.endpoints;