import { Route,Routes } from 'react-router-dom';
import './App.css';
import CoinPage from './Pages/CoinPage';
import Header from "./Components/Header";
import HomePage from './Pages/HomePage';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles (() => ({
  App : {
      backgroundColor : "#14161a",
      color : "white",
      minHeight : "100vh",
  }
}));

function App() {
  const classes = useStyles();
  return (
    // <BrowserRouter>
      <div className={classes.App}>
      <Header/>
      <Routes>
            <Route path='/' element = {<HomePage/>}/>
            <Route path='/coins/:id' element = {<CoinPage/>}/>
      </Routes>
            
      </div>
    // </BrowserRouter>
  );
}
export default App;
