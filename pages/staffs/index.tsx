import * as React from 'react';

export interface IPropsStaffs {
  staffs: string
}
const Staffs = (props: IPropsStaffs) => {
  return (
    <div>
      { props }
    </div>
  );
}

export default Staffs;