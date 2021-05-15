import React, { useState } from "react";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
function Referal({ t, mincontract, Useraccount }) {
  const [state, setstate] = useState();
  const [staked, setstaked] = useState(0);
  const [referlWithdrawn, setReferalWithdrawn] = useState(0);
  const [totalEarnd, setTotalRefalEarnd] = useState(0);
  const [userAvail, setUserAvailAble] = useState(0);
  const [downlineCount, setDownlineCount] = useState(0);

  const runref = React.useCallback(async () => {
    if (mincontract !== undefined && Useraccount !== undefined) {
      try {
        await mincontract.methods
          .getUserTotalDeposits(Useraccount ? Useraccount : "0")
          .call()
          .then((val) => {
            setstaked(web3.utils.fromWei(val));
          });

        await mincontract.methods
          .getUserReferralWithdrawn(Useraccount ? Useraccount : "0")
          .call()
          .then((val) => {
            setReferalWithdrawn(web3.utils.fromWei(val));
          });

        await mincontract.methods
          .getUserReferralTotalBonus(Useraccount ? Useraccount : "0")
          .call()
          .then((val) => {
            setTotalRefalEarnd(web3.utils.fromWei(val));
          });

        await mincontract.methods
          .getUserDownlineCount(Useraccount ? Useraccount : "0")
          .call()
          .then((val) => {
            setDownlineCount(val[0]);
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, [mincontract, Useraccount]);

  React.useEffect(() => {
    runref();
  }, [runref]);

  React.useEffect(() => {
    setInterval(() => {
      // console.log("hassan me chal ra hun!");
      if (
        mincontract &&
        Useraccount &&
        mincontract !== undefined &&
        Useraccount !== undefined
      ) {
        mincontract.methods
          .getUserAvailable(Useraccount)
          .call()
          .then((val) => {
            // console.log(val)
            setUserAvailAble(web3.utils.fromWei(val));
          });
      }
    }, 1000);
  }, [Useraccount, mincontract]);

  // React.useEffect(() => {
  //   SixInit()
  // }, [SixInit])
  console.log(userAvail);
  const WithDraw = () => {
    if (mincontract !== undefined && Useraccount !== undefined) {
      if (web3.utils.toWei(userAvail) > 100000000000000000) {
        mincontract.methods
          .withdraw()
          .send({
            from: Useraccount,
            gas: 2100000,
          })
          .then(() => {
            toast.success("withdraw successfully!");
          })
          .catch((err) => {
            toast.error("Something went wrong!");
          });
      } else {
        toast.info("minimum withdraw 0.1 bnb");
      }
    }
  };

  return (
    <div class="mb-4 row">
      <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div class="box-gradient1">
          <p>{t("referal.totalStackedBNB")}</p>
          <h2>{staked ? parseFloat(staked).toFixed(5) : 0}</h2>
          <p>{t("referal.availableBNBForWithdrawal")}</p>
          <h2>{parseFloat(userAvail).toFixed(5)}</h2>
          <button type="button" class="btn btn-dark btn-lg" onClick={WithDraw}>
            {t("referal.WithdrawBNB")}
          </button>
        </div>
      </div>
      <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <div class="plan-box">
          <p>{t("referal.yourReferralLink")}</p>
          <form class="">
            <div class="align-items-center form-row">
              <div class="col-11">
                <input
                  type="text"
                  class="btn-secondary form-control form-control-xl"
                  value={
                    Useraccount
                      ? `${window.location.origin}/?ref=${Useraccount}`
                      : "Please connect to your wallet"
                  }
                />
              </div>

              <div class="col">
                <CopyToClipboard
                  text={window.location.origin + "/?ref=" + Useraccount}
                  onCopy={() => toast.success("Copied!")}
                >
                  <button
                    data-clipboard-action="copy"
                    value={`${window.location.origin}/?ref=${Useraccount}`}
                    type="button"
                    class="btn btn-success btn-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="mt-0"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      ></path>
                      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                    </svg>
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </form>
          <div class="mt-2 row">
            <div class="col">
              <p class="mt-4 mb-0">{t("referal.totalReferralEarned")}</p>
              <h5>{totalEarnd}</h5>
              <p class="mt-4 mb-0">{t("referal.invited")}</p>
              <h5>{downlineCount ? downlineCount : 0}</h5>
            </div>
            <div class="col">
              <p class="mt-4 mb-0">{t("referal.totalReferralWithdrawn")}</p>
              <h5>{referlWithdrawn ? referlWithdrawn : 0}</h5>
            </div>
            <div class="col">
              <p class="mt-4 mb-0">
                {t("referal.earnForPromotionBNBstake")}
                <br />
                <br />
                {t("referal.youWillReceive")}
                <br />
                <br />
                <b>{t("referal.b1")}</b> {t("referal.p1")}s<br />
                <b>{t("referal.b2")}</b> {t("referal.p2")}
                <br />
                <b>{t("referal.b3")}</b> {t("referal.p3")}
                <br />
                <br />
                <i>{t("referal.i")}</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referal;
