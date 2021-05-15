import React, {
    useEffect,
    useLayoutEffect
} from 'react'

import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Web3 from "web3";
import App from './App'
import bnbStake from './contract/Abi/bnbStake.json'
import Envirnment from './contract/envirnment/envirnment';
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
export default function Main() {



    const [Useraccount, setAccount] = React.useState('')
    const [mincontract, setMintContract] = React.useState()



    const connectTotheWallet = () => {
        Ethereum();
        async function Ethereum() {
            window.ethereum && window.ethereum.enable();
            if (typeof window.ethereum !== "undefined") {
                let connectAccount = setInterval(async () => {

                    const account = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });

                    if (account) {
                        setAccount(account[0])

                        const Contract = new web3.eth.Contract(
                            bnbStake,
                            Envirnment.contractAddress
                        );
                        setMintContract(Contract)

                    }

                    clearInterval(connectAccount);
                }, 500);
            }
        }
    }





    useEffect(() => {
        Ethereum();
        async function Ethereum() {
            // window.ethereum && window.ethereum.enable();
            if (typeof window.ethereum !== "undefined") {
                let connectAccount = setInterval(async () => {
                    // const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
                    const account = await web3.eth.getAccounts()

                    if (account) {
                        setAccount(account[0])

                        const Contract = new web3.eth.Contract(
                            bnbStake,
                            Envirnment.contractAddress
                        );
                        setMintContract(Contract)

                    }

                    clearInterval(connectAccount);
                }, 500);
            }
        }
    }, [])

    React.useLayoutEffect(() => {

    }, []);

    let final
    const Init = async () => {
        //
        try {
            Ethereum();
            async function Ethereum() {
                window.ethereum.on("accountsChanged", (accounts) => {

                    final = Web3.utils.toChecksumAddress(accounts[0]);
                    setAccount(final)

                });
                // window.location.reload()
            }
        } catch (err) {

        }
    }

    React.useLayoutEffect(() => {

        Init()
    }, [final]);











    return ( <
        div >
        <
        ToastContainer position = "top-right"
        autoClose = {
            2000
        }
        hideProgressBar = {
            false
        }
        newestOnTop = {
            false
        }
        closeOnClick rtl = {
            false
        }
        pauseOnFocusLoss draggable pauseOnHover /
        >

        <
        App mincontract = {
            mincontract && mincontract
        }
        Useraccount = {
            Useraccount && Useraccount
        }
        connectTotheWallet = {
            connectTotheWallet
        }
        />



        <
        /div>
    )
}