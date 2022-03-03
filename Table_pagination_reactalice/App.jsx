import React from "react";
import {BrowserRouter as Router, Switch as Routes ,Route} from "react-router-dom"
import { Header } from "./components/Header";
import { Homepage } from "./Pagaes/Homepage";
import { CoinPage } from "./Pagaes/CoinPage";
import {makeStyles} from "@material-ui/core";

export const App = () => {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh"
    }
  }))

  const classes = useStyles()


  return (
      <Router>
        <div className={classes.App}>
          <Header/>
          <Routes>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/coins/:id" component={CoinPage}/>
          </Routes>
        </div>
          
      </Router>
      )
};
