import { AppBar, Container, Typography, Toolbar, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontWeight: "bold",
        cursor: "pointer",
    }
}));

const Header = () => {
    const classes = useStyles();

    const history = useNavigate();//click on cryptohunter to go on homepage

    const {currency, setCurrency } = CryptoState();

    console.log(currency);

    const darkTheme = createTheme({
        palette: {
            type : "dark",
        },
        
      });

    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography
                        onClick={() => history("/")}
                        className={classes.title}
                        variant = "h6">
                        Crypto Hunter
                    </Typography>
                    <Select variant="outlined" style={{
                        width: 100,
                        height: 40,
                        marginRight: 15,  
                    }}
                    value = {currency}
                    onChange = {(e) => setCurrency(e.target.value)} 
                    >
                        <MenuItem value={"USD"}> USD</MenuItem>
                        <MenuItem value={"INR"}> INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>

        </AppBar>
        </ThemeProvider>
    );
};
export default Header;