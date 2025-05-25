import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingComponent() {
  return (
    <div style={{textAlign:'center'}} className='mt-5 mb-5'>
      <CircularProgress />
      <p>
          درحال دریافت اطلاعات...
      </p>
    </div>
  );
}