import * as React from 'react';

export interface IPropsPurchases {
  purchases: string
}
const Purchases = (props: IPropsPurchases) => {
  return (
    <div>
      { props }
    </div>
  );
}

export default Purchases;