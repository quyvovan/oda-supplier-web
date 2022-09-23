import { StoreWrapper } from 'src/store';
import { getListUser, getRunningOperationPromises, useGetListUserQuery } from 'src/apis/user';
import { useRouter } from 'next/dist/client/router';
import { skipToken } from '@reduxjs/toolkit/query';
import { isEmpty } from 'rambda';
import { IProfile } from 'src/types/user';

const Users = () => {
  const router = useRouter();
  const name = 'test' as any;
  const users = useGetListUserQuery(
    typeof name === 'string' ? {} : skipToken,
    {
      // If the page is not yet generated, router.isFallback will be true
      // initially until getStaticProps() finishes running
      skip: router.isFallback,
    },
  );

  return (
    <div>
      {!isEmpty((users?.data as any)?.results as IProfile[]) && (users?.data as any)?.results.map((user: IProfile) => {
        return <h4 key={user?.name}> {user?.name} </h4>;
      })}
    </div>
  );
};

export const getServerSideProps = StoreWrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getListUser.initiate({}));

    await Promise.all(getRunningOperationPromises());

    return {
      props: {},
    };
  },
);

export default Users;