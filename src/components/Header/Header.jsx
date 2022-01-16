import { makeStyles } from '@mui/styles';
import { Login } from 'components/ui/buttons/Login/Login';

const useStyles = makeStyles({
  header: {
    width: '100%',
    height: 60,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    marginBottom: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const Header = ({ active }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.header}>
      <Login 
        active={active}
      />
    </div>
  )
}