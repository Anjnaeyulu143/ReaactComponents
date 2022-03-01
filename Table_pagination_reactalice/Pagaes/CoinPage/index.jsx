import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {CryptoState} from "../../CryptoContext"
import {SingleCoin} from "../../config/api"
import {makeStyles, Typography} from "@material-ui/core"
import {CoinInfo} from "../../components/CoinInfo"
import { numberWithCommas } from '../../components/Banner/Carousel'
const useStyles = makeStyles((theme) => ({
      container:{
        display:"flex",
        alignItems: "center",
        [theme.breakpoints.down("md")]:{
            flexDirection: 'column',
            alignItems:"center" 
        }
      },
      sidebar: {
        width: "30%",
        [theme.breakpoints.down("md")]:{
          width: "100%"
        },
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:25,
        borderRight: "2px solid grey"
      },
      header: {
        fontWeight:"bold",
        maringBottom: 20,
        fontFamily:"Montserrat"
      },
      marketData:{
        alignSelf:"start",
        paddingTop: 10,
        width: "100%",
        [theme.breakpoints.down("md")]:{
          display:"flex",
          justifyContent: "space-around"
        },
        [theme.breakpoints.down("sm")]:{
          flexDirection:"column",
          alignItems:"center"
        },
        [theme.breakpoints.down()]:{
          alignItems:"start"
        }
      },
      description:{
        textAlign:"center"
      }
}))

export const CoinPage = () => {

  const classes = useStyles()

  const {id} = useParams()

  const [coin,setCoin] = useState()

  const {currency,symbol} = CryptoState()

  console.log(coin)

  const fetchCoin = async () => {
    const {data} = await axios.get(SingleCoin(id))
    setCoin(data)
  }

  useEffect(() => {
    fetchCoin()
  },[])

  if (!coin) return <linearGradient style={{backgroundColor: "gold"}}/>

  return (
    <div className = {classes.container}>
      <div className={classes.sidebar}>
          <img
          src = {coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{marginBottom: 20}}/>
          <Typography variant="h3" className={classes.header}>
            {coin?.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            {coin?.description.en.split('. ')[0]}.
          </Typography>
          <div className={classes.marketData}>
              <span style={{display:"flex"}}>
                <Typography variant='h5' className={classes.heading}>
                  Rank:
                </Typography>
                <Typography variant='h5'
                style={{
                  fontFamily:"Montserrat"
                }}>
                  {coin?.market_cap_rank}
                </Typography>
              </span>
              <span style={{display:"flex"}}>
                <Typography variant='h5' className={classes.heading}>
                  CurrentPrice:
                </Typography>
                <Typography variant='h5'
                style={{
                  fontFamily:"Montserrat"
                }}>
                  {symbol} {" "}
                  {numberWithCommas(
                    coin?.market_data.current_price[currency.toLowerCase()]
                  )}
                </Typography>
              </span>
          </div>
      </div>
      {/* <chart/> */}
      <CoinInfo coin = {coin}/>
    </div>
  )
}
