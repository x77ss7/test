import React, { useEffect, useState } from 'react'
import { toast, useToast } from 'react-toastify';
import Web3 from "web3";
import Envirnment from '../contract/envirnment/envirnment';

const web3 = new Web3(Web3.givenProvider || "http://localhost8545");

function Plans({ t, mincontract, Useraccount }) {

  const [amout, setAmout] = React.useState(0)
  const [result1, setResultOne] = React.useState(0)
  const [amouttow, setamoutTwo] = React.useState(0)
  const [result2, setresult2] = React.useState(0)
  const [thirdAmount, setthirdAmount] = useState(0)
  const [resthird, setResulthird] = React.useState(0)
  const [fourthAmount, setfourthAmount] = React.useState(0)
  const [fourRes, setfourRes] = useState(0)
  const [fifthAmount, setfifthAmount] = React.useState(0)
  const [fitthResult, setFifthRestlt] = React.useState(0)
  const [sixAmount, setsixAmount] = React.useState(0)
  const [sixResult, setSixResult] = React.useState(0)

  const [percents1, setpercents1] = React.useState({
    percent: 0,
    profit: 0
  })
  const [percent2, setpercent2] = React.useState({
    percent: 0,
    profit: 0
  })
  const [percent3, setpercent3] = React.useState({
    percent: 0,
    profit: 0
  })
  const [percent4, setpercent4] = React.useState({
    percent: 0,
    profit: 0

  })
  const [percent5, setpercent5] = React.useState({
    percent: 0,
    profit: 0

  })
  const [percent6, setpercent6] = React.useState({
    percent: 0,
    profit: 0
  })


  const [owner, setowner] = React.useState('')

  let getRefAddress = localStorage.getItem("BNB_STACK");
  let getDirectFromUrl;

  let url = window.location.href;

  if (url.includes("?ref=")) {
    let getAddress = url.split("?ref=")[1];
    let final = getAddress.slice(0, 42);
    getDirectFromUrl = final;
  }


  let refLink = getDirectFromUrl ? getDirectFromUrl : getRefAddress ? getRefAddress : Envirnment.defaultAddress

  const InvesTBNB = () => {
    if (mincontract !== undefined && Useraccount !== undefined && amout) {
      mincontract.methods.invest(refLink, 0)
        .send({
          from: Useraccount,
          gas: 2100000,
          value: web3.utils.toWei(amout),
        }).then(() => {
          toast.success("Invested successfully!")
        }).catch((err) => {
          toast.error("Something went wrong!");
        });
    }

  }



  const InvestTwo = async () => {

    if (mincontract !== undefined && Useraccount !== undefined && amouttow) {
      await mincontract.methods.invest(refLink, 1)
        .send({
          from: Useraccount,
          gas: 2100000,
          value: web3.utils.toWei(amouttow),
        }).then(() => {
          toast.success("Invested successfully!")
        }).catch((err) => {
          toast.error("Something went wrong!");
        });
    }
  }


  const ThirdInvest = async () => {
    if (mincontract !== undefined && Useraccount !== undefined && thirdAmount) {
      await mincontract.methods.invest(refLink, 2)
        .send({
          from: Useraccount,
          gas: 2100000,
          value: web3.utils.toWei(thirdAmount),
        }).then(() => {
          toast.success("Invested successfully!")
        }).catch((err) => {
          toast.error("Something went wrong!");
        });
    }
  }



  const fourthInvest = async () => {
    if (mincontract !== undefined && Useraccount !== undefined && fourthAmount) {
      await mincontract.methods.invest(refLink, 3)
        .send({
          from: Useraccount,
          gas: 2100000,
          value: web3.utils.toWei(fourthAmount),
        }).then(() => {
          toast.success("Invested successfully!")
        }).catch((err) => {
          toast.error("Something went wrong!");
        });
    }
  }



  const fifthInvest = async () => {
    if (mincontract !== undefined && Useraccount !== undefined && fifthAmount) {
      await mincontract.methods.invest(refLink, 4)
        .send({
          from: Useraccount,
          gas: 2100000,
          value: web3.utils.toWei(fifthAmount),
        }).then(() => {
          toast.success("Invested successfully!")
        }).catch((err) => {
          toast.error("Something went wrong!");
        });
    }
  }

  const sixthInvst = async () => {
    if (mincontract !== undefined && Useraccount !== undefined && sixAmount) {

      await mincontract.methods.invest(refLink, 5)
        .send({
          from: Useraccount,
          gas: 2100000,
          value: web3.utils.toWei(sixAmount),
        }).then(() => {
          toast.success("Invested successfully!")
        }).catch((err) => {
          toast.error("Something went wrong!");
        });
    }
  }



  const runOwner = React.useCallback(async () => {
    if (mincontract !== undefined && Useraccount !== undefined) {
      mincontract.methods.owner().call()
        .then((val) => {

          setowner(val)
        })
      mincontract.methods.getResult(0, "1000000000000000000").call()
        .then((val) => {

          setpercents1((prevState) => ({
            ...prevState,

            profit: web3.utils.fromWei(val.profit),
            percent: val.percent,
          }))
        })
      mincontract.methods.getResult(1, "1000000000000000000").call()
        .then((val) => {
          setpercent2((prevState) => ({
            ...prevState,
            profit: web3.utils.fromWei(val.profit),
            percent: val.percent,
          }))
        })
      mincontract.methods.getResult(2, "1000000000000000000").call()
        .then((val) => {

          setpercent3((prevState) => ({
            ...prevState,
            profit: web3.utils.fromWei(val.profit),
            percent: val.percent,
          }))
        })
      mincontract.methods.getResult(3, "1000000000000000000").call()
        .then((val) => {
          setpercent4((prevState) => ({
            ...prevState,
            profit: web3.utils.fromWei(val.profit),
            percent: val.percent,
          }))
        })
      mincontract.methods.getResult(4, "1000000000000000000").call()
        .then((val) => {

          setpercent5((prevState) => ({
            ...prevState,
            profit: web3.utils.fromWei(val.profit),
            percent: val.percent,
          }))
        })
      mincontract.methods.getResult(5, "1000000000000000000").call()
        .then((val) => {
          setpercent6((prevState) => ({
            ...prevState,
            profit: web3.utils.fromWei(val.profit),
            percent: val.percent,
          }))
        })
    }
  }, [Useraccount, mincontract])


  useEffect(() => {
    runOwner()
  }, [runOwner])




  const AmoutOne = React.useCallback(async () => {
    if (mincontract !== undefined && Useraccount !== undefined && amout !== null && amout !== undefined) {
      mincontract.methods.getResult(0, web3.utils.toWei(amout ? amout : "0").toString()).call().then((val) => {
        console.log(val, "this is the  value")
        setResultOne(web3.utils.fromWei(val.profit))
      })
    }
  }, [amout])


  React.useEffect(() => {

    AmoutOne()
  }, [AmoutOne])




  const TwoAmount = React.useCallback(async () => {
    if (mincontract !== undefined && Useraccount !== undefined && amouttow !== null && amouttow !== undefined) {
      mincontract.methods.getResult(1, web3.utils.toWei(amouttow ? amouttow : "0").toString()).call().then((val) => {
        console.log(val, "this is the  value")
        setresult2(web3.utils.fromWei(val.profit))
      })
    }
  }, [amouttow])


  React.useEffect(() => {
    TwoAmount()
  }, [TwoAmount])



  const ThiAmount = React.useCallback(async () => {
    if (mincontract !== undefined && Useraccount !== undefined && thirdAmount !== null && thirdAmount !== undefined) {
      mincontract.methods.getResult(2, web3.utils.toWei(thirdAmount ? thirdAmount : "0").toString()).call().then((val) => {
        console.log(val, "this is the  value")
        setResulthird(web3.utils.fromWei(val.profit))
      })
    }
  }, [thirdAmount])


  React.useEffect(() => {
    ThiAmount()
  }, [ThiAmount])




  const FourtInt = React.useCallback(async () => {
    if (mincontract !== undefined && Useraccount !== undefined && fourthAmount !== null && fourthAmount !== undefined) {
      mincontract.methods.getResult(3, web3.utils.toWei(fourthAmount ? fourthAmount : "0").toString()).call().then((val) => {
        console.log(val, "this is the  value")
        setfourRes(web3.utils.fromWei(val.profit))
      })
    }
  }, [fourthAmount])


  React.useEffect(() => {
    FourtInt()
  }, [FourtInt])



  const FifthInit = React.useCallback(async () => {

    if (mincontract !== undefined && Useraccount !== undefined && fifthAmount !== null && fifthAmount !== undefined) {
      mincontract.methods.getResult(4, web3.utils.toWei(fifthAmount ? fifthAmount : "0").toString()).call().then((val) => {
        console.log(val, "this is the  value")
        setFifthRestlt(web3.utils.fromWei(val.profit))
      })
    }

  }, [fifthAmount])

  React.useEffect(() => {
    FifthInit()
  }, [FifthInit])






  const SixInit = React.useCallback(async () => {

    if (mincontract !== undefined && Useraccount !== undefined && sixAmount !== null && sixAmount !== undefined) {
      await mincontract.methods.getResult(5, web3.utils.toWei(sixAmount ? sixAmount : "0").toString()).call().then((val) => {
        console.log(val, "this is the  value")
        setSixResult(web3.utils.fromWei(val.profit))
      })
    }
  }, [sixAmount])

  React.useEffect(() => {
    SixInit()
  }, [SixInit])
  // resthird, setamoutThird
  return (
    <div>
      <div class="mb-4 row">
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div class="plan-box text-center">
            <div class="plan-box-name">{t("plans.plan1")}</div>
            <div class="row">
              <div class="col">
                <p>{t("plans.dailyProfit")}</p>
                <h2>{(percents1.percent / 10).toFixed(0)}%</h2>
              </div>
              <div class="col">
                <p>{t("plans.totalReturn")}</p>
                <h2>{parseInt(percents1.profit * 100)}%</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.withdrawtime")}</p>
                <h3>{t("plans.anyTime")}</h3>
              </div>
              <div class="col">
                <p>{t("plans.days")}</p>
                <h2>14</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.enterAmount")}</p>
                <input placeholder="10" type="text" id="plan0amount" class="btn-secondary form-control form-control-lg" value={amout} onChange={(e) => setAmout(e.target.value)} />
              </div>
              <div class="col">
                <p>{t("plans.14days")}</p>
                <h4 id="plan0profit">{result1 ? parseFloat(result1).toFixed(1) : 0}</h4>
              </div>
            </div>
            <button type="button" class="mt-2 btn btn-warning btn-block btn-lg" onClick={InvesTBNB} >{t("plans.stakeBNB")}</button>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div class="plan-box text-center">
            <div class="plan-box-name">{t("plans.plan2")}</div>
            <div class="row">
              <div class="col">
                <p>{t("plans.dailyProfit")}</p>
                <h2>{percent2.percent / 10}%</h2>
              </div>
              <div class="col">
                <p>{t("plans.totalReturn")}</p>
                <h2>{parseInt(percent2.profit * 100)}%</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.withdrawtime")}</p>
                <h3>{t("plans.anyTime")}</h3>
              </div>
              <div class="col">
                <p>{t("plans.days")}</p>
                <h2>21</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.enterAmount")}</p>
                <input placeholder="10" type="text" id="plan1amount" class="btn-secondary form-control form-control-lg" value={amouttow} onChange={(e) => setamoutTwo(e.target.value)} />
              </div>
              <div class="col">
                <p>{t("plans.21days")}</p>
                <h4 id="plan1profit">{result2 ? parseFloat(result2).toFixed(1) : 0}</h4>
              </div>
            </div>
            <button type="button" class="mt-2 btn btn-warning btn-block btn-lg" onClick={InvestTwo} >{t("plans.stakeBNB")}  </button>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div class="plan-box text-center">
            <div class="plan-box-name">{t("plans.plan3")}</div>
            <div class="row">
              <div class="col">
                <p>{t("plans.dailyProfit")}</p>
                <h2>{percent3.percent / 10}%</h2>
              </div>
              <div class="col">
                <p>{t("plans.totalReturn")}</p>
                <h2>{percent3 ? parseFloat(percent3.profit * 100).toFixed(0) : 0}%</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.withdrawtime")}</p>
                <h3>{t("plans.anyTime")}</h3>
              </div>
              <div class="col">
                <p>{t("plans.days")}</p>
                <h2> 28</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.enterAmount")}</p>
                <input placeholder="10" type="text" id="plan2amount" class="btn-secondary form-control form-control-lg" value={thirdAmount} onChange={(e) => setthirdAmount(e.target.value)} />
              </div>
              <div class="col">
                <p>{t("plans.28days")}</p>
                <h4 id="plan2profit">{resthird ? parseFloat(resthird).toFixed(1) : 0}</h4>
              </div>
            </div>
            <button type="button" class="mt-2 btn btn-warning btn-block btn-lg" onClick={ThirdInvest}>{t("plans.stakeBNB")}</button>
          </div>
        </div>
      </div>
      <div class="mb-4 row">
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div class="plan-box1 text-center">
            <div class="plan-box-name1">{t("plans.plan4")}</div>
            <div class="row">
              <div class="col">
                <p>{t("plans.dailyProfit")}</p>
                <h2>{percent4.percent / 10}%</h2>
              </div>
              <div class="col">
                <p>{t("plans.totalReturn")}</p>
                <h2>{parseFloat(percent4.profit * 100).toFixed(0)}%</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.withdrawtime")}</p>
                <h3>{t("plans.endOfPlan")}</h3>
              </div>
              <div class="col">
                <p>{t("plans.days")}</p>
                <h2>14</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.enterAmount")}</p>
                <input placeholder="10" type="text" id="plan3amount" class="btn-secondary form-control form-control-lg" value={fourthAmount} onChange={(e) => setfourthAmount(e.target.value)} />
              </div>
              <div class="col">
                <p>{t("plans.14days")}</p>
                <h4 id="plan3profit">{fourRes ? parseFloat(fourRes).toFixed(1) : 0}</h4>
              </div>
            </div>
            <button type="button" class="mt-2 btn btn-success btn-block btn-lg" onClick={fourthInvest}>{t("plans.stakeBNB")}</button><i class="small">{t("plans.planUse")}</i>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div class="plan-box1 text-center">
            <div class="plan-box-name1">{t("plans.plan5")}</div>
            <div class="row">
              <div class="col">
                <p>{t("plans.dailyProfit")}</p>
                <h2>{percent5.percent / 10}%</h2>
              </div>
              <div class="col">
                <p>{t("plans.totalReturn")}</p>
                <h2>{parseFloat(percent5.profit * 100).toFixed(0)}%</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.withdrawtime")}</p>
                <h3>{t("plans.endOfPlan")}</h3>
              </div>
              <div class="col">
                <p>{t("plans.days")}</p>
                <h2>21</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.enterAmount")}</p>
                <input placeholder="10" type="text" id="plan4amount" class="btn-secondary form-control form-control-lg" value={fifthAmount} onChange={(e) => setfifthAmount(e.target.value)} />
              </div>
              <div class="col">
                <p>{t("plans.21days")}</p>
                <h4 id="plan4profit">{fitthResult ? parseFloat(fitthResult).toFixed(1) : 0}</h4>
              </div>
            </div>
            <button type="button" class="mt-2 btn btn-success btn-block btn-lg" onClick={fifthInvest}>{t("plans.stakeBNB")}</button><i class="small">{t("plans.planUse")}</i>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div class="plan-box1 text-center">
            <div class="plan-box-name1">{t("plans.plan6")}</div>
            <div class="row">
              <div class="col">
                <p>{t("plans.dailyProfit")}</p>
                <h2>{percent6.percent / 10}%</h2>
              </div>
              <div class="col">
                <p>{t("plans.totalReturn")}</p>
                <h2>{parseFloat(percent6.profit * 100).toFixed(0)}%</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.withdrawtime")}</p>
                <h3>{t("plans.endOfPlan")}</h3>
              </div>
              <div class="col">
                <p>{t("plans.days")}</p>
                <h2>28</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>{t("plans.enterAmount")}</p>
                <input placeholder="10" type="text" id="plan5amount" class="btn-secondary form-control form-control-lg" value={sixAmount} onChange={(e) => { setsixAmount(e.target.value) }} />
              </div>
              <div class="col">
                <p>{t("plans.28days")}</p>
                <h4 id="plan5profit">{sixResult ? parseFloat(sixResult).toFixed(1) : 0}</h4>
              </div>
            </div>
            <button type="button" class="mt-2 btn btn-success btn-block btn-lg" onClick={sixthInvst} >{t("plans.stakeBNB")}</button><i class="small">{t("plans.planUse")}</i>
          </div>
        </div>
      </div>
      <p class="small">
        {t("plans.p1")}<br />
        {t("plans.p2")}<br />
        {t("plans.p3")}
      </p>
    </div>
  )
}

export default Plans
