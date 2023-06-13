import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
// import { numberWithCommas } from "../CoinsTable";


export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const useStyles = makeStyles((theme) => ({
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
    },
}));

const Carousel = () => {
    const [trending, setTrending] = useState([]);
    const { currency, symbol } = CryptoState();

    //   const fetchTrendingCoins = async () => {
    //     const {data}  = await axios.get(TrendingCoins(currency));

    //     console.log(data);
    //     setTrending(data);
    //   };



    useEffect(() => {
        // fetchTrendingCoins();

        // eslint-disable-next-line
        axios.get(TrendingCoins(currency))
            .then((response) => {
                setTrending(response.data);
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
                // setTrending([{ "id": "bitcoin", "symbol": "btc", "name": "Bitcoin", "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", "current_price": 2155864, "market_cap": 41861358694372, "market_cap_rank": 1, "fully_diluted_valuation": 45311214302357, "total_volume": 887129452398, "high_24h": 2159498, "low_24h": 2122634, "price_change_24h": 16613.88, "price_change_percentage_24h": 0.77662, "market_cap_change_24h": 341950618769, "market_cap_change_percentage_24h": 0.82359, "circulating_supply": 19401125.0, "total_supply": 21000000.0, "max_supply": 21000000.0, "ath": 5128383, "ath_change_percentage": -57.92468, "ath_date": "2021-11-10T14:24:11.849Z", "atl": 3993.42, "atl_change_percentage": 53933.48542, "atl_date": "2013-07-05T00:00:00.000Z", "roi": null, "last_updated": "2023-06-13T12:21:03.486Z" }, { "id": "ethereum", "symbol": "eth", "name": "Ethereum", "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880", "current_price": 144132, "market_cap": 17343763118100, "market_cap_rank": 2, "fully_diluted_valuation": 17343763118100, "total_volume": 481351085631, "high_24h": 144635, "low_24h": 142392, "price_change_24h": 360.61, "price_change_percentage_24h": 0.25082, "market_cap_change_24h": 62044284862, "market_cap_change_percentage_24h": 0.35902, "circulating_supply": 120226966.54375, "total_supply": 120226966.54375, "max_supply": null, "ath": 362338, "ath_change_percentage": -60.17481, "ath_date": "2021-11-10T14:24:19.604Z", "atl": 28.13, "atl_change_percentage": 512859.8329, "atl_date": "2015-10-20T00:00:00.000Z", "roi": { "times": 88.38264113272444, "currency": "btc", "percentage": 8838.264113272444 }, "last_updated": "2023-06-13T12:21:02.472Z" }, { "id": "ripple", "symbol": "xrp", "name": "XRP", "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731", "current_price": 45.85, "market_cap": 2392002901267, "market_cap_rank": 5, "fully_diluted_valuation": 4601154313013, "total_volume": 154984737073, "high_24h": 46.22, "low_24h": 42.47, "price_change_24h": 3.0, "price_change_percentage_24h": 6.99189, "market_cap_change_24h": 164740672197, "market_cap_change_percentage_24h": 7.39655, "circulating_supply": 51987017573.0, "total_supply": 99988884267.0, "max_supply": 100000000000.0, "ath": 215.1, "ath_change_percentage": -78.61037, "ath_date": "2018-01-07T00:00:00.000Z", "atl": 0.159343, "atl_change_percentage": 28774.86183, "atl_date": "2013-08-16T00:00:00.000Z", "roi": null, "last_updated": "2023-06-13T12:21:00.929Z" }, { "id": "solana", "symbol": "sol", "name": "Solana", "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422", "current_price": 1286.76, "market_cap": 514099542275, "market_cap_rank": 11, "fully_diluted_valuation": 708607730166, "total_volume": 32751262212, "high_24h": 1288.84, "low_24h": 1220.8, "price_change_24h": 21.52, "price_change_percentage_24h": 1.70122, "market_cap_change_24h": 8527358045, "market_cap_change_percentage_24h": 1.68667, "circulating_supply": 398977618.816064, "total_supply": 549929734.629377, "max_supply": null, "ath": 19286.66, "ath_change_percentage": -93.33423, "ath_date": "2021-11-06T21:54:35.825Z", "atl": 38.03, "atl_change_percentage": 3280.88265, "atl_date": "2020-05-11T19:35:23.449Z", "roi": null, "last_updated": "2023-06-13T12:20:59.017Z" }, { "id": "binancecoin", "symbol": "bnb", "name": "BNB", "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850", "current_price": 20043, "market_cap": 3124035251074, "market_cap_rank": 4, "fully_diluted_valuation": 4008894578111, "total_volume": 97312085261, "high_24h": 20096, "low_24h": 18819.73, "price_change_24h": 839.16, "price_change_percentage_24h": 4.36976, "market_cap_change_24h": 130679808387, "market_cap_change_percentage_24h": 4.36566, "circulating_supply": 155855196.0, "total_supply": 157900174.0, "max_supply": 200000000.0, "ath": 50351, "ath_change_percentage": -60.18786, "ath_date": "2021-05-10T07:24:17.097Z", "atl": 2.58, "atl_change_percentage": 775445.07805, "atl_date": "2017-10-19T00:00:00.000Z", "roi": null, "last_updated": "2023-06-13T12:20:59.023Z" }, { "id": "dogecoin", "symbol": "doge", "name": "Dogecoin", "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256", "current_price": 5.11, "market_cap": 714454123782, "market_cap_rank": 9, "fully_diluted_valuation": 714454328277, "total_volume": 18672547901, "high_24h": 5.13, "low_24h": 5.02, "price_change_24h": 0.062985, "price_change_percentage_24h": 1.24742, "market_cap_change_24h": 8718563134, "market_cap_change_percentage_24h": 1.23539, "circulating_supply": 139749906383.705, "total_supply": 139749946383.705, "max_supply": null, "ath": 53.62, "ath_change_percentage": -90.46202, "ath_date": "2021-05-08T05:08:23.458Z", "atl": 0.00552883, "atl_change_percentage": 92397.7442, "atl_date": "2015-05-06T00:00:00.000Z", "roi": null, "last_updated": "2023-06-13T12:20:58.568Z" }, { "id": "cardano", "symbol": "ada", "name": "Cardano", "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860", "current_price": 23.44, "market_cap": 822323488980, "market_cap_rank": 8, "fully_diluted_valuation": 1055914824057, "total_volume": 27632239729, "high_24h": 23.55, "low_24h": 22.59, "price_change_24h": 0.222295, "price_change_percentage_24h": 0.95739, "market_cap_change_24h": 8377932254, "market_cap_change_percentage_24h": 1.0293, "circulating_supply": 35045020830.3234, "total_supply": 45000000000.0, "max_supply": 45000000000.0, "ath": 225.26, "ath_change_percentage": -89.58272, "ath_date": "2021-09-02T06:00:10.474Z", "atl": 1.38, "atl_change_percentage": 1606.11578, "atl_date": "2017-11-02T00:00:00.000Z", "roi": null, "last_updated": "2023-06-13T12:21:00.535Z" }, { "id": "chainlink", "symbol": "link", "name": "Chainlink", "image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700", "current_price": 438.23, "market_cap": 226807952275, "market_cap_rank": 22, "fully_diluted_valuation": 438615286973, "total_volume": 10458040491, "high_24h": 437.95, "low_24h": 420.63, "price_change_24h": 14.67, "price_change_percentage_24h": 3.46446, "market_cap_change_24h": 7730372567, "market_cap_change_percentage_24h": 3.5286, "circulating_supply": 517099971.2305644, "total_supply": 1000000000.0, "max_supply": 1000000000.0, "ath": 3862.15, "ath_change_percentage": -88.63932, "ath_date": "2021-05-10T00:13:57.214Z", "atl": 9.55, "atl_change_percentage": 4496.02199, "atl_date": "2017-11-29T00:00:00.000Z", "roi": null, "last_updated": "2023-06-13T12:21:07.499Z" }, { "id": "polkadot", "symbol": "dot", "name": "Polkadot", "image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644", "current_price": 384.24, "market_cap": 477402158452, "market_cap_rank": 13, "fully_diluted_valuation": 508508676557, "total_volume": 9492181235, "high_24h": 384.59, "low_24h": 369.33, "price_change_24h": 11.35, "price_change_percentage_24h": 3.04262, "market_cap_change_24h": 14740177780, "market_cap_change_percentage_24h": 3.18595, "circulating_supply": 1242353471.77848, "total_supply": 1323302604.65885, "max_supply": null, "ath": 4095.22, "ath_change_percentage": -90.63097, "ath_date": "2021-11-04T14:10:09.301Z", "atl": 202.26, "atl_change_percentage": 89.70039, "atl_date": "2020-08-19T03:44:11.556Z", "roi": null, "last_updated": "2023-06-13T12:21:07.042Z" }, { "id": "stellar", "symbol": "xlm", "name": "Stellar", "image": "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157", "current_price": 7.05, "market_cap": 189681757157, "market_cap_rank": 26, "fully_diluted_valuation": 352730186880, "total_volume": 4443678598, "high_24h": 7.05, "low_24h": 6.78, "price_change_24h": 0.230752, "price_change_percentage_24h": 3.38319, "market_cap_change_24h": 6104209353, "market_cap_change_percentage_24h": 3.32514, "circulating_supply": 26888616946.6336, "total_supply": 50001787323.4738, "max_supply": 50001787323.4738, "ath": 58.01, "ath_change_percentage": -87.8313, "ath_date": "2021-05-16T09:48:45.220Z", "atl": 0.02966141, "atl_change_percentage": 23697.63408, "atl_date": "2015-03-05T00:00:00.000Z", "roi": null, "last_updated": "2023-06-13T12:21:06.337Z" }])
            })
    }, [currency]);




    const classes = useStyles();


    const items = trending.map((coin) => {
        let profit = coin?.price_change_percentage_24h >= 0;

        return (
            <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
                <img
                    src={coin?.image}
                    alt={coin.name}
                    height="80"
                    style={{ marginBottom: 10 }}
                />
                <span>
                    {coin?.symbol}
                    &nbsp;
                    <span
                        style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                        }}
                    >
                        {profit && "+"}
                        {coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </span>
                <span style={{ fontSize: 22, fontWeight: 500 }}>
                    {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
                </span>
            </Link>
        );
    });

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };

    return (
        <div className={classes.carousel}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
            />
        </div>
    );
};

export default Carousel;