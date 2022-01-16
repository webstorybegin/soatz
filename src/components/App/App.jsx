import { useState } from 'react';
import { Header } from 'components/Header/Header';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import { makeStyles } from '@mui/styles';
import 'style/style.scss'; 
import mainBg from 'assets/mainBg.png';

const useStyles = makeStyles({
  root: {
    background: `url(${mainBg}) 0 0 no-repeat`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

function App() {
  const classes = useStyles()
  const [show, setShow] = useState(false);
  
  return (
    <div className={classes.root}>
      <Header  
        active={active => setShow(active)}
      />
      <RegistrationForm
        show={show}
      />
    </div>
  );
}

export default App;

