import React from "react";
import Web3 from "web3";
import moment from "moment";

const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
let depositInfoArr = [];

const Box = ({ data, calCulatePercentage }) => {
  switch (data.plan) {
    case "0":
    case "3":
      data.newFinish = moment.unix(data.start).add(14, "days").format("D MMM");
      data.progress = calCulatePercentage(data.start, "", 14);
      break;
    case "1":
    case "4":
      data.newFinish = moment.unix(data.start).add(21, "days").format("D MMM");
      data.progress = calCulatePercentage(data.start, "", 21);
      break;
    case "2":
    case "5":
      data.newFinish = moment.unix(data.start).add(28, "days").format("D MMM");
      data.progress = calCulatePercentage(data.start, "", 28);
      break;
    default:
      break;
  }

  // console.log(data);

  return (
    <div className="col-sm-12 col-lg-4 pb-3">
      <div className="plan-box p-3">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <span className="stake-small-text stake-bg-color rounded d-block text-center px-1">
              plan {+data.plan + 1}
            </span>
            <span className="stake-small-text">{+data.percent / 10}%</span>
          </div>
          <span className="stake-small-text stake-bg-color rounded px-1">
            active
          </span>
          <div className="stake-small-text">
            {moment.unix(data.start).format("D MMM")} {"->"} <br />{" "}
            {data.newFinish}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h1
              className="mb-0"
              style={{ fontSize: data.amount < 0.1 ? 30 : "" }}
            >
              {parseFloat(web3.utils.fromWei(data.amount)).toFixed(
                data.amount < 0.1 ? 4 : 2
              )}
            </h1>
            <span className="stake-small-text text-danger">BNB</span>
          </div>
          <div>
            <h1 className="mb-0">
              {parseFloat(web3.utils.fromWei(data.profit)).toFixed(2)}
            </h1>
            <span className="stake-small-text text-danger d-block text-right">
              BNB
            </span>
          </div>
        </div>
        <div class="progress" style={{ marginTop: 10 }}>
          <div
            class="progress-bar"
            role="progressbar"
            style={{
              width: `${data.progress}%`,
              color: data.progress === 0 && "black",
            }}
            aria-valuenow={data.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {data.progress.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
};

// const newDepositDB = JSON.parse(localStorage.getItem("newDeposit"));

const Stake = ({ t, mincontract, Useraccount }) => {
  const [newDeposits, setNewDeposists] = React.useState([]);

  //getting data from events
  // React.useEffect(() => {
  //   if (mincontract) {
  //     mincontract.events.NewDeposit({}, (error, event) => {
  //       if (!error) {
  //         let a;
  //         if (newDepositDB) {
  //           a = newDeposits.slice();
  //         } else {
  //           a = [];
  //         }
  //         if (event.returnValues.user === Useraccount) {
  //           a.push(event.returnValues);
  //           setNewDeposists(a);
  //           localStorage.setItem("newDeposit", JSON.stringify(a));
  //         }
  //       } else {
  //         console.log("EVENT ERROR", error);
  //       }
  //     });
  //   }
  // }, [mincontract]);

  //now getting from the contract
  const depositInfoFunction = async () => {
    let depositArr = [];
    let getDeposits = await mincontract.methods
      .getUserAmountOfDeposits(Useraccount)
      .call();

    if (getDeposits) {
      for (let i = 0; i < getDeposits; i++) {
        let getResult = await mincontract.methods
          .getUserDepositInfo(Useraccount, i)
          .call();

        if (getResult) {
          depositArr.push(getResult);
        }
      }
    }

    if (depositArr.length) {
      setNewDeposists(depositArr);
    }
  };

  React.useEffect(() => {
    if (mincontract) {
      depositInfoFunction();
    }
  }, [mincontract]);

  const calCulatePercentage = (date, delay, days) => {
    const oneDay = 24 * 60 * 60 * 1000;
    // const oneDay = 60 * 1000;
    const firstDate = moment.unix(date);
    const secondDate = new Date();
    const getAlldays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    let getPercent = 100 / days;
    let total = getPercent * getAlldays;
    let sendFinalValue;
    // console.log("===>", days === 28 && getAlldays);
    if (getAlldays <= days) {
      sendFinalValue = total;
    } else {
      sendFinalValue = 100;
    }

    return sendFinalValue;
  };

  return (
    <>
      <div className="mb-4 ">
        <h2>{t("footer.yourStake")}</h2>
      </div>
      <div className="row">
        {newDeposits &&
          newDeposits.map((data, i) => (
            <Box data={data} calCulatePercentage={calCulatePercentage} />
          ))}
      </div>
    </>
  );
};

export default Stake;
