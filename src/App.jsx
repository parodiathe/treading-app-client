import './App.css'
import Navbar from "@/page/Navbar/Navbar.jsx";
import Home from "@/page/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Portfolio from "@/page/Portfolio/Portfolio.jsx";
import Wallet from "@/page/Wallet/Wallet.jsx";
import Activity from "@/page/Activity/Activity.jsx";
import Withdrawal from "@/page/Withdrawal/Withdrawal.jsx";
import PaymentDetails from "@/page/Payment Details/PaymentDetails.jsx";
import StockDetails from "@/page/Stock Details/StockDetails.jsx";
import Watchlist from "@/page/Watchlist/Watchlist.jsx";
import Profile from "@/page/Profile/Profile.jsx";
import SearchCoin from "@/page/Search/SearchCoin.jsx";
import Notfound from "@/page/Notfound/Notfound.jsx";
import Auth from "@/page/Auth/Auth.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser} from "@/State/Auth/Action.js";

function App() {

    const {auth} = useSelector(store=>store);
    const dispatch = useDispatch()

    console.log(" auth ---- ", auth)

    useEffect(() => {
        dispatch(getUser(auth.jwt || localStorage.getItem("jwt")))
    },[auth.jwt])

    return (
        <>
            {auth.user? <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/activity" element={<Activity/>}/>
                    <Route path="/wallet" element={<Wallet/>}/>
                    <Route path="/withdrawal" element={<Withdrawal/>}/>
                    <Route path="/payment-details" element={<PaymentDetails/>}/>
                    <Route path="/market/:id" element={<StockDetails/>}/>
                    <Route path="/watchlist" element={<Watchlist/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/search" element={<SearchCoin/>}/>
                    <Route path="*" element={<Notfound/>}/>
                </Routes>
            </div> : <Auth/>}
        </>
    )
}

export default App
