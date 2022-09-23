import * as React from 'react';

export interface IPropsOrders {
  orders: string
}
const Orders = (props: IPropsOrders) => {
  return (
    <div>
      { props }
    </div>
  );
}

export default Orders;