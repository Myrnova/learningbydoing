import Avatar from '@material-ui/core/Avatar/';
import Button from '@material-ui/core/Button/';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CssBaseline from '@material-ui/core/CssBaseline/';
import TextField from '@material-ui/core/TextField/';
import FormControlLabel from '@material-ui/core/FormControlLabel/';
import Checkbox from '@material-ui/core/Checkbox/';
import Link from '@material-ui/core/Link/';
import Grid from '@material-ui/core/Grid/';
import Box from '@material-ui/core/Box/';
import Typography from '@material-ui/core/Typography/';
import { makeStyles } from '@material-ui/core/styles/';
import Container from '@material-ui/core/Container/';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Learning By Doing - Unicesumar '}    
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#2CB1EE',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#2CB1EE',
    color: 'white'

  },
  button:{
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MenuBookIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar?"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"           
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Não tem uma conta? Clique aqui"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}