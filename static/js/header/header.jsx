import React, { useState } from 'react'

function Header({ t, name, selectedImg, connectTotheWallet, Useraccount }) {
  const [bnb, setbnb] = useState(0)
  // 


  // const connectTotheWallet = () => {
  //   // ethereum()
  //   window.ethereum.request({ method: 'eth_requestAccounts' }).then(() => {

  //   })
  // };



  React.useEffect(() => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=usd', {
      method: "GET"
    })
      .then((e) => {
        return e.json()
      })
      .then((e) => {
        setbnb(e.USD)

      })
  }, [])

  return (
    <div className="align-items-center mb-4 row">

      <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12"><img src="/media/logo.png" className="" style={{ width: "4rem", height: "4rem", marginTop: "0.5rem" }} /></div>
      <div className="top text-center col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12"><button type="button" className="btn btn-success btn-sm" onClick={connectTotheWallet}>{Useraccount !== undefined ? Useraccount.slice(0, 5) + "........" + Useraccount.slice(-5, ) : t("header.connectWallet")}</button></div>
      <div className="top text-right d-none d-sm-none d-md-block col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <span className="top-bnb">1 BNB = <b>${bnb}</b></span>&nbsp;&nbsp;&nbsp;
        {/* <a href="#" target="_blank" rel="noreferrer" className="btn-sm btn-light btn btn-primary">{t("header.support")}</a> */}
        &nbsp;&nbsp;&nbsp;
              <div className="dropdown" style={{ display: "inline" }}>
          {/* dropdown-toggle */}
          {/* data-toggle="dropdown" */}
          {/* aria-haspopup="true" */}
          <a href="https://t.me/bnbstakeproofficial" target="_blank" style={{ textDecoration: "none" }}>  <button aria-expanded="false" type="button" className="btn-sm  btn btn-info" >

            {t("header.telegram")}

          </button>    </a>
          {/* <div x-placement="bottom-start" aria-labelledby="" className="dropdown-menu">
            <a rel="noreferrer" href="#" className="dropdown-item">{t("header.englishGroup")}</a><a rel="noreferrer" href="#" className="dropdown-item">{t("header.espanolGroup")}</a>
            https://t.me/bnb_stake_es
            https://t.me/bnb_stake
          </div> */}
        </div>
              &nbsp;&nbsp;&nbsp;
          <div className="dropdown" style={{ display: "inline" }}>
          <button aria-haspopup="true" aria-expanded="false" type="button" data-toggle="dropdown" className="btn-sm dropdown-toggle btn btn-primary">{t("header.audit")}</button>
          <div x-placement="bottom-start" aria-labelledby="" className="dropdown-menu" >
            <a rel="noreferrer" href="/HazeSecurity_BNBStakePro.pdf" download className="dropdown-item">{t("header.PDFReport")}</a>
            <a rel="noreferrer" href="#" className="dropdown-item">{t("header.videoReport")}</a>
            {/* https://youtu.be/J_UG28Wm-tU */}
          </div>
        </div>
              &nbsp;&nbsp;&nbsp;<a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_blank" rel="noreferrer" className="btn-sm btn-success btn btn-primary">{t("header.help")}</a>&nbsp;&nbsp;&nbsp;
              &nbsp;<a href="/media/bnbstake.pdf" target="_blank" rel="noreferrer" className="btn-sm btn-success btn btn-primary">{t("header.pdfGuid")}</a>&nbsp;

              <div className="header__language" style={{ display: "inline", cursor: "pointer" }}>

          <span className="languageInnerContainer"><img src={selectedImg} width="20" className="flagsStyling" /><span className="languageText">{name}</span></span>
          <ul className="dropdownList">
            <li className="dropdown-item"><a href="?lang=en"><img src="/media/Britain.svg" width="20" /><span className="languageText">English</span></a></li>
            <li className="dropdown-item"><a href="?lang=fr"><img src="/media/French.svg" width="20" /><span className="languageText">Française</span></a></li>
            <li className="dropdown-item"><a href="?lang=ch"><img src="/media/China.svg" width="20" /><span className="languageText"> 中文 </span></a></li>
            <li className="dropdown-item"><a href="?lang=ar"><img src="/media/Arab.svg" width="20" /><span className="languageText"> عربي</span></a></li>
            <li className="dropdown-item"><a href="?lang=jp"><img src="/media/Japan.svg" width="20" /><span className="languageText"> 日本語 </span></a></li>
            <li className="dropdown-item"><a href="?lang=kr"><img src="/media/Korea.svg" width="20" /><span className="languageText"> 한국어</span></a></li>
            <li className="dropdown-item"><a href="?lang=ru"><img src="/media/Russia.svg" width="20" /><span className="languageText">Русский</span></a></li>
            <li className="dropdown-item"><a href="?lang=es"><img src="/media/Spain.svg" width="20" /><span className="languageText"> Español </span></a></li>
          </ul>
        </div>
              &nbsp;&nbsp;&nbsp;

        </div>
    </div>
  )
}

export default Header
