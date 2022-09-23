import * as React from 'react';

export interface IPropsProducts {
  products: string
}
const Products = (props: IPropsProducts) => {
  return (
    <div>
      { props }
    </div>
  );
}

export default Products;