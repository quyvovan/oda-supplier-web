import * as React from 'react';

export interface IPropsSales {
  sales: string
}
const Sales = (props: IPropsSales) => {
  return (
    <div>
      { props }
    </div>
  );
}

export default Sales;