import { AppBar, Container, createTheme, MenuItem, Select, Toolbar, Typography,ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useHistory } from 'react-router-dom'
import {CryptoState} from "../../CryptoContext"

const useStyles = makeStyles(() => ({
  title: {
    flex:1,
    color: "gold",
    fomtFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer"
  }
}))

export const Header = () => {

  const classes = useStyles()
  const history = useHistory()
  const {currency,setCurrency} = CryptoState()

  

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position='static'>
       <Container>
         <Toolbar>
           <Typography   className={classes.title} onClick={() => history.push("/")} variant="h6">
             Crypto Hunter
             <Select variant='outlined' 
             style={{
               width: 100,
               height: 40,
               marginLeft: 15
             }}
             value={currency}
             onChange={(e) => setCurrency(e.target.value)}
            >
               <MenuItem value={"USD"}>USD</MenuItem>
               <MenuItem value={"INR"}>INR</MenuItem>
             </Select>
           </Typography>
         </Toolbar>
       </Container>
    </AppBar>
    </ThemeProvider>
    
  )
}