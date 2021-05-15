import React, {
    useEffect
} from "react";
import "./App.css";
import Header from "./header/header";
import Terms from "./terms/terms";
import Plans from "./investementPlans/plans";
import Footer from "./footer/footer";
import Referal from "./referal/referal";
import Stake from "./Stakes/Stake";
import {
    useTranslation
} from "react-i18next";

function App({
    mincontract,
    Useraccount,
    connectTotheWallet
}) {
    const [name, setName] = React.useState("English");
    const [lang, setLang] = React.useState("en");
    const {
        i18n,
        t
    } = useTranslation();
    const [selectedImg, setSelectedImg] = React.useState("/media/Britain.svg");

    React.useEffect(() => {
        let getUrl = window.location.href;
        if (getUrl.includes("?lang")) {
            let getFinal = getUrl.split("?lang=")[1];
            setLang(getFinal);
            i18n.changeLanguage(getFinal);
            switch (getFinal) {
                case "en":
                    return setName("English"), setSelectedImg("/media/Britain.svg");
                case "fr":
                    return setName("Française"), setSelectedImg("/media/French.svg");
                case "ch":
                    return setName("中文"), setSelectedImg("/media/China.svg");
                case "ar":
                    return setName("عربي"), setSelectedImg("/media/Arab.svg");
                case "jp":
                    return setName("日本語"), setSelectedImg("/media/Japan.svg");
                case "kr":
                    return setName("한국어"), setSelectedImg("/media/Korea.svg");
                case "ru":
                    return setName("Русский"), setSelectedImg("/media/Russia.svg");
                case "es":
                    return setName("Español"), setSelectedImg("/media/Spain.svg");
            }
        }
    }, []);

    React.useEffect(() => {
        if (window.location.href.includes("?ref=")) {
            let getAddress = window.location.href.split("?ref=")[1];
            console.log(getAddress, "getAddress");
            let final = getAddress.slice(0, 42);
            localStorage.setItem("BNB_STACK", final);
        }
    }, []);

    React.useEffect(() => {
        if (Useraccount === undefined) {
            window.location.reload();
        }
    }, []);

    return ( <
        div id = "root" >
        <
        div class = "container" >
        <
        Header t = {
            t
        }
        name = {
            name
        }
        selectedImg = {
            selectedImg
        }
        mincontract = {
            mincontract
        }
        Useraccount = {
            Useraccount
        }
        connectTotheWallet = {
            connectTotheWallet
        }
        /> <
        Terms t = {
            t
        }
        mincontract = {
            mincontract
        }
        Useraccount = {
            Useraccount
        }
        /> <
        Plans t = {
            t
        }
        mincontract = {
            mincontract
        }
        Useraccount = {
            Useraccount
        }
        /> <
        Referal t = {
            t
        }
        mincontract = {
            mincontract
        }
        Useraccount = {
            Useraccount
        }
        /> <
        Stake t = {
            t
        }
        mincontract = {
            mincontract
        }
        Useraccount = {
            Useraccount
        }
        /> <
        Footer t = {
            t
        }
        /> <
        div class = "Toastify" > < /div> <
        /div> <
        /div>
    );
}

export default App;