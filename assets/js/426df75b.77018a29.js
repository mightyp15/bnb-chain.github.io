"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[615],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65141:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={},c="Migration Guide",l={unversionedId:"beaconchain/develop/api-reference/dex-api/migration-guide",id:"beaconchain/develop/api-reference/dex-api/migration-guide",isDocsHomePage:!1,title:"Migration Guide",description:"Target Audience",source:"@site/docs/beaconchain/develop/api-reference/dex-api/migration-guide.md",sourceDirName:"beaconchain/develop/api-reference/dex-api",slug:"/beaconchain/develop/api-reference/dex-api/migration-guide",permalink:"/docs/beaconchain/develop/api-reference/dex-api/migration-guide",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/docs/beaconchain/develop/api-reference/dex-api/migration-guide.md",tags:[],version:"current",frontMatter:{}},p=[{value:"Target Audience",id:"target-audience",children:[],level:2},{value:"Migration of /api/v1/transactions-in-block, /api/v2/transactions-in-block",id:"migration-of-apiv1transactions-in-block-apiv2transactions-in-block",children:[{value:"New API",id:"new-api",children:[],level:3},{value:"Main Strengthens",id:"main-strengthens",children:[],level:3},{value:"Migration Cautions",id:"migration-cautions",children:[],level:3}],level:2},{value:"Migration of /api/v1/transactions",id:"migration-of-apiv1transactions",children:[{value:"New API",id:"new-api-1",children:[],level:3},{value:"Main Strengthens",id:"main-strengthens-1",children:[],level:3},{value:"Migration Cautions",id:"migration-cautions-1",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migration-guide"},"Migration Guide"),(0,r.kt)("h2",{id:"target-audience"},"Target Audience"),(0,r.kt)("p",null,"This guide will help users migrate their existing calls of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.binance.org/api-reference/dex-api/paths.html#apiv1transactions-in-blockblockheight"},"/api/v1/transactions-in-block"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.binance.org/api-reference/dex-api/paths.html#apiv2transactions-in-blockblockheight"},"/api/v2/transactions-in-block"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.binance.org/api-reference/dex-api/paths.html#apiv1transactions"},"/api/v1/transactions")," to the new bock and transaction apis.\nIf you are also using undisclosed apis from ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.binance.org"},"Explorer"),", you can also refer to this document for migration.\nOtherwise, you can skip this document and refer to the api document."),(0,r.kt)("h2",{id:"migration-of-apiv1transactions-in-block-apiv2transactions-in-block"},"Migration of /api/v1/transactions-in-block, /api/v2/transactions-in-block"),(0,r.kt)("h3",{id:"new-api"},"New API"),(0,r.kt)("p",null,"Please call ",(0,r.kt)("a",{parentName:"p",href:"http://api.binance.org/bc/api/v1/blocks/%7Bheight%7D/txs"},"/api/v1/blocks/{blockHeight}/txs")," instead."),(0,r.kt)("h3",{id:"main-strengthens"},"Main Strengthens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The new api can query all historical blocks' transactions, not only blocks in the past 24 hours."),(0,r.kt)("li",{parentName:"ul"},"The rate limit is 1000 requests per ip in 5 minutes, which is much bigger comparing to the rate limits of /api/v1/transactions-in-block, /api/v2/transactions-in-block.")),(0,r.kt)("h3",{id:"migration-cautions"},"Migration Cautions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All the amount/quantity/price/fee will be returned as Long. For converting them to floats (as old response in /api/v1/transactions-in-block, /api/v2/transactions-in-block), you need to divide them by 10e8."),(0,r.kt)("li",{parentName:"ul"},"For the ",(0,r.kt)("em",{parentName:"li"},"data")," field, the response in new api could be different, please refer to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/develop/api-reference/dex-api/block-service-example"},"tx examples")," for more details.")),(0,r.kt)("h2",{id:"migration-of-apiv1transactions"},"Migration of /api/v1/transactions"),(0,r.kt)("h3",{id:"new-api-1"},"New API"),(0,r.kt)("p",null,"Please call ",(0,r.kt)("a",{parentName:"p",href:"http://api.binance.org/bc/api/v1/txs?address=%7Baddress%7D&startTime=%7BstartTime%7D&endTime=%7BendTime%7D"},"/api/v1/txs")," instead."),(0,r.kt)("h3",{id:"main-strengthens-1"},"Main Strengthens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cross chain support",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can search CROSS_TRANSFER_OUT transactions by using BC or BSC addresses."),(0,r.kt)("li",{parentName:"ul"},"You can search CREATE_SIDECHAIN_VALIDATOR, SIDECHAIN_DELEGATE, SIDECHAIN_REDELEGATE, SIDECHAIN_UNBOND transactions by using validator address."))),(0,r.kt)("li",{parentName:"ul"},"Optimization of ",(0,r.kt)("em",{parentName:"li"},"address")," parameter",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can search multi send transfers by any address involved in the transaction."),(0,r.kt)("li",{parentName:"ul"},"You can search HTL_TRANSFER transactions by any address involved in the transaction."))),(0,r.kt)("li",{parentName:"ul"},"Optimization of ",(0,r.kt)("em",{parentName:"li"},"asset")," parameter",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can search NEW_ORDER, CANCEL_ORDER, MINI_TOKEN_LIST, LISTING transactions using base or quote asset."),(0,r.kt)("li",{parentName:"ul"},"You can search SUBMIT_PROPOSAL, SIDE_SUBMIT_PROPOSAL transaction if the related proposal is Listing."),(0,r.kt)("li",{parentName:"ul"},"You can search DEPOSIT_HTL HTL_TRANSFER, SIDE_DEPOSIT, TIME_LOCK, TIME_RELOCK, TRANSFER transactions by any kind of asset involved in the transactions."))),(0,r.kt)("li",{parentName:"ul"},"The rate limit is 500 requests per ip in 5 minutes, which is much bigger comparing to the rate limit of /api/v1/transactions.")),(0,r.kt)("h3",{id:"migration-cautions-1"},"Migration Cautions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some query parameter names changed (e.g., txAsset->asset, txType->type), and some parameters are removed (e.g., blockHeight), please do read the new api docs."),(0,r.kt)("li",{parentName:"ul"},"All the amount/quantity/price/fee will be returned as Long. For converting them to floats (as old response in /api/v1/transactions), you need to divide them by 10e8."),(0,r.kt)("li",{parentName:"ul"},"For the ",(0,r.kt)("em",{parentName:"li"},"data")," field, the response in new api could be different, please refer to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/develop/api-reference/dex-api/block-service-example"},"tx examples")," for more details.")))}d.isMDXComponent=!0}}]);