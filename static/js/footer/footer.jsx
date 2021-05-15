import React from "react";

function Footer({ t }) {
  return (
    <div>
      <div class="footer row">
        <div class="text-center col">
          <img src="/media/footer.png" class="img-fluid" />
        </div>
      </div>
      <br />
      <br />
      {/* <div class="footer mb-5 row">
          <div class="text-center col">
          {t("footer.p1")}: <a href="https://dapp.review/dapp/14809" target="_blank" rel="noreferrer">dApp.review</a>, &nbsp;
                <a href="https://www.dapp.com/app/bnbstake-earnings-bnb-every-moment-withdraw-instantly-any-time" target="_blank" rel="noreferrer">DAPP.com</a>
          </div>
        </div> */}
      <div class="footer row">
        <div class="text-left ml-5 col">
          {t("footer.p2")}
          <br />
          <a
            href="https://www.binance.org/en/smartChain"
            target="_blank"
            rel="noreferrer"
          >
            {t("footer.a3")}
          </a>
        </div>
        <div class="text-center col">
          {t("footer.p3")}
          <br />
          <a href="/HazeSecurity_BNBStakePro.pdf" download rel="noreferrer">
            {t("footer.a4")}
          </a>
        </div>
        <div class="text-right mr-5 col">
          {t("footer.p4")}
          <br />
          <a href="https://bnbstake.pro" target="_blank" rel="noreferrer">
            https://bnbstake.pro
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Footer;
