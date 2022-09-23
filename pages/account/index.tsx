import * as React from 'react';

interface IAccountProps {
  account: String
}
const Account = (props: IAccountProps) => {
  return (
    <div>
      { props }
    </div>
  );
}

export default Account;