import Button from '@mui/material/Button';
import { useState } from 'react';

export const Login = ({ active }) => {
  
  return (
    <div className="login">
      <Button 
        variant="contained"
        color="primary"
        size="large"
        onClick={() => active(true)}
      >
      Login
      </Button>
    </div>
  )
}