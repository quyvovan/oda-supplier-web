import * as React from 'react';

export interface IPropsInventory {
  inventory: string
}
const Inventory = (props: IPropsInventory) => {
  return (
    <div>
      { props }
    </div>
  );
}

export default Inventory;
