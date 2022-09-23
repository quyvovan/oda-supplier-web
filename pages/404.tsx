import * as React from 'react';

export interface IPropsErrors {
  message: string
}
const Errors = (props: IPropsErrors) => {
  return (
    <div>
      { props }
    </div>
  );
}

export default Errors;