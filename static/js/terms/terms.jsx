import React, { useState, useEffect } from 'react'
import Web3 from "web3";
import Envirnment from '../contract/envirnment/envirnment';

const web3 = new Web3(Web3.givenProvider || "http://localhost8545");

function Terms({ t, mincontract, Useraccount }) {
  const [contractBalance, setsetContractBalance] = useState(0)
  const [staked, setstaked] = useState(0)

  const init = React.useCallback(async () => {
    if (Useraccount !== undefined && mincontract !== undefined) {
      await mincontract.methods.getContractBalance()
        .call()
        .then((val) => {
          setsetContractBalance(web3.utils.fromWei(val))
        })

      await mincontract.methods.totalStaked()
        .call()
        .then((val) => {
          setstaked(web3.utils.fromWei(val))
        })



    }
  }, [Useraccount, mincontract])
  useEffect(() => {
    init()

  }, [init])

  return (
    <div class="info-box row">
      <div class="mb-4 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <div class="box-gradient">
          <p>{t("terms.p1")} (<b>{t("terms.b1")}</b>)</p>
          <p>{t("terms.p2")} <b>{t("terms.b2")}</b> {t("terms.p3")}</p>
          <p>{t("terms.p4")} <b>{t("terms.b3")}</b>, {t("terms.p5")}</p>
          <p>{t("terms.p6")} <b>{t("terms.b4")}</b>, {t("terms.p7")} <b>{t("terms.b5")}</b> ({t("terms.p8")})</p>
        </div>
      </div>
      <div class="mb-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <p>
          {t("terms.p9")} <a href={`https://bscscan.com/address/${Envirnment.contractAddress}`} target="_blank" rel="noreferrer"><span class="ml-2 badge badge-primary">{t("terms.span")}</span></a>
        </p>
        <h2>{staked ? parseFloat(staked).toFixed(2) : 0}</h2>
        <p>{t("terms.p10")}</p>
        <h2>{contractBalance ? parseFloat(contractBalance).toFixed(2) : 0}</h2>
      </div>
    </div>
  )
}

export default Terms
