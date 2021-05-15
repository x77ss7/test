(this.webpackJsonpbnbstake = this.webpackJsonpbnbstake || []).push([
  [0],
  {
    112: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"address payable","name":"_dev","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"profit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finish","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERCENT_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dev","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"deposit","type":"uint256"}],"name":"getResult","outputs":[{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startUNIX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"checkpoint","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"bonus","type":"uint256"},{"internalType":"uint256","name":"totalBonus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    212: function (e) {
      e.exports = JSON.parse(
        '{"translation":{"header":{"connectWallet":"Conectar billetera","support":"Apoyo","telegram":"Telegrama","englishGroup":"Grupo de ingles","espanolGroup":"Grupo Espa\xf1ol","PDFReport":"Informe PDF","videoReport":"Informe de video","help":"Ayudar","pdfGuid":"Gu\xeda PDF","audit":"auditor\xeda"},"terms":{"p1":"Ingresos totales: seg\xfan su plan tarrif","b1":"del 5% al \u200b\u200b8% diario","p2":"Tasa de inter\xe9s b\xe1sica:","b2":"+ 0.5% cada 24 horas","p3":"- solo para nuevos dep\xf3sitos ","p4":"Dep\xf3sito m\xednimo: ","b3":"0,05 BNB","p5":"sin l\xedmite m\xe1ximo","p6":"Ganancias","b4":"every moment","p7":"retirar","b5":"cualquier momento","p8":"si usa la capitalizaci\xf3n de intereses, puede retirar solo despu\xe9s de que finalice su dep\xf3sito","p9":"BNB total apostado","span":"Contrato","p10":"Saldo total del contrato"},"plans":{"plan1":"Plan 1","plan2":"Plan 2","plan3":"Plan 3","plan4":"Plan 4","plan5":"Plan 5","plan6":"Plan 6","dailyProfit":"Ganancia diaria","totalReturn":"Regreso trotal","withdrawtime":"Retirar el tiempo","days":"D\xedas","anyTime":"Cualquier momento","enterAmount":"Ingrese la cantidad","endOfPlan":"Fin del plan","14days":"En 14 d\xedas obtendr\xe1s","21days":"En 21 d\xedas obtendr\xe1s","28days":"En 28 d\xedas obtendr\xe1s","stakeBNB":"APUESTA BNB","planUse":"* plan de uso capitalizaci\xf3n de intereses","p1":"1. Importante: el retorno de los planes es flotante y la ganancia diaria por un nuevo dep\xf3sito aumentar\xe1 en un 0.5% diario.","p2":"2. La cantidad m\xednima de dep\xf3sito es 0.05 BNB y puede tener varios dep\xf3sitos","p3":"3. Ganancias en todo momento, ret\xedrelas instant\xe1neamente en cualquier momento (si no utiliz\xf3 la capitalizaci\xf3n de intereses en el Plan 4, Plan 5 y Plan 6)"},"referal":{"totalStackedBNB":"BNB total apilado","availableBNBForWithdrawal":"BNB disponible para retiro","WithdrawBNB":"Retirar BNB","yourReferralLink":"Tu enlace de referencia","totalReferralEarned":"Referencia total obtenida","totalReferralWithdrawn":"Remisi\xf3n total retirada","earnForPromotionBNBstake":"Gana por la promoci\xf3n BNBstake","youWillReceive":"Usted recibir\xe1:","invited":"Usuarios invitados por usted","b1":"5%","b2":"2.5%","b3":"0.5%","p1":"de cada dep\xf3sito de referencia de nivel 1","p2":"de cada dep\xf3sito de referencia de nivel 2","p3":"de cada dep\xf3sito de referencia de nivel 3","i":"\xa1Nota! Debe tener al menos 1 dep\xf3sito para comenzar a recibir ganancias"},"footer":{"yourStake":"Tu apuesta","p1":"Rese\xf1as","p2":"Powered by","p3":"Auditado por HazeCrypto","p4":"\xa9 2021 Reservados todos los derechos.","a1":"dApp.review","a2":"DAPP.com","a3":"Cadena inteligente Binance","a4":"Descargar informe de auditor\xeda en PDF","a5":"https://bnbstake.pro"}}}'
      );
    },
    213: function (e) {
      e.exports = JSON.parse(
        '{"translation":{"header":{"connectWallet":"Connect Wallet","support":"Support","telegram":"Telegram","englishGroup":"English Group","espanolGroup":"Espa\xf1ol Group","PDFReport":"PDF Report","videoReport":"Video Report","pdfGuid":"PDF Guide","help":"Help","audit":"Audit"},"terms":{"p1":"Total income: based on your tarrif plan","b1":"from 5% to 8% daily","p2":"Basic interest rate:","b2":"+0.5% every 24 hours","p3":"- only for new deposits","p4":"Minimal deposit:","b3":"0.05 BNB","p5":"no maximal limit","p6":"Earnings","b4":"every moment","p7":"withdraw","b5":"any time","p8":"if you use capitalization of interest you can withdraw only after end of your deposit","p9":"Total BNB Staked","span":"Contract","p10":"Total Contract Balance"},"plans":{"plan1":"Plan 1","plan2":"Plan 2","plan3":"Plan 3","plan4":"Plan 4","plan5":"Plan 5","plan6":"Plan 6","dailyProfit":"Daily Profit","totalReturn":"Total Return","withdrawtime":"Withdraw time","days":"Days","anyTime":"Any Time","enterAmount":"Enter Amount","endOfPlan":"End of Plan","14days":"In 14 days you will get","21days":"In 21 days you will get","28days":"In 28 days you will get","stakeBNB":"STAKE BNB","planUse":"* plan use capitalization of interest","p1":"1. Important: Plans return are float and daily profit for a new deposit will increase by 0.5% daily","p2":"2. Minimum deposit amount is 0.05 BNB and you can have multiple deposits","p3":"3. Earnings every moment, withdraw instantly any time (if you did not use capitalization of interest in Plan 4, Plan 5 and Plan 6)"},"referal":{"totalStackedBNB":"Total Stacked BNB","availableBNBForWithdrawal":"Available BNB for withdrawal","WithdrawBNB":"Withdraw BNB","yourReferralLink":"Your Referral Link","totalReferralEarned":"Total Referral Earned","totalReferralWithdrawn":"Total Referral Withdrawn","earnForPromotionBNBstake":"Earn for promotion BNBstake","youWillReceive":"You will receive:","invited":"Invited Users by You","b1":"5%","b2":"2.5%","b3":"0.5%","p1":"from each level 1 referral deposits","p2":"from each level 2 referral deposits","p3":"from each level 3 referral deposits","i":"Note! You need to have at least 1 deposit to start receive earnings"},"footer":{"yourStake":"Your Stake","p1":"Reviews","p2":"Powered by","p3":"Audited by HazeCrypto","p4":"\xa9 2021 All rights reserved.","a1":"dApp.review","a2":"DAPP.com","a3":"Binance Smart Chain","a4":"Download Audit PDF Report","a5":"https://bnbstake.pro"}}}'
      );
    },
    214: function (e) {
      e.exports = JSON.parse(
        '{"translation":{"header":{"connectWallet":"\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u63a5\u7d9a\u3059\u308b","support":"\u30b5\u30dd\u30fc\u30c8","telegram":"\u96fb\u5831","englishGroup":"\u82f1\u8a9e\u30b0\u30eb\u30fc\u30d7","espanolGroup":"\u30a8\u30b9\u30d1\u30cb\u30e7\u30fc\u30eb\u30b0\u30eb\u30fc\u30d7","PDFReport":"PDF\u30ec\u30dd\u30fc\u30c8","videoReport":"\u30d3\u30c7\u30aa\u30ec\u30dd\u30fc\u30c8","help":"\u52a9\u3051\u3066","pdfGuid":"PDF\u30ac\u30a4\u30c9","audit":"\u76e3\u67fb"},"terms":{"p1":"\u7dcf\u53ce\u5165\uff1a\u3042\u306a\u305f\u306e\u95a2\u7a0e\u8a08\u753b\u306b\u57fa\u3065\u304f","b1":"\u6bce\u65e55\uff05\u304b\u30898\uff05","p2":"\u57fa\u672c\u91d1\u5229\uff1a","b2":"24\u6642\u9593\u3054\u3068\u306b+ 0.5\uff05","p3":"-\u65b0\u898f\u9810\u91d1\u306e\u5834\u5408\u306e\u307f","p4":"\u6700\u5c0f\u9650\u306e\u9810\u91d1\uff1a","b3":"0.05 BNB","p5":"\u6700\u5927\u5236\u9650\u306a\u3057","p6":"\u53ce\u76ca","b4":"\u3064\u306d\u306b","p7":"\u64a4\u9000","b5":"\u3069\u3093\u306a\u3068\u304d\u3082","p8":"\u5229\u606f\u306e\u5927\u6587\u5b57\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u9810\u91d1\u306e\u7d42\u4e86\u5f8c\u306b\u306e\u307f\u5f15\u304d\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059","p9":"\u8ced\u3051\u305fBNB\u306e\u5408\u8a08","span":"\u5951\u7d04\u3059\u308b","p10":"\u7dcf\u5951\u7d04\u6b8b\u9ad8"},"plans":{"plan1":"\u30d7\u30e9\u30f31","plan2":"\u30d7\u30e9\u30f32","plan3":"\u30d7\u30e9\u30f33","plan4":"\u30d7\u30e9\u30f34","plan5":"\u30d7\u30e9\u30f35","plan6":"\u30d7\u30e9\u30f36","dailyProfit":"\u6bce\u65e5\u306e\u5229\u76ca","totalReturn":"\u30c8\u30fc\u30bf\u30eb\u30ea\u30bf\u30fc\u30f3","withdrawtime":"\u6642\u9593\u3092\u64a4\u56de\u3059\u308b","days":"\u65e5\u3005","anyTime":"\u3069\u3093\u306a\u3068\u304d\u3082","enterAmount":"\u91d1\u984d\u3092\u5165\u529b\u3057\u307e\u3059","endOfPlan":"\u8a08\u753b\u306e\u7d42\u4e86","14days":"14\u65e5\u3067\u3042\u306a\u305f\u306f\u5f97\u308b\u3067\u3057\u3087\u3046","21days":"21\u65e5\u3067\u3042\u306a\u305f\u306f\u5f97\u308b\u3067\u3057\u3087\u3046","28days":"28\u65e5\u3067\u3042\u306a\u305f\u306f\u5f97\u308b\u3067\u3057\u3087\u3046","stakeBNB":"\u30b9\u30c6\u30fc\u30afBNB","planUse":"*\u5229\u606f\u306e\u5927\u6587\u5b57\u306e\u4f7f\u7528\u3092\u8a08\u753b\u3059\u308b","p1":"1.\u91cd\u8981\uff1a\u30d7\u30e9\u30f3\u306e\u30ea\u30bf\u30fc\u30f3\u306f\u5909\u52d5\u3057\u3001\u65b0\u3057\u3044\u9810\u91d1\u306e1\u65e5\u3042\u305f\u308a\u306e\u5229\u76ca\u306f1\u65e5\u3042\u305f\u308a0.5\uff05\u5897\u52a0\u3057\u307e\u3059","p2":"2.\u6700\u4f4e\u5165\u91d1\u984d\u306f0.05BNB\u3067\u3001\u8907\u6570\u306e\u5165\u91d1\u304c\u53ef\u80fd\u3067\u3059\u3002","p3":"3.\u6bce\u56de\u306e\u53ce\u76ca\u3001\u3044\u3064\u3067\u3082\u5373\u5ea7\u306b\u5f15\u304d\u51fa\u3057\u307e\u3059\uff08\u30d7\u30e9\u30f34\u3001\u30d7\u30e9\u30f35\u3001\u304a\u3088\u3073\u30d7\u30e9\u30f36\u3067\u5229\u606f\u306e\u5927\u6587\u5b57\u3092\u4f7f\u7528\u3057\u306a\u304b\u3063\u305f\u5834\u5408\uff09"},"referal":{"totalStackedBNB":"\u5408\u8a08\u30b9\u30bf\u30c3\u30afBNB","availableBNBForWithdrawal":"\u5f15\u304d\u51fa\u3057\u306b\u5229\u7528\u53ef\u80fd\u306aBNB","WithdrawBNB":"BNB\u3092\u64a4\u56de\u3059\u308b","yourReferralLink":"\u3042\u306a\u305f\u306e\u7d39\u4ecb\u30ea\u30f3\u30af","totalReferralEarned":"\u7372\u5f97\u3057\u305f\u7d39\u4ecb\u306e\u5408\u8a08","totalReferralWithdrawn":"\u53d6\u308a\u4e0b\u3052\u3089\u308c\u305f\u7d39\u4ecb\u306e\u5408\u8a08","earnForPromotionBNBstake":"\u30d7\u30ed\u30e2\u30fc\u30b7\u30e7\u30f3BNB\u30b9\u30c6\u30fc\u30af\u3067\u7372\u5f97","youWillReceive":"\u3042\u306a\u305f\u306f\u53d7\u3051\u53d6\u308b\u3067\u3057\u3087\u3046\uff1a","invited":"\u3042\u306a\u305f\u306b\u3088\u308b\u62db\u5f85\u30e6\u30fc\u30b6\u30fc","b1":"5%","b2":"2.5%","b3":"0.5%","p1":"\u5404\u30ec\u30d9\u30eb1\u7d39\u4ecb\u9810\u91d1\u304b\u3089","p2":"\u5404\u30ec\u30d9\u30eb2\u7d39\u4ecb\u9810\u91d1\u304b\u3089","p3":"\u5404\u30ec\u30d9\u30eb3\u306e\u7d39\u4ecb\u9810\u91d1\u304b\u3089","i":"\u6ce8\u610f\uff01\u53ce\u76ca\u306e\u53d7\u3051\u53d6\u308a\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u5c11\u306a\u304f\u3068\u30821\u3064\u306e\u30c7\u30dd\u30b8\u30c3\u30c8\u304c\u5fc5\u8981\u3067\u3059"},"footer":{"yourStake":"\u3042\u306a\u305f\u306e\u8ced\u3051","p1":"\u30ec\u30d3\u30e5\u30fc","p2":"\u642d\u8f09","p3":"HazeCrypto\u306b\u3088\u308b\u76e3\u67fb","p4":"\xa92021 \u5168\u8457\u4f5c\u6a29\u6240\u6709\u3002","a1":"dApp.review","a2":"DAPP.com","a3":"Binance\u30b9\u30de\u30fc\u30c8\u30c1\u30a7\u30fc\u30f3","a4":"\u76e3\u67fbPDF\u30ec\u30dd\u30fc\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b","a5":"https://bnbstake.pro"}}}'
      );
    },
    215: function (e) {
      e.exports = JSON.parse(
        '{"translation":{"header":{"connectWallet":"\uc9c0\uac11 \uc5f0\uacb0","support":"\uc9c0\uc6d0\ud558\ub2e4","telegram":"\uc9c0\uc6d0\ud558\ub2e4","englishGroup":"\uc601\uc5b4 \uadf8\ub8f9","espanolGroup":"Espa\xf1ol \uadf8\ub8f9","PDFReport":"PDF \ubcf4\uace0\uc11c","videoReport":"PDF \ubcf4\uace0\uc11c","help":"\ub3c4\uc6c0","pdfGuid":"PDF \uac00\uc774\ub4dc","audit":"\uc2ec\uc0ac"},"terms":{"p1":"\ucd1d \uc218\uc785 : tarrif \uacc4\ud68d\uc5d0 \ub530\ub77c","b1":"\ub9e4\uc77c 5 %\uc5d0\uc11c 8 %\uae4c\uc9c0","p2":"\uae30\ubcf8 \uc774\uc790\uc728 :","b2":"24 \uc2dc\uac04\ub9c8\ub2e4 + 0.5 %","p3":"-\uc2e0\uaddc \uc785\uae08\uc5d0 \ud55c\ud568","p4":"\ucd5c\uc18c \ubcf4\uc99d\uae08 :","b3":"0.05 BNB","p5":"\ucd5c\ub300 \uc81c\ud55c \uc5c6\uc74c","p6":"\uc218\uc785","b4":"\ub9e4 \uc21c\uac04","p7":"\ube7c\ub2e4","b5":"\uc5b8\uc81c\ub4e0\uc9c0","p8":"\uc774\uc790 \ub300\ubb38\uc790\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc785\uae08\uc774 \ub05d\ub09c \ud6c4\uc5d0 \ub9cc \u200b\u200b\uc778\ucd9c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","p9":"\ucd1d BNB \uc9c0\ubd84","span":"\uacc4\uc57d","p10":"\ucd1d \uacc4\uc57d \uc794\uc561"},"plans":{"plan1":"\uacc4\ud68d 1","plan2":"\uacc4\ud68d 2","plan3":"\uacc4\ud68d 3","plan4":"\uacc4\ud68d 4","plan5":"\uacc4\ud68d 5","plan6":"\uacc4\ud68d 6","dailyProfit":"\uc77c\uc77c \uc774\uc775","totalReturn":"\ucd1d \uc218\uc775","withdrawtime":"\ucd1d \uc218\uc775","days":"\uc77c","anyTime":"\uc5b8\uc81c\ub4e0\uc9c0","enterAmount":"\uc5b8\uc81c\ub4e0\uc9c0","endOfPlan":"\uacc4\ud68d \uc885\ub8cc","14days":"14 \uc77c \ud6c4\uc5d0\ub294","21days":"21 \uc77c \ud6c4\uc5d0\ub294","28days":"28 \uc77c \ud6c4\uc5d0\ub294","stakeBNB":"\uc2a4\ud14c\uc774\ud06c BNB","planUse":"* \uacc4\ud68d \uc0ac\uc6a9\uc774\uc790 \ub300\ubb38\uc790","p1":"1. \uc911\uc694 : \uacc4\ud68d \uc218\uc775\uc740 \uc720\ub3d9\uc801\uc774\uba70 \uc0c8 \uc608\uae08\uc5d0 \ub300\ud55c \uc77c\uc77c \uc218\uc775\uc740 \ub9e4\uc77c 0.5 % \uc99d\uac00\ud569\ub2c8\ub2e4.","p2":"2. \ucd5c\uc18c \uc785\uae08\uc561\uc740 0.05 BNB\uc774\uba70 \uc5ec\ub7ec \ubc88 \uc785\uae08 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","p3":"3. \ub9e4 \uc21c\uac04 \uc218\uc775, \uc5b8\uc81c\ub4e0\uc9c0 \uc989\uc2dc \uc778\ucd9c (\ud50c\ub79c 4, \ud50c\ub79c 5 \ubc0f \ud50c\ub79c 6\uc5d0\uc11c\uc774\uc790 \ub300\ubb38\uc790\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0)"},"referal":{"totalStackedBNB":"\ucd1d \ub204\uc801 BNB","availableBNBForWithdrawal":"\uc778\ucd9c \uac00\ub2a5\ud55c BNB","WithdrawBNB":"BNB \uc778\ucd9c","yourReferralLink":"\uadc0\ud558\uc758 \ucd94\ucc9c \ub9c1\ud06c","totalReferralEarned":"\ud68d\ub4dd \ud55c \ucd1d \ucd94\ucc9c","totalReferralWithdrawn":"\ucca0\ud68c \ub41c \ucd1d \ucd94\ucc9c","earnForPromotionBNBstake":"\ud504\ub85c\ubaa8\uc158 BNBstake\ub97c \uc704\ud574 \uc801\ub9bd","youWillReceive":"\ub2e4\uc74c\uc744 \ubc1b\uac8c\ub429\ub2c8\ub2e4.","invited":"\uadc0\ud558\uac00 \ucd08\ub300 \ud55c \uc0ac\uc6a9\uc790","b1":"5%","b2":"2.5%","b3":"0.5%","p1":"\uac01 \ub808\ubca8 1 \ucd94\ucc9c \uc608\uae08\uc5d0\uc11c","p2":"\uac01 \ub808\ubca8 2 \ucd94\ucc9c \uc608\uae08\uc5d0\uc11c","p3":"\uac01 \ub808\ubca8 3 \ucd94\ucc9c \uc608\uae08\uc5d0\uc11c","i":"\ub178\ud2b8! \uc218\uc785\uc744 \ubc1b\uc73c\ub824\uba74 \ucd5c\uc18c 1 \uac1c\uc758 \uc785\uae08\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."},"footer":{"yourStake":"\uadc0\ud558\uc758 \uc9c0\ubd84","p1":"\ub9ac\ubdf0","p2":"\uc81c\uacf5","p3":"HazeCrypto \uac10\uc0ac","p4":"\xa9 2021 \ud310\uad8c \uc18c\uc720.","a1":"dApp.review","a2":"DAPP.com","a3":"\ubc14\uc774 \ub0b8\uc2a4 \uc2a4\ub9c8\ud2b8 \uccb4\uc778","a4":"\uac10\uc0ac PDF \ubcf4\uace0\uc11c \ub2e4\uc6b4\ub85c\ub4dc","a5":"https://bnbstake.pro"}}}'
      );
    },
    216: function (e) {
      e.exports = JSON.parse(
        '{"translation":{"header":{"connectWallet":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","support":"\u0421\u043b\u0443\u0436\u0431\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438","telegram":"\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c\u043c\u0430","englishGroup":"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430","espanolGroup":"\u0413\u0440\u0443\u043f\u043f\u0430 Espa\xf1ol","PDFReport":"\u041e\u0442\u0447\u0435\u0442 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 PDF","videoReport":"\u0412\u0438\u0434\u0435\u043e \u043e\u0442\u0447\u0435\u0442","help":"\u041f\u043e\u043c\u043e\u0449\u044c","pdfGuid":"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 PDF","audit":"\u041f\u043e\u043c\u043e\u0449\u044c"},"terms":{"p1":"\u041e\u0431\u0449\u0438\u0439 \u0434\u043e\u0445\u043e\u0434: \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u0442\u0430\u0440\u0438\u0444\u043d\u043e\u0433\u043e \u043f\u043b\u0430\u043d\u0430","b1":"\u043e\u0442 5% \u0434\u043e 8% \u0432 \u0441\u0443\u0442\u043a\u0438","p2":"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430:","b2":"+ 0,5% \u043a\u0430\u0436\u0434\u044b\u0435 24 \u0447\u0430\u0441\u0430","p3":"- \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043d\u043e\u0432\u044b\u0445 \u0432\u043a\u043b\u0430\u0434\u043e\u0432","p4":"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0435\u043f\u043e\u0437\u0438\u0442:","b3":"0.05 BNB","p5":"\u043d\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0435\u043b\u0430","p6":"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u043e\u043a","b4":"\u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442","p7":"\u0441\u043d\u044f\u0442\u044c \u0441\u043e \u0441\u0447\u0435\u0442\u0430","b5":"\u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f","p8":"\u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043d\u044f\u0442\u044c \u0438\u0445 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430","p9":"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430 BNB","span":"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430 BNB","p10":"\u041e\u0431\u0449\u0438\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u043e \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0443"},"plans":{"plan1":"\u041f\u043b\u0430\u043d 1","plan2":"\u041f\u043b\u0430\u043d 2","plan3":"\u041f\u043b\u0430\u043d 3","plan4":"\u041f\u043b\u0430\u043d 4","plan5":"\u041f\u043b\u0430\u043d 5","plan6":"\u041f\u043b\u0430\u043d 6","dailyProfit":"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u0430\u044f \u043f\u0440\u0438\u0431\u044b\u043b\u044c","totalReturn":"\u041e\u0431\u0449\u0438\u0439 \u0434\u043e\u0445\u043e\u0434","withdrawtime":"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0432\u043e\u0434\u0430","days":"\u0414\u043d\u0438","anyTime":"\u041b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f","enterAmount":"\u0412\u043d\u043e\u0441\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e","endOfPlan":"\u041a\u043e\u043d\u0435\u0446 \u043f\u043b\u0430\u043d\u0430","14days":"\u0427\u0435\u0440\u0435\u0437 14 \u0434\u043d\u0435\u0439 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435","21days":"\u0427\u0435\u0440\u0435\u0437 21 \u0434\u0435\u043d\u044c \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435","28days":"\u0427\u0435\u0440\u0435\u0437 28 \u0434\u043d\u0435\u0439 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435","stakeBNB":"\u0421\u0422\u0410\u0412\u041a\u0410 BNB","planUse":"* \u043f\u043b\u0430\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432","p1":"1. \u0412\u0430\u0436\u043d\u043e: \u043f\u043b\u0430\u043d\u044b \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0438\u043c\u0438, \u0430 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u0430\u044f \u043f\u0440\u0438\u0431\u044b\u043b\u044c \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 0,5% \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e.","p2":"2. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 0,05 BNB, \u0438 \u0443 \u0432\u0430\u0441 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0432.","p3":"3. \u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442, \u0441\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f (\u0435\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432 \u0432 \u041f\u043b\u0430\u043d\u0435 4, \u041f\u043b\u0430\u043d\u0435 5 \u0438 \u041f\u043b\u0430\u043d\u0435 6)"},"referal":{"totalStackedBNB":"\u0412\u0441\u0435\u0433\u043e \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0445 BNB","availableBNBForWithdrawal":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 BNB \u0434\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430","WithdrawBNB":"\u0412\u044b\u0432\u0435\u0441\u0442\u0438 BNB","yourReferralLink":"\u0412\u0430\u0448\u0430 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430","totalReferralEarned":"\u0412\u0441\u0435\u0433\u043e \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u043e\u0432","totalReferralWithdrawn":"\u0412\u0441\u0435\u0433\u043e \u043e\u0442\u043e\u0437\u0432\u0430\u043d\u043d\u044b\u0445 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u043e\u0432","earnForPromotionBNBstake":"\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u043d\u0430 \u043f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0438 BNBstake","youWillReceive":"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435:","invited":"\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u043d\u044b\u0435 \u0432\u0430\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438","b1":"5%","b2":"2.5%","b3":"0.5%","p1":"\u0441 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430 1 \u0443\u0440\u043e\u0432\u043d\u044f","p2":"\u0441 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430 2 \u0443\u0440\u043e\u0432\u043d\u044f","p3":"\u0441 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430 3 \u0443\u0440\u043e\u0432\u043d\u044f","i":"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435! \u0423 \u0432\u0430\u0441 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b 1 \u0434\u0435\u043f\u043e\u0437\u0438\u0442, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043e\u043a"},"footer":{"yourStake":"\u0412\u0430\u0448\u0430 \u0441\u0442\u0430\u0432\u043a\u0430","p1":"\u041e\u0442\u0437\u044b\u0432\u044b","p2":"\u041f\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u043e\u0442","p3":"\u041f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043e HazeCrypto","p4":"\xa9 2021, \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.","a1":"dApp.review","a2":"DAPP.com","a3":"\u0423\u043c\u043d\u0430\u044f \u0441\u0435\u0442\u044c Binance","a4":"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043e\u0442\u0447\u0435\u0442 \u0430\u0443\u0434\u0438\u0442\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 PDF","a5":"https://bnbstake.pro"}}}'
      );
    },
    217: function (e) {
      e.exports = JSON.parse(
        '{"translation":{"header":{"connectWallet":"\u0631\u0628\u0637 \u0627\u0644\u0645\u062d\u0641\u0638\u0629","support":"\u0627\u0644\u062f\u0639\u0645","telegram":"\u0628\u0631\u0642\u064a\u0629","englishGroup":"\u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629","espanolGroup":"\u0645\u062c\u0645\u0648\u0639\u0629 Espa\xf1ol","PDFReport":"\u062a\u0642\u0631\u064a\u0631 PDF","videoReport":"\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0641\u064a\u062f\u064a\u0648","pdfGuid":"\u062f\u0644\u064a\u0644 PDF","help":"\u064a\u0633\u0627\u0639\u062f","audit":"\u0645\u0631\u0627\u062c\u0639\u0629"},"terms":{"p1":"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u062f\u062e\u0644: \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u062e\u0637\u0629 \u0627\u0644\u062a\u0639\u0631\u0641\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643","b1":"\u0645\u0646 5\u066a \u0625\u0644\u0649 8\u066a \u064a\u0648\u0645\u064a\u064b\u0627","p2":"\u0633\u0639\u0631 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a:","b2":"+ 0.5\u066a \u0643\u0644 24 \u0633\u0627\u0639\u0629","p3":"- \u0641\u0642\u0637 \u0644\u0644\u0625\u064a\u062f\u0627\u0639 \u0627\u0644\u062c\u062f\u064a\u062fs","p4":"\u0625\u064a\u062f\u0627\u0639 \u0623\u062f\u0646\u0649:","b3":"0.05 BNB","p5":"\u0644\u0627 \u064a\u0648\u062c\u062f \u062d\u062f \u0623\u0642\u0635\u0649","p6":"\u0623\u0631\u0628\u0627\u062d","b4":"\u0643\u0644 \u0644\u062d\u0638\u0629","p7":"\u064a\u0646\u0633\u062d\u0628","b5":"\u0641\u064a \u0623\u064a \u0648\u0642\u062a","p8":"\u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0633\u062a\u062e\u062f\u0645 \u0631\u0633\u0645\u0644\u0629 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u060c \u0641\u0644\u0627 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0633\u062d\u0628 \u0625\u0644\u0627 \u0628\u0639\u062f \u0627\u0646\u062a\u0647\u0627\u0621 \u0625\u064a\u062f\u0627\u0639\u0643","p9":"\u0645\u062c\u0645\u0648\u0639 BNB \u0627\u0644\u0645\u0643\u062f\u0633","span":"\u0627\u062a\u0641\u0627\u0641\u064a\u0629","p10":"\u0625\u062c\u0645\u0627\u0644\u064a \u0631\u0635\u064a\u062f \u0627\u0644\u0639\u0642\u062f"},"plans":{"plan1":"\u0627\u0644\u062e\u0637\u0629 1","plan2":"\u0627\u0644\u062e\u0637\u0629 2","plan3":"\u0627\u0644\u062e\u0637\u0629 3","plan4":"\u0627\u0644\u062e\u0637\u0629 4","plan5":"\u0627\u0644\u062e\u0637\u0629 5","plan6":"\u0627\u0644\u062e\u0637\u0629 6","dailyProfit":"\u0627\u0644\u0631\u0628\u062d \u0627\u0644\u064a\u0648\u0645\u064a","totalReturn":"\u0639\u0648\u062f\u0629 \u0643\u0627\u0645\u0644\u0629","withdrawtime":"\u0633\u062d\u0628 \u0627\u0644\u0648\u0642\u062a","days":"\u0623\u064a\u0627\u0645","anyTime":"\u0641\u064a \u0623\u064a \u0648\u0642\u062a","enterAmount":"\u0623\u062f\u062e\u0644 \u0627\u0644\u0645\u0628\u0644\u063a","endOfPlan":"\u0646\u0647\u0627\u064a\u0629 \u0627\u0644\u062e\u0637\u0629","14days":"\u0641\u064a \u063a\u0636\u0648\u0646 14 \u064a\u0648\u0645\u064b\u0627 \u0633\u062a\u062d\u0635\u0644 \u0639\u0644\u0649\u0641\u064a \u063a\u0636\u0648\u0646 14 \u064a\u0648\u0645\u064b\u0627 \u0633\u062a\u062d\u0635\u0644 \u0639\u0644\u0649","21days":"\u0641\u064a \u063a\u0636\u0648\u0646 21 \u064a\u0648\u0645\u064b\u0627 \u0633\u062a\u062d\u0635\u0644 \u0639\u0644\u0649","28days":"\u0641\u064a 28 \u064a\u0648\u0645\u064b\u0627 \u0633\u062a\u062d\u0635\u0644 \u0639\u0644\u0649","stakeBNB":"\u062d\u0635\u0629 BNB","planUse":"* \u062e\u0637\u0629 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0631\u0633\u0645\u0644\u0629 \u0627\u0644\u0641\u0627\u0626\u062f\u0629","p1":"1. \u0647\u0627\u0645: \u0639\u0627\u0626\u062f \u0627\u0644\u062e\u0637\u0637 \u0639\u0627\u0626\u0645 \u0648\u064a\u0632\u064a\u062f \u0627\u0644\u0631\u0628\u062d \u0627\u0644\u064a\u0648\u0645\u064a \u0644\u0644\u0625\u064a\u062f\u0627\u0639 \u0627\u0644\u062c\u062f\u064a\u062f \u0628\u0646\u0633\u0628\u0629 0.5\u066a \u064a\u0648\u0645\u064a\u064b\u0627","p2":"2. \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 \u0644\u0645\u0628\u0644\u063a \u0627\u0644\u0625\u064a\u062f\u0627\u0639 0.05 BNB \u0648\u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0644\u062f\u064a\u0643 \u0625\u064a\u062f\u0627\u0639\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629","p3":"3. \u0627\u0644\u0623\u0631\u0628\u0627\u062d \u0641\u064a \u0643\u0644 \u0644\u062d\u0638\u0629 \u060c \u0648\u0627\u0633\u062d\u0628 \u0641\u0648\u0631\u064b\u0627 \u0641\u064a \u0623\u064a \u0648\u0642\u062a (\u0625\u0630\u0627 \u0644\u0645 \u062a\u0633\u062a\u062e\u062f\u0645 \u0631\u0633\u0645\u0644\u0629 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0641\u064a \u0627\u0644\u062e\u0637\u0629 4 \u0648\u0627\u0644\u062e\u0637\u0629 5 \u0648\u0627\u0644\u062e\u0637\u0629 6)"},"referal":{"totalStackedBNB":"\u0625\u062c\u0645\u0627\u0644\u064a BNB \u0645\u0643\u062f\u0633","availableBNBForWithdrawal":"\u0645\u062a\u0627\u062d BNB \u0644\u0644\u0633\u062d\u0628","WithdrawBNB":"\u0633\u062d\u0628 BNB","yourReferralLink":"\u0631\u0627\u0628\u0637 \u0627\u0644\u0625\u062d\u0627\u0644\u0629 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643","totalReferralEarned":"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0625\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0643\u062a\u0633\u0628\u0629","totalReferralWithdrawn":"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0625\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0633\u062d\u0648\u0628\u0629","earnForPromotionBNBstake":"\u0643\u0633\u0628 \u0644\u0644\u062a\u0631\u0642\u064a\u0629 BNBstake","youWillReceive":"\u0633\u062a\u0633\u062a\u0644\u0645:","invited":"\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0648\u0646 \u0627\u0644\u0645\u062f\u0639\u0648\u0648\u0646 \u0628\u0648\u0627\u0633\u0637\u062a\u0643","b1":"5\u066a","b2":"2.5\u066a","b3":"0.5\u066a","p1":"\u0645\u0646 \u0643\u0644 \u0648\u062f\u0627\u0626\u0639 \u0625\u062d\u0627\u0644\u0629 \u0645\u0633\u062a\u0648\u0649 1","p2":"\u0645\u0646 \u0643\u0644 \u0648\u062f\u0627\u0626\u0639 \u0625\u062d\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 2","p3":"\u0645\u0646 \u0643\u0644 \u0645\u0633\u062a\u0648\u0649 3 \u0648\u062f\u0627\u0626\u0639 \u0625\u062d\u0627\u0644\u0629","i":"\u0645\u0644\u062d\u0648\u0638\u0629! \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0644\u062f\u064a\u0643 \u0625\u064a\u062f\u0627\u0639 \u0648\u0627\u062d\u062f \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0644\u0628\u062f\u0621 \u062a\u0644\u0642\u064a \u0627\u0644\u0623\u0631\u0628\u0627\u062d"},"footer":{"yourStake":"\u062d\u0635\u062a\u0643","p1":"\u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0627\u062a","p2":"\u0645\u0634\u063a\u0644 \u0628\u0648\u0627\u0633\u0637\u0629","p3":"\u062a\u0645 \u062a\u062f\u0642\u064a\u0642\u0647 \u0628\u0648\u0627\u0633\u0637\u0629 HazeCrypto","p4":"\xa9 2021 \u0643\u0644 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.","a1":"dApp.review","a2":"DAPP.com","a3":"\u0633\u0644\u0633\u0644\u0629 \u0628\u064a\u0646\u0627\u0646\u0633 \u0627\u0644\u0630\u0643\u064a\u0629","a4":"\u062a\u0646\u0632\u064a\u0644 \u062a\u0642\u0631\u064a\u0631 \u062a\u062f\u0642\u064a\u0642 PDF","a5":"https://bnbstake.pro"}}}'
      );
    },
    218: function (e) {
      e.exports = JSON.parse(
        '{"translation":{"header":{"connectWallet":"\u9023\u63a5\u9322\u5305","support":"\u652f\u6301","telegram":"\u96fb\u5831","englishGroup":"\u82f1\u8a9e\u7d44","espanolGroup":"\u897f\u73ed\u7259\u6587\u96c6\u5718","PDFReport":"PDF\u5831\u544a","videoReport":"\u5f71\u7247\u5831\u544a","help":"\u5e6b\u52a9","pdfGuid":"PDF\u6307\u5357","audit":"\u5be9\u8a08"},"terms":{"p1":"\u7e3d\u6536\u5165\uff1a\u6839\u64da\u60a8\u7684Tarrif\u8a08\u5283","b1":"\u5f9e\u6bcf\u59295\uff05\u52308\uff05","p2":"\u57fa\u672c\u5229\u7387\uff1a","b2":"\u6bcf24\u5c0f\u6642+ 0.5\uff05","p3":"-\u50c5\u7528\u65bc\u65b0\u5b58\u6b3e","p4":"Minimal deposit:","b3":"0.05 BNB","p5":"\u6c92\u6709\u6700\u5927\u9650\u5236","p6":"\u6536\u76ca","b4":"\u6bcf\u4e00\u500b\u77ac\u9593","p7":"\u63d0\u53d6","b5":"\u96a8\u6642","p8":"\u5982\u679c\u60a8\u4f7f\u7528\u5229\u606f\u8cc7\u672c\u5316\uff0c\u5247\u53ea\u80fd\u5728\u5b58\u6b3e\u7d50\u675f\u5f8c\u63d0\u6b3e","p9":"\u7e3d\u62b5\u62bc\u8cb8\u6b3e","span":"\u5408\u540c","p10":"\u5408\u540c\u7e3d\u9918\u984d"},"plans":{"plan1":"\u8a08\u52831","plan2":"\u8a08\u52832","plan3":"\u8a08\u52833","plan4":"\u8a08\u52834","plan5":"\u8a08\u52835","plan6":"\u8a08\u52836","dailyProfit":"\u6bcf\u65e5\u5229\u6f64","totalReturn":"\u7e3d\u56de\u5831","withdrawtime":"\u63d0\u73fe\u6642\u9593","days":"\u5929","anyTime":"\u96a8\u6642","enterAmount":"\u8f38\u5165\u91d1\u984d","endOfPlan":"\u8a08\u5283\u7d50\u675f","14days":"\u572814\u5929\u5167\uff0c\u60a8\u5c07\u7372\u5f97","21days":"\u572821\u5929\u5167\uff0c\u60a8\u5c07\u7372\u5f97","28days":"\u572828\u5929\u5167\uff0c\u60a8\u5c07\u7372\u5f97","stakeBNB":"\u5229\u76caBNB","planUse":"*\u8a08\u5283\u4f7f\u7528\u5229\u606f\u8cc7\u672c\u5316","p1":"1.\u91cd\u8981\u63d0\u793a\uff1a\u8a08\u5283\u6536\u76ca\u662f\u6d6e\u52d5\u7684\uff0c\u65b0\u5b58\u6b3e\u7684\u6bcf\u65e5\u5229\u6f64\u6bcf\u5929\u5c07\u589e\u52a00.5\uff05","p2":"2.\u6700\u4f4e\u5b58\u6b3e\u91d1\u984d\u70ba0.05 BNB\uff0c\u60a8\u53ef\u4ee5\u9032\u884c\u591a\u6b21\u5b58\u6b3e","p3":"3.\u6bcf\u4e00\u523b\u7684\u6536\u5165\uff0c\u4efb\u4f55\u6642\u5019\u90fd\u7acb\u5373\u63d0\u53d6\uff08\u5982\u679c\u60a8\u6c92\u6709\u5728\u8a08\u52834\uff0c\u8a08\u52835\u548c\u8a08\u52836\u4e2d\u4f7f\u7528\u5229\u606f\u8cc7\u672c\u5316\u7684\u8a71\uff09"},"referal":{"totalStackedBNB":"\u7e3d\u5806\u758aBNB","availableBNBForWithdrawal":"\u53ef\u7528\u7684BNB\u63d0\u6b3e","WithdrawBNB":"\u63d0\u53d6BNB","yourReferralLink":"\u60a8\u7684\u63a8\u85a6\u93c8\u63a5","totalReferralEarned":"\u7e3d\u63a8\u85a6\u4eba\u6578","totalReferralWithdrawn":"\u7e3d\u5f15\u85a6\u64a4\u56de","earnForPromotionBNBstake":"\u8cfa\u53d6\u4fc3\u92b7BNB\u80a1\u4efd","youWillReceive":"\u60a8\u5c07\u6536\u5230\uff1a","invited":"\u60a8\u9080\u8acb\u7684\u7528\u6236","b1":"5%","b2":"2.5%","b3":"0.5%","p1":"\u5f9e\u6bcf\u500b1\u7d1a\u63a8\u85a6\u5b58\u6b3e\u4e2d","p2":"\u5f9e\u6bcf\u500b2\u7d1a\u63a8\u85a6\u5b58\u6b3e\u4e2d","p3":"\u5f9e\u6bcf\u500b3\u7d1a\u63a8\u85a6\u5b58\u6b3e\u4e2d","i":"\u7b46\u8a18\uff01\u60a8\u9700\u8981\u81f3\u5c11\u67091\u7b46\u5b58\u6b3e\u624d\u80fd\u958b\u59cb\u6536\u5165"},"footer":{"yourStake":"\u60a8\u7684\u8ced\u6ce8","p1":"\u8a55\u8ad6","p2":"\u4f9b\u96fb","p3":"\u7531HazeCrypto\u5be9\u6838","p4":"\xa92021 \u7248\u6b0a\u6240\u6709\u3002","a1":"dApp.review","a2":"DAPP.com","a3":"\u5e63\u5b89\u667a\u80fd\u93c8","a4":"\u4e0b\u8f09\u5be9\u6838PDF\u5831\u544a","a5":"https://bnbstake.pro"}}}'
      );
    },
    219: function (e) {
      e.exports = JSON.parse(
        '{"translation":{"header":{"connectWallet":"Connecter le portefeuille","support":"Support","telegram":"T\xe9l\xe9gramme","englishGroup":"Groupe anglais","espanolGroup":"Groupe Espa\xf1ol","PDFReport":"Rapport PDF","videoReport":"Rapport vid\xe9o","help":"Aider","pdfGuid":"Guide PDF","audit":"Audit"},"terms":{"p1":"Revenu total: bas\xe9 sur votre plan tarifaire","b1":"de 5% \xe0 8% par jour","p2":"Taux d\'int\xe9r\xeat de base:","b2":"+ 0,5% toutes les 24 heures","p3":"- uniquement pour les nouveaux d\xe9p\xf4ts","p4":"D\xe9p\xf4t minimal:","b3":"0,05 BNB","p5":"pas de limite maximale","p6":"Gains","b4":"chaque moment","p7":"retirer","b5":"\xe0 toute heure","p8":"si vous utilisez la capitalisation des int\xe9r\xeats, vous ne pouvez retirer qu\'apr\xe8s la fin de votre d\xe9p\xf4t","p9":"Total BNB jalonn\xe9","span":"Contracter","p10":"Solde total du contrat"},"plans":{"plan1":"Planifier 1","plan2":"Planifier 2","plan3":"Planifier 3","plan4":"Planifier 4","plan5":"Planifier 5","plan6":"Planifier 6","dailyProfit":"B\xe9n\xe9fice quotidien","totalReturn":"Retour total","withdrawtime":"Temps de retrait","days":"Jours","anyTime":"\xc0 toute heure","enterAmount":"Entrer le montant","endOfPlan":"Fin du plan","14days":"Dans 14 jours, vous obtiendrez","21days":"Dans 21 jours, vous obtiendrez","28days":"Dans 28 jours, vous obtiendrez","stakeBNB":"ENJEU BNB","planUse":"* plan utiliser la capitalisation des int\xe9r\xeats","p1":"1. Important: le rendement des plans est flottant et le profit quotidien pour un nouveau d\xe9p\xf4t augmentera de 0,5% par jour","p2":"2. Le montant minimum du d\xe9p\xf4t est de 0,05 BNB et vous pouvez avoir plusieurs d\xe9p\xf4ts","p3":"3. Gains \xe0 chaque instant, retirez instantan\xe9ment \xe0 tout moment (si vous n\'avez pas utilis\xe9 la capitalisation des int\xe9r\xeats dans les plans 4, 5 et 6)"},"referal":{"totalStackedBNB":"BNB empil\xe9 total","availableBNBForWithdrawal":"BNB disponible pour le retrait","WithdrawBNB":"Retirer BNB","yourReferralLink":"Votre lien de r\xe9f\xe9rence","totalReferralEarned":"Total des parrainages gagn\xe9s","totalReferralWithdrawn":"Total des renvois retir\xe9s","earnForPromotionBNBstake":"Gagnez pour la promotion de l\'enjeu BNB","youWillReceive":"Vous allez recevoir:","invited":"Utilisateurs invit\xe9s par vous","b1":"5%","b2":"2.5%","b3":"0.5%","p1":"de chaque d\xe9p\xf4t de r\xe9f\xe9rence de niveau 1","p2":"de chaque d\xe9p\xf4t de r\xe9f\xe9rence de niveau 2","p3":"de chaque d\xe9p\xf4t de r\xe9f\xe9rence de niveau 3","i":"Noter! Vous devez avoir au moins 1 d\xe9p\xf4t pour commencer \xe0 recevoir des revenus"},"footer":{"yourStake":"Votre enjeu","p1":"Commentaires","p2":"Aliment\xe9 par","p3":"Audit\xe9 par HazeCrypto","p4":"\xa9 2021 Tous les droits sont r\xe9serv\xe9s.","a1":"dApp.review","a2":"DAPP.com","a3":"Cha\xeene intelligente Binance","a4":"T\xe9l\xe9charger le rapport d\'audit PDF","a5":"https://bnbstake.pro"}}}'
      );
    },
    226: function (e, t, a) {},
    227: function (e, t, a) {},
    242: function (e, t) {},
    265: function (e, t) {},
    267: function (e, t) {},
    343: function (e, t) {},
    345: function (e, t) {},
    377: function (e, t) {},
    382: function (e, t) {},
    384: function (e, t) {},
    391: function (e, t) {},
    404: function (e, t) {},
    492: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        s = a.n(n),
        r = a(76),
        i = a.n(r),
        l = (a(226), a(10)),
        c = (a(227), a(0));
      var o = function (e) {
          var t = e.t,
            a = e.name,
            r = e.selectedImg,
            i = e.connectTotheWallet,
            o = e.Useraccount,
            d = Object(n.useState)(0),
            p = Object(l.a)(d, 2),
            u = p[0],
            b = p[1];
          return (
            s.a.useEffect(function () {
              fetch(
                "https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=usd",
                {
                  method: "GET",
                }
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  b(e.USD);
                });
            }, []),
            Object(c.jsxs)("div", {
              className: "align-items-center mb-4 row",
              children: [
                Object(c.jsx)("div", {
                  className: "col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12",
                  children: Object(c.jsx)("img", {
                    src: "/media/logo.png",
                    className: "",
                    style: {
                      width: "4rem",
                      height: "4rem",
                      marginTop: "0.5rem",
                    },
                  }),
                }),
                Object(c.jsx)("div", {
                  className:
                    "top text-center col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12",
                  children: Object(c.jsx)("button", {
                    type: "button",
                    className: "btn btn-success btn-sm",
                    onClick: i,
                    children:
                      void 0 !== o
                        ? o.slice(0, 5) + "........" + o.slice(-5)
                        : t("header.connectWallet"),
                  }),
                }),
                Object(c.jsxs)("div", {
                  className:
                    "top text-right d-none d-sm-none d-md-block col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12",
                  children: [
                    Object(c.jsxs)("span", {
                      className: "top-bnb",
                      children: [
                        "1 BNB = ",
                        Object(c.jsxs)("b", {
                          children: ["$", u],
                        }),
                      ],
                    }),
                    "\xa0\xa0\xa0",
                    "\xa0\xa0\xa0",
                    Object(c.jsx)("div", {
                      className: "dropdown",
                      style: {
                        display: "inline",
                      },
                      children: Object(c.jsxs)("a", {
                        href: "https://t.me/bnbstakeproofficial",
                        target: "_blank",
                        style: {
                          textDecoration: "none",
                        },
                        children: [
                          "  ",
                          Object(c.jsx)("button", {
                            "aria-expanded": "false",
                            type: "button",
                            className: "btn-sm  btn btn-info",
                            children: t("header.telegram"),
                          }),
                          "    ",
                        ],
                      }),
                    }),
                    "\xa0\xa0\xa0",
                    Object(c.jsxs)("div", {
                      className: "dropdown",
                      style: {
                        display: "inline",
                      },
                      children: [
                        Object(c.jsx)("button", {
                          "aria-haspopup": "true",
                          "aria-expanded": "false",
                          type: "button",
                          "data-toggle": "dropdown",
                          className: "btn-sm dropdown-toggle btn btn-primary",
                          children: t("header.audit"),
                        }),
                        Object(c.jsxs)("div", {
                          "x-placement": "bottom-start",
                          "aria-labelledby": "",
                          className: "dropdown-menu",
                          children: [
                            Object(c.jsx)("a", {
                              rel: "noreferrer",
                              href: "/HazeSecurity_BNBStakePro.pdf",
                              download: !0,
                              className: "dropdown-item",
                              children: t("header.PDFReport"),
                            }),
                            Object(c.jsx)("a", {
                              rel: "noreferrer",
                              href: "#",
                              className: "dropdown-item",
                              children: t("header.videoReport"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    "\xa0\xa0\xa0",
                    Object(c.jsx)("a", {
                      href: "https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "btn-sm btn-success btn btn-primary",
                      children: t("header.help"),
                    }),
                    "\xa0\xa0\xa0 \xa0",
                    Object(c.jsx)("a", {
                      href: "/media/bnbstake.pdf",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "btn-sm btn-success btn btn-primary",
                      children: t("header.pdfGuid"),
                    }),
                    "\xa0",
                    Object(c.jsxs)("div", {
                      className: "header__language",
                      style: {
                        display: "inline",
                        cursor: "pointer",
                      },
                      children: [
                        Object(c.jsxs)("span", {
                          className: "languageInnerContainer",
                          children: [
                            Object(c.jsx)("img", {
                              src: r,
                              width: "20",
                              className: "flagsStyling",
                            }),
                            Object(c.jsx)("span", {
                              className: "languageText",
                              children: a,
                            }),
                          ],
                        }),
                        Object(c.jsxs)("ul", {
                          className: "dropdownList",
                          children: [
                            Object(c.jsx)("li", {
                              className: "dropdown-item",
                              children: Object(c.jsxs)("a", {
                                href: "?lang=en",
                                children: [
                                  Object(c.jsx)("img", {
                                    src: "/media/Britain.svg",
                                    width: "20",
                                  }),
                                  Object(c.jsx)("span", {
                                    className: "languageText",
                                    children: "English",
                                  }),
                                ],
                              }),
                            }),
                            Object(c.jsx)("li", {
                              className: "dropdown-item",
                              children: Object(c.jsxs)("a", {
                                href: "?lang=fr",
                                children: [
                                  Object(c.jsx)("img", {
                                    src: "/media/French.svg",
                                    width: "20",
                                  }),
                                  Object(c.jsx)("span", {
                                    className: "languageText",
                                    children: "Fran\xe7aise",
                                  }),
                                ],
                              }),
                            }),
                            Object(c.jsx)("li", {
                              className: "dropdown-item",
                              children: Object(c.jsxs)("a", {
                                href: "?lang=ch",
                                children: [
                                  Object(c.jsx)("img", {
                                    src: "/media/China.svg",
                                    width: "20",
                                  }),
                                  Object(c.jsx)("span", {
                                    className: "languageText",
                                    children: " \u4e2d\u6587 ",
                                  }),
                                ],
                              }),
                            }),
                            Object(c.jsx)("li", {
                              className: "dropdown-item",
                              children: Object(c.jsxs)("a", {
                                href: "?lang=ar",
                                children: [
                                  Object(c.jsx)("img", {
                                    src: "/media/Arab.svg",
                                    width: "20",
                                  }),
                                  Object(c.jsx)("span", {
                                    className: "languageText",
                                    children: " \u0639\u0631\u0628\u064a",
                                  }),
                                ],
                              }),
                            }),
                            Object(c.jsx)("li", {
                              className: "dropdown-item",
                              children: Object(c.jsxs)("a", {
                                href: "?lang=jp",
                                children: [
                                  Object(c.jsx)("img", {
                                    src: "/media/Japan.svg",
                                    width: "20",
                                  }),
                                  Object(c.jsx)("span", {
                                    className: "languageText",
                                    children: " \u65e5\u672c\u8a9e ",
                                  }),
                                ],
                              }),
                            }),
                            Object(c.jsx)("li", {
                              className: "dropdown-item",
                              children: Object(c.jsxs)("a", {
                                href: "?lang=kr",
                                children: [
                                  Object(c.jsx)("img", {
                                    src: "/media/Korea.svg",
                                    width: "20",
                                  }),
                                  Object(c.jsx)("span", {
                                    className: "languageText",
                                    children: " \ud55c\uad6d\uc5b4",
                                  }),
                                ],
                              }),
                            }),
                            Object(c.jsx)("li", {
                              className: "dropdown-item",
                              children: Object(c.jsxs)("a", {
                                href: "?lang=ru",
                                children: [
                                  Object(c.jsx)("img", {
                                    src: "/media/Russia.svg",
                                    width: "20",
                                  }),
                                  Object(c.jsx)("span", {
                                    className: "languageText",
                                    children:
                                      "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                                  }),
                                ],
                              }),
                            }),
                            Object(c.jsx)("li", {
                              className: "dropdown-item",
                              children: Object(c.jsxs)("a", {
                                href: "?lang=es",
                                children: [
                                  Object(c.jsx)("img", {
                                    src: "/media/Spain.svg",
                                    width: "20",
                                  }),
                                  Object(c.jsx)("span", {
                                    className: "languageText",
                                    children: " Espa\xf1ol ",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    "\xa0\xa0\xa0",
                  ],
                }),
              ],
            })
          );
        },
        d = a(6),
        p = a.n(d),
        u = a(14),
        b = a(19),
        j = a.n(b),
        h = {
          contractAddress: "0x77349Aa0bB15Bd47931f28DcC81b47182BF6e2ab",
          defaultAddress: "0xefFABb1866f96A449AaA37B6e97A3A6cC1faaf2d",
        },
        f = new j.a(j.a.givenProvider || "http://localhost8545");
      var m = function (e) {
          var t = e.t,
            a = e.mincontract,
            r = e.Useraccount,
            i = Object(n.useState)(0),
            o = Object(l.a)(i, 2),
            d = o[0],
            b = o[1],
            j = Object(n.useState)(0),
            m = Object(l.a)(j, 2),
            x = m[0],
            y = m[1],
            v = s.a.useCallback(
              Object(u.a)(
                p.a.mark(function e() {
                  return p.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (void 0 === r || void 0 === a) {
                            e.next = 5;
                            break;
                          }
                          return (
                            (e.next = 3),
                            a.methods
                              .getContractBalance()
                              .call()
                              .then(function (e) {
                                b(f.utils.fromWei(e));
                              })
                          );
                        case 3:
                          return (
                            (e.next = 5),
                            a.methods
                              .totalStaked()
                              .call()
                              .then(function (e) {
                                y(f.utils.fromWei(e));
                              })
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r, a]
            );
          return (
            Object(n.useEffect)(
              function () {
                v();
              },
              [v]
            ),
            Object(c.jsxs)("div", {
              class: "info-box row",
              children: [
                Object(c.jsx)("div", {
                  class: "mb-4 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12",
                  children: Object(c.jsxs)("div", {
                    class: "box-gradient",
                    children: [
                      Object(c.jsxs)("p", {
                        children: [
                          t("terms.p1"),
                          " (",
                          Object(c.jsx)("b", {
                            children: t("terms.b1"),
                          }),
                          ")",
                        ],
                      }),
                      Object(c.jsxs)("p", {
                        children: [
                          t("terms.p2"),
                          " ",
                          Object(c.jsx)("b", {
                            children: t("terms.b2"),
                          }),
                          " ",
                          t("terms.p3"),
                        ],
                      }),
                      Object(c.jsxs)("p", {
                        children: [
                          t("terms.p4"),
                          " ",
                          Object(c.jsx)("b", {
                            children: t("terms.b3"),
                          }),
                          ", ",
                          t("terms.p5"),
                        ],
                      }),
                      Object(c.jsxs)("p", {
                        children: [
                          t("terms.p6"),
                          " ",
                          Object(c.jsx)("b", {
                            children: t("terms.b4"),
                          }),
                          ", ",
                          t("terms.p7"),
                          " ",
                          Object(c.jsx)("b", {
                            children: t("terms.b5"),
                          }),
                          " (",
                          t("terms.p8"),
                          ")",
                        ],
                      }),
                    ],
                  }),
                }),
                Object(c.jsxs)("div", {
                  class: "mb-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12",
                  children: [
                    Object(c.jsxs)("p", {
                      children: [
                        t("terms.p9"),
                        " ",
                        Object(c.jsx)("a", {
                          href: "https://bscscan.com/address/".concat(
                            h.contractAddress
                          ),
                          target: "_blank",
                          rel: "noreferrer",
                          children: Object(c.jsx)("span", {
                            class: "ml-2 badge badge-primary",
                            children: t("terms.span"),
                          }),
                        }),
                      ],
                    }),
                    Object(c.jsx)("h2", {
                      children: x ? parseFloat(x).toFixed(2) : 0,
                    }),
                    Object(c.jsx)("p", {
                      children: t("terms.p10"),
                    }),
                    Object(c.jsx)("h2", {
                      children: d ? parseFloat(d).toFixed(2) : 0,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        x = a(25),
        y = a(16),
        v = new j.a(j.a.givenProvider || "http://localhost8545");
      var O = function (e) {
        var t,
          a = e.t,
          r = e.mincontract,
          i = e.Useraccount,
          o = s.a.useState(0),
          d = Object(l.a)(o, 2),
          b = d[0],
          j = d[1],
          f = s.a.useState(0),
          m = Object(l.a)(f, 2),
          O = m[0],
          g = m[1],
          w = s.a.useState(0),
          B = Object(l.a)(w, 2),
          N = B[0],
          k = B[1],
          T = s.a.useState(0),
          P = Object(l.a)(T, 2),
          R = P[0],
          F = P[1],
          S = Object(n.useState)(0),
          A = Object(l.a)(S, 2),
          W = A[0],
          C = A[1],
          D = s.a.useState(0),
          E = Object(l.a)(D, 2),
          M = E[0],
          U = E[1],
          G = s.a.useState(0),
          I = Object(l.a)(G, 2),
          z = I[0],
          L = I[1],
          _ = Object(n.useState)(0),
          q = Object(l.a)(_, 2),
          J = q[0],
          H = q[1],
          V = s.a.useState(0),
          K = Object(l.a)(V, 2),
          Y = K[0],
          X = K[1],
          $ = s.a.useState(0),
          Q = Object(l.a)($, 2),
          Z = Q[0],
          ee = Q[1],
          te = s.a.useState(0),
          ae = Object(l.a)(te, 2),
          ne = ae[0],
          se = ae[1],
          re = s.a.useState(0),
          ie = Object(l.a)(re, 2),
          le = ie[0],
          ce = ie[1],
          oe = s.a.useState({
            percent: 0,
            profit: 0,
          }),
          de = Object(l.a)(oe, 2),
          pe = de[0],
          ue = de[1],
          be = s.a.useState({
            percent: 0,
            profit: 0,
          }),
          je = Object(l.a)(be, 2),
          he = je[0],
          fe = je[1],
          me = s.a.useState({
            percent: 0,
            profit: 0,
          }),
          xe = Object(l.a)(me, 2),
          ye = xe[0],
          ve = xe[1],
          Oe = s.a.useState({
            percent: 0,
            profit: 0,
          }),
          ge = Object(l.a)(Oe, 2),
          we = ge[0],
          Be = ge[1],
          Ne = s.a.useState({
            percent: 0,
            profit: 0,
          }),
          ke = Object(l.a)(Ne, 2),
          Te = ke[0],
          Pe = ke[1],
          Re = s.a.useState({
            percent: 0,
            profit: 0,
          }),
          Fe = Object(l.a)(Re, 2),
          Se = Fe[0],
          Ae = Fe[1],
          We = s.a.useState(""),
          Ce = Object(l.a)(We, 2),
          De = (Ce[0], Ce[1]),
          Ee = localStorage.getItem("BNB_STACK"),
          Me = window.location.href;
        Me.includes("?ref=") && (t = Me.split("?ref=")[1].slice(0, 42));
        var Ue = t || Ee || h.defaultAddress,
          Ge = (function () {
            var e = Object(u.a)(
              p.a.mark(function e() {
                return p.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (void 0 === r || void 0 === i || !N) {
                          e.next = 3;
                          break;
                        }
                        return (
                          (e.next = 3),
                          r.methods
                            .invest(Ue, 1)
                            .send({
                              from: i,
                              gas: 21e5,
                              value: v.utils.toWei(N),
                            })
                            .then(function () {
                              y.b.success("Invested successfully!");
                            })
                            .catch(function (e) {
                              y.b.error("Something went wrong!");
                            })
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          Ie = (function () {
            var e = Object(u.a)(
              p.a.mark(function e() {
                return p.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (void 0 === r || void 0 === i || !W) {
                          e.next = 3;
                          break;
                        }
                        return (
                          (e.next = 3),
                          r.methods
                            .invest(Ue, 2)
                            .send({
                              from: i,
                              gas: 21e5,
                              value: v.utils.toWei(W),
                            })
                            .then(function () {
                              y.b.success("Invested successfully!");
                            })
                            .catch(function (e) {
                              y.b.error("Something went wrong!");
                            })
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          ze = (function () {
            var e = Object(u.a)(
              p.a.mark(function e() {
                return p.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (void 0 === r || void 0 === i || !z) {
                          e.next = 3;
                          break;
                        }
                        return (
                          (e.next = 3),
                          r.methods
                            .invest(Ue, 3)
                            .send({
                              from: i,
                              gas: 21e5,
                              value: v.utils.toWei(z),
                            })
                            .then(function () {
                              y.b.success("Invested successfully!");
                            })
                            .catch(function (e) {
                              y.b.error("Something went wrong!");
                            })
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          Le = (function () {
            var e = Object(u.a)(
              p.a.mark(function e() {
                return p.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (void 0 === r || void 0 === i || !Y) {
                          e.next = 3;
                          break;
                        }
                        return (
                          (e.next = 3),
                          r.methods
                            .invest(Ue, 4)
                            .send({
                              from: i,
                              gas: 21e5,
                              value: v.utils.toWei(Y),
                            })
                            .then(function () {
                              y.b.success("Invested successfully!");
                            })
                            .catch(function (e) {
                              y.b.error("Something went wrong!");
                            })
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          _e = (function () {
            var e = Object(u.a)(
              p.a.mark(function e() {
                return p.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (void 0 === r || void 0 === i || !ne) {
                          e.next = 3;
                          break;
                        }
                        return (
                          (e.next = 3),
                          r.methods
                            .invest(Ue, 5)
                            .send({
                              from: i,
                              gas: 21e5,
                              value: v.utils.toWei(ne),
                            })
                            .then(function () {
                              y.b.success("Invested successfully!");
                            })
                            .catch(function (e) {
                              y.b.error("Something went wrong!");
                            })
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          qe = s.a.useCallback(
            Object(u.a)(
              p.a.mark(function e() {
                return p.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        void 0 !== r &&
                          void 0 !== i &&
                          (r.methods
                            .owner()
                            .call()
                            .then(function (e) {
                              De(e);
                            }),
                          r.methods
                            .getResult(0, "1000000000000000000")
                            .call()
                            .then(function (e) {
                              ue(function (t) {
                                return Object(x.a)(
                                  Object(x.a)({}, t),
                                  {},
                                  {
                                    profit: v.utils.fromWei(e.profit),
                                    percent: e.percent,
                                  }
                                );
                              });
                            }),
                          r.methods
                            .getResult(1, "1000000000000000000")
                            .call()
                            .then(function (e) {
                              fe(function (t) {
                                return Object(x.a)(
                                  Object(x.a)({}, t),
                                  {},
                                  {
                                    profit: v.utils.fromWei(e.profit),
                                    percent: e.percent,
                                  }
                                );
                              });
                            }),
                          r.methods
                            .getResult(2, "1000000000000000000")
                            .call()
                            .then(function (e) {
                              ve(function (t) {
                                return Object(x.a)(
                                  Object(x.a)({}, t),
                                  {},
                                  {
                                    profit: v.utils.fromWei(e.profit),
                                    percent: e.percent,
                                  }
                                );
                              });
                            }),
                          r.methods
                            .getResult(3, "1000000000000000000")
                            .call()
                            .then(function (e) {
                              Be(function (t) {
                                return Object(x.a)(
                                  Object(x.a)({}, t),
                                  {},
                                  {
                                    profit: v.utils.fromWei(e.profit),
                                    percent: e.percent,
                                  }
                                );
                              });
                            }),
                          r.methods
                            .getResult(4, "1000000000000000000")
                            .call()
                            .then(function (e) {
                              Pe(function (t) {
                                return Object(x.a)(
                                  Object(x.a)({}, t),
                                  {},
                                  {
                                    profit: v.utils.fromWei(e.profit),
                                    percent: e.percent,
                                  }
                                );
                              });
                            }),
                          r.methods
                            .getResult(5, "1000000000000000000")
                            .call()
                            .then(function (e) {
                              Ae(function (t) {
                                return Object(x.a)(
                                  Object(x.a)({}, t),
                                  {},
                                  {
                                    profit: v.utils.fromWei(e.profit),
                                    percent: e.percent,
                                  }
                                );
                              });
                            }));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [i, r]
          );
        Object(n.useEffect)(
          function () {
            qe();
          },
          [qe]
        );
        var Je = s.a.useCallback(
          Object(u.a)(
            p.a.mark(function e() {
              return p.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      void 0 !== r &&
                        void 0 !== i &&
                        null !== b &&
                        void 0 !== b &&
                        r.methods
                          .getResult(0, v.utils.toWei(b || "0").toString())
                          .call()
                          .then(function (e) {
                            console.log(e, "this is the  value"),
                              g(v.utils.fromWei(e.profit));
                          });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          [b]
        );
        s.a.useEffect(
          function () {
            Je();
          },
          [Je]
        );
        var He = s.a.useCallback(
          Object(u.a)(
            p.a.mark(function e() {
              return p.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      void 0 !== r &&
                        void 0 !== i &&
                        null !== N &&
                        void 0 !== N &&
                        r.methods
                          .getResult(1, v.utils.toWei(N || "0").toString())
                          .call()
                          .then(function (e) {
                            console.log(e, "this is the  value"),
                              F(v.utils.fromWei(e.profit));
                          });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          [N]
        );
        s.a.useEffect(
          function () {
            He();
          },
          [He]
        );
        var Ve = s.a.useCallback(
          Object(u.a)(
            p.a.mark(function e() {
              return p.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      void 0 !== r &&
                        void 0 !== i &&
                        null !== W &&
                        void 0 !== W &&
                        r.methods
                          .getResult(2, v.utils.toWei(W || "0").toString())
                          .call()
                          .then(function (e) {
                            console.log(e, "this is the  value"),
                              U(v.utils.fromWei(e.profit));
                          });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          [W]
        );
        s.a.useEffect(
          function () {
            Ve();
          },
          [Ve]
        );
        var Ke = s.a.useCallback(
          Object(u.a)(
            p.a.mark(function e() {
              return p.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      void 0 !== r &&
                        void 0 !== i &&
                        null !== z &&
                        void 0 !== z &&
                        r.methods
                          .getResult(3, v.utils.toWei(z || "0").toString())
                          .call()
                          .then(function (e) {
                            console.log(e, "this is the  value"),
                              H(v.utils.fromWei(e.profit));
                          });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          [z]
        );
        s.a.useEffect(
          function () {
            Ke();
          },
          [Ke]
        );
        var Ye = s.a.useCallback(
          Object(u.a)(
            p.a.mark(function e() {
              return p.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      void 0 !== r &&
                        void 0 !== i &&
                        null !== Y &&
                        void 0 !== Y &&
                        r.methods
                          .getResult(4, v.utils.toWei(Y || "0").toString())
                          .call()
                          .then(function (e) {
                            console.log(e, "this is the  value"),
                              ee(v.utils.fromWei(e.profit));
                          });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          [Y]
        );
        s.a.useEffect(
          function () {
            Ye();
          },
          [Ye]
        );
        var Xe = s.a.useCallback(
          Object(u.a)(
            p.a.mark(function e() {
              return p.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        void 0 === r ||
                        void 0 === i ||
                        null === ne ||
                        void 0 === ne
                      ) {
                        e.next = 3;
                        break;
                      }
                      return (
                        (e.next = 3),
                        r.methods
                          .getResult(5, v.utils.toWei(ne || "0").toString())
                          .call()
                          .then(function (e) {
                            console.log(e, "this is the  value"),
                              ce(v.utils.fromWei(e.profit));
                          })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          [ne]
        );
        return (
          s.a.useEffect(
            function () {
              Xe();
            },
            [Xe]
          ),
          Object(c.jsxs)("div", {
            children: [
              Object(c.jsxs)("div", {
                class: "mb-4 row",
                children: [
                  Object(c.jsx)("div", {
                    class: "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12",
                    children: Object(c.jsxs)("div", {
                      class: "plan-box text-center",
                      children: [
                        Object(c.jsx)("div", {
                          class: "plan-box-name",
                          children: a("plans.plan1"),
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.dailyProfit"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [(pe.percent / 10).toFixed(0), "%"],
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.totalReturn"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [parseInt(100 * pe.profit), "%"],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.withdrawtime"),
                                }),
                                Object(c.jsx)("h3", {
                                  children: a("plans.anyTime"),
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.days"),
                                }),
                                Object(c.jsx)("h2", {
                                  children: "14",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.enterAmount"),
                                }),
                                Object(c.jsx)("input", {
                                  placeholder: "10",
                                  type: "text",
                                  id: "plan0amount",
                                  class:
                                    "btn-secondary form-control form-control-lg",
                                  value: b,
                                  onChange: function (e) {
                                    return j(e.target.value);
                                  },
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.14days"),
                                }),
                                Object(c.jsx)("h4", {
                                  id: "plan0profit",
                                  children: O ? parseFloat(O).toFixed(1) : 0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsx)("button", {
                          type: "button",
                          class: "mt-2 btn btn-warning btn-block btn-lg",
                          onClick: function () {
                            void 0 !== r &&
                              void 0 !== i &&
                              b &&
                              r.methods
                                .invest(Ue, 0)
                                .send({
                                  from: i,
                                  gas: 21e5,
                                  value: v.utils.toWei(b),
                                })
                                .then(function () {
                                  y.b.success("Invested successfully!");
                                })
                                .catch(function (e) {
                                  y.b.error("Something went wrong!");
                                });
                          },
                          children: a("plans.stakeBNB"),
                        }),
                      ],
                    }),
                  }),
                  Object(c.jsx)("div", {
                    class: "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12",
                    children: Object(c.jsxs)("div", {
                      class: "plan-box text-center",
                      children: [
                        Object(c.jsx)("div", {
                          class: "plan-box-name",
                          children: a("plans.plan2"),
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.dailyProfit"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [he.percent / 10, "%"],
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.totalReturn"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [parseInt(100 * he.profit), "%"],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.withdrawtime"),
                                }),
                                Object(c.jsx)("h3", {
                                  children: a("plans.anyTime"),
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.days"),
                                }),
                                Object(c.jsx)("h2", {
                                  children: "21",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.enterAmount"),
                                }),
                                Object(c.jsx)("input", {
                                  placeholder: "10",
                                  type: "text",
                                  id: "plan1amount",
                                  class:
                                    "btn-secondary form-control form-control-lg",
                                  value: N,
                                  onChange: function (e) {
                                    return k(e.target.value);
                                  },
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.21days"),
                                }),
                                Object(c.jsx)("h4", {
                                  id: "plan1profit",
                                  children: R ? parseFloat(R).toFixed(1) : 0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("button", {
                          type: "button",
                          class: "mt-2 btn btn-warning btn-block btn-lg",
                          onClick: Ge,
                          children: [a("plans.stakeBNB"), "  "],
                        }),
                      ],
                    }),
                  }),
                  Object(c.jsx)("div", {
                    class: "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12",
                    children: Object(c.jsxs)("div", {
                      class: "plan-box text-center",
                      children: [
                        Object(c.jsx)("div", {
                          class: "plan-box-name",
                          children: a("plans.plan3"),
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.dailyProfit"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [ye.percent / 10, "%"],
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.totalReturn"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [
                                    ye
                                      ? parseFloat(100 * ye.profit).toFixed(0)
                                      : 0,
                                    "%",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.withdrawtime"),
                                }),
                                Object(c.jsx)("h3", {
                                  children: a("plans.anyTime"),
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.days"),
                                }),
                                Object(c.jsx)("h2", {
                                  children: " 28",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.enterAmount"),
                                }),
                                Object(c.jsx)("input", {
                                  placeholder: "10",
                                  type: "text",
                                  id: "plan2amount",
                                  class:
                                    "btn-secondary form-control form-control-lg",
                                  value: W,
                                  onChange: function (e) {
                                    return C(e.target.value);
                                  },
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.28days"),
                                }),
                                Object(c.jsx)("h4", {
                                  id: "plan2profit",
                                  children: M ? parseFloat(M).toFixed(1) : 0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsx)("button", {
                          type: "button",
                          class: "mt-2 btn btn-warning btn-block btn-lg",
                          onClick: Ie,
                          children: a("plans.stakeBNB"),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(c.jsxs)("div", {
                class: "mb-4 row",
                children: [
                  Object(c.jsx)("div", {
                    class: "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12",
                    children: Object(c.jsxs)("div", {
                      class: "plan-box1 text-center",
                      children: [
                        Object(c.jsx)("div", {
                          class: "plan-box-name1",
                          children: a("plans.plan4"),
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.dailyProfit"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [we.percent / 10, "%"],
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.totalReturn"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [
                                    parseFloat(100 * we.profit).toFixed(0),
                                    "%",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.withdrawtime"),
                                }),
                                Object(c.jsx)("h3", {
                                  children: a("plans.endOfPlan"),
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.days"),
                                }),
                                Object(c.jsx)("h2", {
                                  children: "14",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.enterAmount"),
                                }),
                                Object(c.jsx)("input", {
                                  placeholder: "10",
                                  type: "text",
                                  id: "plan3amount",
                                  class:
                                    "btn-secondary form-control form-control-lg",
                                  value: z,
                                  onChange: function (e) {
                                    return L(e.target.value);
                                  },
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.14days"),
                                }),
                                Object(c.jsx)("h4", {
                                  id: "plan3profit",
                                  children: J ? parseFloat(J).toFixed(1) : 0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsx)("button", {
                          type: "button",
                          class: "mt-2 btn btn-success btn-block btn-lg",
                          onClick: ze,
                          children: a("plans.stakeBNB"),
                        }),
                        Object(c.jsx)("i", {
                          class: "small",
                          children: a("plans.planUse"),
                        }),
                      ],
                    }),
                  }),
                  Object(c.jsx)("div", {
                    class: "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12",
                    children: Object(c.jsxs)("div", {
                      class: "plan-box1 text-center",
                      children: [
                        Object(c.jsx)("div", {
                          class: "plan-box-name1",
                          children: a("plans.plan5"),
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.dailyProfit"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [Te.percent / 10, "%"],
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.totalReturn"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [
                                    parseFloat(100 * Te.profit).toFixed(0),
                                    "%",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.withdrawtime"),
                                }),
                                Object(c.jsx)("h3", {
                                  children: a("plans.endOfPlan"),
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.days"),
                                }),
                                Object(c.jsx)("h2", {
                                  children: "21",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.enterAmount"),
                                }),
                                Object(c.jsx)("input", {
                                  placeholder: "10",
                                  type: "text",
                                  id: "plan4amount",
                                  class:
                                    "btn-secondary form-control form-control-lg",
                                  value: Y,
                                  onChange: function (e) {
                                    return X(e.target.value);
                                  },
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.21days"),
                                }),
                                Object(c.jsx)("h4", {
                                  id: "plan4profit",
                                  children: Z ? parseFloat(Z).toFixed(1) : 0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsx)("button", {
                          type: "button",
                          class: "mt-2 btn btn-success btn-block btn-lg",
                          onClick: Le,
                          children: a("plans.stakeBNB"),
                        }),
                        Object(c.jsx)("i", {
                          class: "small",
                          children: a("plans.planUse"),
                        }),
                      ],
                    }),
                  }),
                  Object(c.jsx)("div", {
                    class: "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12",
                    children: Object(c.jsxs)("div", {
                      class: "plan-box1 text-center",
                      children: [
                        Object(c.jsx)("div", {
                          class: "plan-box-name1",
                          children: a("plans.plan6"),
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.dailyProfit"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [Se.percent / 10, "%"],
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.totalReturn"),
                                }),
                                Object(c.jsxs)("h2", {
                                  children: [
                                    parseFloat(100 * Se.profit).toFixed(0),
                                    "%",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.withdrawtime"),
                                }),
                                Object(c.jsx)("h3", {
                                  children: a("plans.endOfPlan"),
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.days"),
                                }),
                                Object(c.jsx)("h2", {
                                  children: "28",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          class: "row",
                          children: [
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.enterAmount"),
                                }),
                                Object(c.jsx)("input", {
                                  placeholder: "10",
                                  type: "text",
                                  id: "plan5amount",
                                  class:
                                    "btn-secondary form-control form-control-lg",
                                  value: ne,
                                  onChange: function (e) {
                                    se(e.target.value);
                                  },
                                }),
                              ],
                            }),
                            Object(c.jsxs)("div", {
                              class: "col",
                              children: [
                                Object(c.jsx)("p", {
                                  children: a("plans.28days"),
                                }),
                                Object(c.jsx)("h4", {
                                  id: "plan5profit",
                                  children: le ? parseFloat(le).toFixed(1) : 0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(c.jsx)("button", {
                          type: "button",
                          class: "mt-2 btn btn-success btn-block btn-lg",
                          onClick: _e,
                          children: a("plans.stakeBNB"),
                        }),
                        Object(c.jsx)("i", {
                          class: "small",
                          children: a("plans.planUse"),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(c.jsxs)("p", {
                class: "small",
                children: [
                  a("plans.p1"),
                  Object(c.jsx)("br", {}),
                  a("plans.p2"),
                  Object(c.jsx)("br", {}),
                  a("plans.p3"),
                ],
              }),
            ],
          })
        );
      };
      var g = function (e) {
          var t = e.t;
          return Object(c.jsxs)("div", {
            children: [
              Object(c.jsx)("div", {
                class: "footer row",
                children: Object(c.jsx)("div", {
                  class: "text-center col",
                  children: Object(c.jsx)("img", {
                    src: "/media/footer.png",
                    class: "img-fluid",
                  }),
                }),
              }),
              Object(c.jsx)("br", {}),
              Object(c.jsx)("br", {}),
              Object(c.jsxs)("div", {
                class: "footer row",
                children: [
                  Object(c.jsxs)("div", {
                    class: "text-left ml-5 col",
                    children: [
                      t("footer.p2"),
                      Object(c.jsx)("br", {}),
                      Object(c.jsx)("a", {
                        href: "https://www.binance.org/en/smartChain",
                        target: "_blank",
                        rel: "noreferrer",
                        children: t("footer.a3"),
                      }),
                    ],
                  }),
                  Object(c.jsxs)("div", {
                    class: "text-center col",
                    children: [
                      t("footer.p3"),
                      Object(c.jsx)("br", {}),
                      Object(c.jsx)("a", {
                        href: "/HazeSecurity_BNBStakePro.pdf",
                        download: !0,
                        rel: "noreferrer",
                        children: t("footer.a4"),
                      }),
                    ],
                  }),
                  Object(c.jsxs)("div", {
                    class: "text-right mr-5 col",
                    children: [
                      t("footer.p4"),
                      Object(c.jsx)("br", {}),
                      Object(c.jsx)("a", {
                        href: "https://bnbstake.pro",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "https://bnbstake.pro",
                      }),
                    ],
                  }),
                ],
              }),
              Object(c.jsx)("br", {}),
            ],
          });
        },
        w = a(205),
        B = new j.a(j.a.givenProvider || "http://localhost8545");
      var N = function (e) {
          var t = e.t,
            a = e.mincontract,
            r = e.Useraccount,
            i = Object(n.useState)(),
            o = Object(l.a)(i, 2),
            d = (o[0], o[1], Object(n.useState)(0)),
            b = Object(l.a)(d, 2),
            j = b[0],
            h = b[1],
            f = Object(n.useState)(0),
            m = Object(l.a)(f, 2),
            x = m[0],
            v = m[1],
            O = Object(n.useState)(0),
            g = Object(l.a)(O, 2),
            N = g[0],
            k = g[1],
            T = Object(n.useState)(0),
            P = Object(l.a)(T, 2),
            R = P[0],
            F = P[1],
            S = Object(n.useState)(0),
            A = Object(l.a)(S, 2),
            W = A[0],
            C = A[1],
            D = s.a.useCallback(
              Object(u.a)(
                p.a.mark(function e() {
                  return p.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (void 0 === a || void 0 === r) {
                              e.next = 15;
                              break;
                            }
                            return (
                              (e.prev = 1),
                              (e.next = 4),
                              a.methods
                                .getUserTotalDeposits(r || "0")
                                .call()
                                .then(function (e) {
                                  h(B.utils.fromWei(e));
                                })
                            );
                          case 4:
                            return (
                              (e.next = 6),
                              a.methods
                                .getUserReferralWithdrawn(r || "0")
                                .call()
                                .then(function (e) {
                                  v(B.utils.fromWei(e));
                                })
                            );
                          case 6:
                            return (
                              (e.next = 8),
                              a.methods
                                .getUserReferralTotalBonus(r || "0")
                                .call()
                                .then(function (e) {
                                  k(B.utils.fromWei(e));
                                })
                            );
                          case 8:
                            return (
                              (e.next = 10),
                              a.methods
                                .getUserDownlineCount(r || "0")
                                .call()
                                .then(function (e) {
                                  C(e[0]);
                                })
                            );
                          case 10:
                            e.next = 15;
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(1)),
                              console.error(e.t0);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12]]
                  );
                })
              ),
              [a, r]
            );
          return (
            s.a.useEffect(
              function () {
                D();
              },
              [D]
            ),
            s.a.useEffect(
              function () {
                setInterval(function () {
                  a &&
                    r &&
                    void 0 !== a &&
                    void 0 !== r &&
                    a.methods
                      .getUserAvailable(r)
                      .call()
                      .then(function (e) {
                        F(B.utils.fromWei(e));
                      });
                }, 1e3);
              },
              [r, a]
            ),
            console.log(R),
            Object(c.jsxs)("div", {
              class: "mb-4 row",
              children: [
                Object(c.jsx)("div", {
                  class: "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12",
                  children: Object(c.jsxs)("div", {
                    class: "box-gradient1",
                    children: [
                      Object(c.jsx)("p", {
                        children: t("referal.totalStackedBNB"),
                      }),
                      Object(c.jsx)("h2", {
                        children: j ? parseFloat(j).toFixed(5) : 0,
                      }),
                      Object(c.jsx)("p", {
                        children: t("referal.availableBNBForWithdrawal"),
                      }),
                      Object(c.jsx)("h2", {
                        children: parseFloat(R).toFixed(5),
                      }),
                      Object(c.jsx)("button", {
                        type: "button",
                        class: "btn btn-dark btn-lg",
                        onClick: function () {
                          void 0 !== a &&
                            void 0 !== r &&
                            (B.utils.toWei(R) > 1e17
                              ? a.methods
                                  .withdraw()
                                  .send({
                                    from: r,
                                    gas: 21e5,
                                  })
                                  .then(function () {
                                    y.b.success("withdraw successfully!");
                                  })
                                  .catch(function (e) {
                                    y.b.error("Something went wrong!");
                                  })
                              : y.b.info("minimum withdraw 0.1 bnb"));
                        },
                        children: t("referal.WithdrawBNB"),
                      }),
                    ],
                  }),
                }),
                Object(c.jsx)("div", {
                  class: "col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12",
                  children: Object(c.jsxs)("div", {
                    class: "plan-box",
                    children: [
                      Object(c.jsx)("p", {
                        children: t("referal.yourReferralLink"),
                      }),
                      Object(c.jsx)("form", {
                        class: "",
                        children: Object(c.jsxs)("div", {
                          class: "align-items-center form-row",
                          children: [
                            Object(c.jsx)("div", {
                              class: "col-11",
                              children: Object(c.jsx)("input", {
                                type: "text",
                                class:
                                  "btn-secondary form-control form-control-xl",
                                value: r
                                  ? ""
                                      .concat(window.location.origin, "/?ref=")
                                      .concat(r)
                                  : "Please connect to your wallet",
                              }),
                            }),
                            Object(c.jsx)("div", {
                              class: "col",
                              children: Object(c.jsx)(w.CopyToClipboard, {
                                text: window.location.origin + "/?ref=" + r,
                                onCopy: function () {
                                  return y.b.success("Copied!");
                                },
                                children: Object(c.jsx)("button", {
                                  "data-clipboard-action": "copy",
                                  value: ""
                                    .concat(window.location.origin, "/?ref=")
                                    .concat(r),
                                  type: "button",
                                  class: "btn btn-success btn-xl",
                                  children: Object(c.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 16 16",
                                    width: "20",
                                    height: "20",
                                    fill: "currentColor",
                                    class: "mt-0",
                                    children: [
                                      Object(c.jsx)("path", {
                                        "fill-rule": "evenodd",
                                        d: "M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z",
                                      }),
                                      Object(c.jsx)("path", {
                                        d: "M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z",
                                      }),
                                      Object(c.jsx)("path", {
                                        d: "M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(c.jsxs)("div", {
                        class: "mt-2 row",
                        children: [
                          Object(c.jsxs)("div", {
                            class: "col",
                            children: [
                              Object(c.jsx)("p", {
                                class: "mt-4 mb-0",
                                children: t("referal.totalReferralEarned"),
                              }),
                              Object(c.jsx)("h5", {
                                children: N,
                              }),
                              Object(c.jsx)("p", {
                                class: "mt-4 mb-0",
                                children: t("referal.invited"),
                              }),
                              Object(c.jsx)("h5", {
                                children: W || 0,
                              }),
                            ],
                          }),
                          Object(c.jsxs)("div", {
                            class: "col",
                            children: [
                              Object(c.jsx)("p", {
                                class: "mt-4 mb-0",
                                children: t("referal.totalReferralWithdrawn"),
                              }),
                              Object(c.jsx)("h5", {
                                children: x || 0,
                              }),
                            ],
                          }),
                          Object(c.jsx)("div", {
                            class: "col",
                            children: Object(c.jsxs)("p", {
                              class: "mt-4 mb-0",
                              children: [
                                t("referal.earnForPromotionBNBstake"),
                                Object(c.jsx)("br", {}),
                                Object(c.jsx)("br", {}),
                                t("referal.youWillReceive"),
                                Object(c.jsx)("br", {}),
                                Object(c.jsx)("br", {}),
                                Object(c.jsx)("b", {
                                  children: t("referal.b1"),
                                }),
                                " ",
                                t("referal.p1"),
                                "s",
                                Object(c.jsx)("br", {}),
                                Object(c.jsx)("b", {
                                  children: t("referal.b2"),
                                }),
                                " ",
                                t("referal.p2"),
                                Object(c.jsx)("br", {}),
                                Object(c.jsx)("b", {
                                  children: t("referal.b3"),
                                }),
                                " ",
                                t("referal.p3"),
                                Object(c.jsx)("br", {}),
                                Object(c.jsx)("br", {}),
                                Object(c.jsx)("i", {
                                  children: t("referal.i"),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        k = a(53),
        T = a.n(k),
        P = new j.a(j.a.givenProvider || "http://localhost8545"),
        R = function (e) {
          var t = e.data,
            a = e.calCulatePercentage;
          switch (t.plan) {
            case "0":
            case "3":
              (t.newFinish = T.a.unix(t.start).add(14, "days").format("D MMM")),
                (t.progress = a(t.start, "", 14));
              break;
            case "1":
            case "4":
              (t.newFinish = T.a.unix(t.start).add(21, "days").format("D MMM")),
                (t.progress = a(t.start, "", 21));
              break;
            case "2":
            case "5":
              (t.newFinish = T.a.unix(t.start).add(28, "days").format("D MMM")),
                (t.progress = a(t.start, "", 28));
          }
          return Object(c.jsx)("div", {
            className: "col-sm-12 col-lg-4 pb-3",
            children: Object(c.jsxs)("div", {
              className: "plan-box p-3",
              children: [
                Object(c.jsxs)("div", {
                  className:
                    "d-flex justify-content-between align-items-start mb-2",
                  children: [
                    Object(c.jsxs)("div", {
                      children: [
                        Object(c.jsxs)("span", {
                          className:
                            "stake-small-text stake-bg-color rounded d-block text-center px-1",
                          children: ["plan ", +t.plan + 1],
                        }),
                        Object(c.jsxs)("span", {
                          className: "stake-small-text",
                          children: [+t.percent / 10, "%"],
                        }),
                      ],
                    }),
                    Object(c.jsx)("span", {
                      className: "stake-small-text stake-bg-color rounded px-1",
                      children: "active",
                    }),
                    Object(c.jsxs)("div", {
                      className: "stake-small-text",
                      children: [
                        T.a.unix(t.start).format("D MMM"),
                        " ",
                        "->",
                        " ",
                        Object(c.jsx)("br", {}),
                        " ",
                        t.newFinish,
                      ],
                    }),
                  ],
                }),
                Object(c.jsxs)("div", {
                  className: "d-flex justify-content-between",
                  children: [
                    Object(c.jsxs)("div", {
                      children: [
                        Object(c.jsx)("h1", {
                          className: "mb-0",
                          style: {
                            fontSize: t.amount < 0.1 ? 30 : "",
                          },
                          children: parseFloat(
                            P.utils.fromWei(t.amount)
                          ).toFixed(t.amount < 0.1 ? 4 : 2),
                        }),
                        Object(c.jsx)("span", {
                          className: "stake-small-text text-danger",
                          children: "BNB",
                        }),
                      ],
                    }),
                    Object(c.jsxs)("div", {
                      children: [
                        Object(c.jsx)("h1", {
                          className: "mb-0",
                          children: parseFloat(
                            P.utils.fromWei(t.profit)
                          ).toFixed(2),
                        }),
                        Object(c.jsx)("span", {
                          className:
                            "stake-small-text text-danger d-block text-right",
                          children: "BNB",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(c.jsx)("div", {
                  class: "progress",
                  style: {
                    marginTop: 10,
                  },
                  children: Object(c.jsxs)("div", {
                    class: "progress-bar",
                    role: "progressbar",
                    style: {
                      width: "".concat(t.progress, "%"),
                      color: 0 === t.progress && "black",
                    },
                    "aria-valuenow": t.progress,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    children: [t.progress.toFixed(1), "%"],
                  }),
                }),
              ],
            }),
          });
        },
        F = function (e) {
          var t = e.t,
            a = e.mincontract,
            n = e.Useraccount,
            r = s.a.useState([]),
            i = Object(l.a)(r, 2),
            o = i[0],
            d = i[1],
            b = (function () {
              var e = Object(u.a)(
                p.a.mark(function e() {
                  var t, s, r, i;
                  return p.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = []),
                            (e.next = 3),
                            a.methods.getUserAmountOfDeposits(n).call()
                          );
                        case 3:
                          if (!(s = e.sent)) {
                            e.next = 14;
                            break;
                          }
                          r = 0;
                        case 6:
                          if (!(r < s)) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (e.next = 9),
                            a.methods.getUserDepositInfo(n, r).call()
                          );
                        case 9:
                          (i = e.sent) && t.push(i);
                        case 11:
                          r++, (e.next = 6);
                          break;
                        case 14:
                          t.length && d(t);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          s.a.useEffect(
            function () {
              a && b();
            },
            [a]
          );
          var j = function (e, t, a) {
            var n = T.a.unix(e),
              s = new Date(),
              r = Math.round(Math.abs((n - s) / 864e5));
            return r <= a ? (100 / a) * r : 100;
          };
          return Object(c.jsxs)(c.Fragment, {
            children: [
              Object(c.jsx)("div", {
                className: "mb-4 ",
                children: Object(c.jsx)("h2", {
                  children: t("footer.yourStake"),
                }),
              }),
              Object(c.jsx)("div", {
                className: "row",
                children:
                  o &&
                  o.map(function (e, t) {
                    return Object(c.jsx)(R, {
                      data: e,
                      calCulatePercentage: j,
                    });
                  }),
              }),
            ],
          });
        },
        S = a(497);
      var A = function (e) {
          var t = e.mincontract,
            a = e.Useraccount,
            n = e.connectTotheWallet,
            r = s.a.useState("English"),
            i = Object(l.a)(r, 2),
            d = i[0],
            p = i[1],
            u = s.a.useState("en"),
            b = Object(l.a)(u, 2),
            j = (b[0], b[1]),
            h = Object(S.a)(),
            f = h.i18n,
            x = h.t,
            y = s.a.useState("/media/Britain.svg"),
            v = Object(l.a)(y, 2),
            w = v[0],
            B = v[1];
          return (
            s.a.useEffect(function () {
              var e = window.location.href;
              if (e.includes("?lang")) {
                var t = e.split("?lang=")[1];
                switch ((j(t), f.changeLanguage(t), t)) {
                  case "en":
                    return p("English"), B("/media/Britain.svg");
                  case "fr":
                    return p("Fran\xe7aise"), B("/media/French.svg");
                  case "ch":
                    return p("\u4e2d\u6587"), B("/media/China.svg");
                  case "ar":
                    return p("\u0639\u0631\u0628\u064a"), B("/media/Arab.svg");
                  case "jp":
                    return p("\u65e5\u672c\u8a9e"), B("/media/Japan.svg");
                  case "kr":
                    return p("\ud55c\uad6d\uc5b4"), B("/media/Korea.svg");
                  case "ru":
                    return (
                      p("\u0420\u0443\u0441\u0441\u043a\u0438\u0439"),
                      B("/media/Russia.svg")
                    );
                  case "es":
                    return p("Espa\xf1ol"), B("/media/Spain.svg");
                }
              }
            }, []),
            s.a.useEffect(function () {
              if (window.location.href.includes("?ref=")) {
                var e = window.location.href.split("?ref=")[1];
                console.log(e, "getAddress");
                var t = e.slice(0, 42);
                localStorage.setItem("BNB_STACK", t);
              }
            }, []),
            s.a.useEffect(function () {
              void 0 === a && window.location.reload();
            }, []),
            Object(c.jsx)("div", {
              id: "root",
              children: Object(c.jsxs)("div", {
                class: "container",
                children: [
                  Object(c.jsx)(o, {
                    t: x,
                    name: d,
                    selectedImg: w,
                    mincontract: t,
                    Useraccount: a,
                    connectTotheWallet: n,
                  }),
                  Object(c.jsx)(m, {
                    t: x,
                    mincontract: t,
                    Useraccount: a,
                  }),
                  Object(c.jsx)(O, {
                    t: x,
                    mincontract: t,
                    Useraccount: a,
                  }),
                  Object(c.jsx)(N, {
                    t: x,
                    mincontract: t,
                    Useraccount: a,
                  }),
                  Object(c.jsx)(F, {
                    t: x,
                    mincontract: t,
                    Useraccount: a,
                  }),
                  Object(c.jsx)(g, {
                    t: x,
                  }),
                  Object(c.jsx)("div", {
                    class: "Toastify",
                  }),
                ],
              }),
            })
          );
        },
        W = a(496),
        C = a(113),
        D = a(210),
        E = a(41),
        M = a(211),
        U = a(212),
        G = a(213),
        I = a(214),
        z = a(215),
        L = a(216),
        _ = a(217),
        q = a(218),
        J = a(219);
      C.a
        .use(M.a)
        .use(D.a)
        .use(E.e)
        .init({
          resources: {
            en: G,
            es: U,
            jp: I,
            kr: z,
            ru: L,
            ar: _,
            ch: q,
            fr: J,
          },
          lng: "en",
          fallbackLng: "en",
        });
      var H = C.a,
        V = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 498))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  s = t.getFCP,
                  r = t.getLCP,
                  i = t.getTTFB;
                a(e), n(e), s(e), r(e), i(e);
              });
        },
        K = (a(491), a(112)),
        Y = new j.a(j.a.givenProvider || "ws://localhost:8545");

      function X() {
        var e,
          t = s.a.useState(""),
          a = Object(l.a)(t, 2),
          r = a[0],
          i = a[1],
          o = s.a.useState(),
          d = Object(l.a)(o, 2),
          b = d[0],
          f = d[1];
        Object(n.useEffect)(function () {
          function e() {
            return (e = Object(u.a)(
              p.a.mark(function e() {
                var t;
                return p.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        "undefined" !== typeof window.ethereum &&
                          (t = setInterval(
                            Object(u.a)(
                              p.a.mark(function e() {
                                var a, n;
                                return p.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), Y.eth.getAccounts()
                                        );
                                      case 2:
                                        (a = e.sent) &&
                                          (i(a[0]),
                                          (n = new Y.eth.Contract(
                                            K,
                                            h.contractAddress
                                          )),
                                          f(n)),
                                          clearInterval(t);
                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            ),
                            500
                          ));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          !(function () {
            e.apply(this, arguments);
          })();
        }, []),
          s.a.useLayoutEffect(function () {}, []);
        var m = (function () {
          var t = Object(u.a)(
            p.a.mark(function t() {
              return p.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      try {
                        (function () {
                          var t = Object(u.a)(
                            p.a.mark(function t() {
                              return p.a.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      window.ethereum.on(
                                        "accountsChanged",
                                        function (t) {
                                          (e = j.a.utils.toChecksumAddress(
                                            t[0]
                                          )),
                                            i(e);
                                        }
                                      );
                                    case 1:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()();
                      } catch (a) {}
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
        return (
          s.a.useLayoutEffect(
            function () {
              m();
            },
            [e]
          ),
          Object(c.jsxs)("div", {
            children: [
              Object(c.jsx)(y.a, {
                position: "top-right",
                autoClose: 2e3,
                hideProgressBar: !1,
                newestOnTop: !1,
                closeOnClick: !0,
                rtl: !1,
                pauseOnFocusLoss: !0,
                draggable: !0,
                pauseOnHover: !0,
              }),
              Object(c.jsx)(A, {
                mincontract: b && b,
                Useraccount: r && r,
                connectTotheWallet: function () {
                  function e() {
                    return (e = Object(u.a)(
                      p.a.mark(function e() {
                        var t;
                        return p.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                window.ethereum && window.ethereum.enable(),
                                  "undefined" !== typeof window.ethereum &&
                                    (t = setInterval(
                                      Object(u.a)(
                                        p.a.mark(function e() {
                                          var a, n;
                                          return p.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    window.ethereum.request({
                                                      method:
                                                        "eth_requestAccounts",
                                                    })
                                                  );
                                                case 2:
                                                  (a = e.sent) &&
                                                    (i(a[0]),
                                                    (n = new Y.eth.Contract(
                                                      K,
                                                      h.contractAddress
                                                    )),
                                                    f(n)),
                                                    clearInterval(t);
                                                case 5:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      ),
                                      500
                                    ));
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )).apply(this, arguments);
                  }
                  !(function () {
                    e.apply(this, arguments);
                  })();
                },
              }),
            ],
          })
        );
      }
      i.a.render(
        Object(c.jsx)(W.a, {
          i18n: H,
          children: Object(c.jsx)(X, {}),
        }),
        document.getElementById("root")
      ),
        V();
    },
  },
  [[492, 1, 2]],
]);
//# sourceMappingURL=main.faa9adcf.chunk.js.map
