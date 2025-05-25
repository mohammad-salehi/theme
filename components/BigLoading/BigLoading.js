import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function BigLoading() {
  return (
    <div       
    style={{
        display: 'flex',
        justifyContent: 'center', // مرکز‌چینی افقی
        alignItems: 'center',     // مرکز‌چینی عمودی
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.1)',
        position: 'absolute'
      }} className='p-0 m-0'>
      <CircularProgress />
    </div>
  );
}