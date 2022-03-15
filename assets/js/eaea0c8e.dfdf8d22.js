"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5456],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||l;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63326:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),r=["components"],i={sidebar_label:"BNB Smart Chain Full Node",hide_table_of_contents:!1,sidebar_position:2},s="How to Run A Fullnode on BNB Smart Chain",d={unversionedId:"validator/fullnode",id:"validator/fullnode",isDocsHomePage:!1,title:"How to Run A Fullnode on BNB Smart Chain",description:"Fullnodes Functions",source:"@site/docs/validator/fullnode.md",sourceDirName:"validator",slug:"/validator/fullnode",permalink:"/docs/validator/fullnode",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/docs/validator/fullnode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BNB Smart Chain Full Node",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"BSC Explorers",permalink:"/docs/BSCexplorers"},next:{title:"Download Blockchain Snapshot",permalink:"/docs/validator/snapshot"}},c=[{value:"Fullnodes Functions",id:"fullnodes-functions",children:[],level:2},{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Suggested Requirements",id:"suggested-requirements",children:[{value:"Fullnode",id:"fullnode",children:[],level:3},{value:"Validator",id:"validator",children:[],level:3}],level:2},{value:"Settings",id:"settings",children:[{value:"Common Problems With Connectivity",id:"common-problems-with-connectivity",children:[],level:3}],level:2},{value:"Chaindata Snapshot",id:"chaindata-snapshot",children:[{value:"Sync Mode",id:"sync-mode",children:[],level:3}],level:2},{value:"Steps to Run a Fullnode",id:"steps-to-run-a-fullnode",children:[{value:"Sync From Snapshot (Recommended)",id:"sync-from-snapshot-recommended",children:[],level:3},{value:"Sync From Genesis Block (Not Recommended)",id:"sync-from-genesis-block-not-recommended",children:[],level:3}],level:2},{value:"Node Maintainence",id:"node-maintainence",children:[{value:"Peer Discovery",id:"peer-discovery",children:[],level:3},{value:"Binary",id:"binary",children:[],level:3},{value:"Storage",id:"storage",children:[],level:3},{value:"Diff Sync",id:"diff-sync",children:[],level:3},{value:"Light Storage",id:"light-storage",children:[],level:3}],level:2},{value:"Upgrade Geth",id:"upgrade-geth",children:[],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-run-a-fullnode-on-bnb-smart-chain"},"How to Run A Fullnode on BNB Smart Chain"),(0,l.kt)("h2",{id:"fullnodes-functions"},"Fullnodes Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stores the full blockchain history on disk and can answer the data request from the network."),(0,l.kt)("li",{parentName:"ul"},"Receives and validates the new blocks and transactions."),(0,l.kt)("li",{parentName:"ul"},"Verifies the states of every accounts.")),(0,l.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,l.kt)("p",null,"We support running a full node on ",(0,l.kt)("inlineCode",{parentName:"p"},"Mac OS X"),"and ",(0,l.kt)("inlineCode",{parentName:"p"},"Linux"),"."),(0,l.kt)("h2",{id:"suggested-requirements"},"Suggested Requirements"),(0,l.kt)("h3",{id:"fullnode"},"Fullnode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X or Linux."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"IMPORTANT")," 2T GB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms. (if start with snap/fast sync, it will need NVMe SSD)"),(0,l.kt)("li",{parentName:"ul"},"16 cores of CPU and 64 gigabytes of memory (RAM)."),(0,l.kt)("li",{parentName:"ul"},"Suggest m5zn.3xlarge instance type on AWS, c2-standard-16 on Google cloud."),(0,l.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of 5 megabyte per second")),(0,l.kt)("h3",{id:"validator"},"Validator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X or Linux."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"IMPORTANT")," 2T GB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms"),(0,l.kt)("li",{parentName:"ul"},"16 cores of CPU and 64 gigabytes of memory (RAM)"),(0,l.kt)("li",{parentName:"ul"},"Suggest m5zn.3xlarge instance type on AWS, or c2-standard-16 on Google cloud."),(0,l.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of 10 megabyte per second")),(0,l.kt)("h2",{id:"settings"},"Settings"),(0,l.kt)("h3",{id:"common-problems-with-connectivity"},"Common Problems With Connectivity"),(0,l.kt)("p",null,"Sometimes you just can\u2019t get synced. The most common reasons are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You have started ",(0,l.kt)("inlineCode",{parentName:"li"},"geth")," without the discovery protocol, you can set the ",(0,l.kt)("inlineCode",{parentName:"li"},"--nodiscover")," parameter to ",(0,l.kt)("inlineCode",{parentName:"li"},"False"),". You only want this if you are running full node with fixed nodes.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update ",(0,l.kt)("inlineCode",{parentName:"li"},"BootstrapNodes"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'BootstrapNodes = ["enode://1cc4534b14cfe351ab740a1418ab944a234ca2f702915eadb7e558a02010cb7c5a8c295a3b56bcefa7701c07752acd5539cb13df2aab8ae2d98934d712611443@52.71.43.172:30311","enode://28b1d16562dac280dacaaf45d54516b85bc6c994252a9825c5cc4e080d3e53446d05f63ba495ea7d44d6c316b54cd92b245c5c328c37da24605c4a93a0d099c4@34.246.65.14:30311","enode://5a7b996048d1b0a07683a949662c87c09b55247ce774aeee10bb886892e586e3c604564393292e38ef43c023ee9981e1f8b335766ec4f0f256e57f8640b079d5@35.73.137.11:30311"]\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"Static nodes"))),(0,l.kt)("p",null,"Geth also supports a feature called static nodes if you have certain peers you always want to connect to. Static nodes are re-connected on disconnects. You can configure permanent static nodes by putting something like the following into ",(0,l.kt)("inlineCode",{parentName:"p"},"<datadir>/geth/static-nodes.json"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[\n  "enode://pubkey@ip:port",\n  "enode://cfc556867894dc84707c2ce6290740d6ba112b279217e6db420f215397492a91ef76bbfe18ebd349a09b37fc8bfef5740d2d2335838e063094d5b63c3fd20d8f@34.197.85.99:30311",\n  "enode://7cf68af17a83f925f34eeced2a139b1d11bac03fd2635707e459a821965b5e6016021a43379f24dc428ebcb84b8fb377517dee6ae484cd276a2f9360dac9c183@52.86.7.102:30311",\n  "enode://b2ed83944f4c0e18d6b2f5f6c2e86b0320c10b8a96f897a535b43f25dc625ae739f449765ad86f38a393472638fcef69f30d7af53b02c3545722b1dd6f18f606@34.194.252.9:30311",\n  "enode://42deadff5ff5d97ea4245128952335969fafea6c4ddd05146b3cac125099e1b2d1ea42c8d02c11ee8b5272a75d4f4b9f51a99244fd6daf1c6a1d5017242a3d43@101.36.120.67:30311",\n  "enode://905f585c09b8eed66afdf8a99acdab7487185357f33d5c9fe40332e4aa4a661382b159ffb300b20fbc12e81505505944ac3bfc7e6673b352d01e09f2df8af5bc@152.32.131.34:30311",\n  "enode://e585bafb7ab5a187534d69e84531165e5d4b0ee4f76b21641fe778c53770cd72e1850d44b48ad00c08ca4dc860cd5c5afa04b23a5061303f61d2658b1c48b9b2@152.32.132.171:30311",\n  "enode://8fb5dd1259e0672efb8c141434bf0c24c73b338f7c2da15efc2def7403b952d453814230eeb97f555aaed46ee0b0b6e2a8568b518f88bd328729031746114dd2@3.0.236.154:30311",\n  "enode://8fb5dd1259e0672efb8c141434bf0c24c73b338f7c2da15efc2def7403b952d453814230eeb97f555aaed46ee0b0b6e2a8568b518f88bd328729031746114dd2@3.0.236.154:30311"\n]\n')),(0,l.kt)("p",null,"You can also add static nodes at runtime via the js console using admin.addPeer():"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'admin.addPeer( "enode://8fb5dd1259e0672efb8c141434bf0c24c73b338f7c2da15efc2def7403b952d453814230eeb97f555aaed46ee0b0b6e2a8568b518f88bd328729031746114dd2@3.0.236.154:30311"\n)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"Trusted nodes"))),(0,l.kt)("p",null,"Geth supports trusted nodes that are always allowed to reconnect, even if the peer limit is reached. They can be added permanently via a config file ",(0,l.kt)("inlineCode",{parentName:"p"},"<datadir>/geth/trusted-nodes.json")," or temporary via RPC call."),(0,l.kt)("h2",{id:"chaindata-snapshot"},"Chaindata Snapshot"),(0,l.kt)("p",null,"Please download the chain data ",(0,l.kt)("a",{parentName:"p",href:"./snapshot"},"snapshot")," and extract to your home folder to speed up"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"## Extract the data\nunzip geth.zip -d /NAME_OF_YOUR_HOME/node &\n")),(0,l.kt)("h3",{id:"sync-mode"},"Sync Mode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fast Sync")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"default")," sync mode. Synchronizes a full node doing a fast synchronization by downloading the entire state database, requesting the headers first, and filling in block bodies and receipts afterward. Once the fast sync reaches the best block of the BNB Smart Chain network, it switches to full sync mode."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full Sync")),(0,l.kt)("p",null,"Synchronizes a full node starting at genesis, verifying all blocks and executing all transactions. This mode is a bit slower than the fast sync mode but comes with increased security."),(0,l.kt)("h2",{id:"steps-to-run-a-fullnode"},"Steps to Run a Fullnode"),(0,l.kt)("h3",{id:"sync-from-snapshot-recommended"},"Sync From Snapshot (Recommended)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the pre-build binaries from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/bsc/releases/latest"},"release page")," or follow the instructions below:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/binance-chain/bsc/releases/latest |grep browser_ |grep geth_linux |cut -d\\" -f4)\n# MacOS\nwget   $(curl -s https://api.github.com/repos/binance-chain/bsc/releases/latest |grep browser_ |grep geth_mac |cut -d\\" -f4)\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Download the config files")),(0,l.kt)("p",null,"Download ",(0,l.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"config.toml")," by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'wget   $(curl -s https://api.github.com/repos/binance-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Download snapshot")),(0,l.kt)("p",null,"Download latest snapshot from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc-snapshots"},"Download site"),"\nFollow the guide to structure the files."),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Start a full node")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"geth --config ./config.toml --datadir ./node --diffsync --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,l.kt)("h3",{id:"sync-from-genesis-block-not-recommended"},"Sync From Genesis Block (Not Recommended)"),(0,l.kt)("p",null,"1.Build from source code"),(0,l.kt)("p",null,"Make sure that you have installed ",(0,l.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"Go 1.13+")," and have added ",(0,l.kt)("inlineCode",{parentName:"p"},"GOPATH")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/binance-chain/bsc\n# Enter the folder bsc was cloned into\ncd bsc\n# Compile and install bsc\nmake geth\n")),(0,l.kt)("p",null,"or you can download the pre-build binaries from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc/releases/latest"},"release page")," or follow the instructions below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/binance-chain/bsc/releases/latest |grep browser_ |grep geth_linux |cut -d\\" -f4)\n# MacOS\nwget   $(curl -s https://api.github.com/repos/binance-chain/bsc/releases/latest |grep browser_ |grep geth_mac |cut -d\\" -f4)\n')),(0,l.kt)("p",null,"2.Download the config files"),(0,l.kt)("p",null,"Download ",(0,l.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"config.toml")," by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'## mainet\nwget   $(curl -s https://api.github.com/repos/binance-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n\n## testnet\nwget   $(curl -s https://api.github.com/repos/binance-chain/bsc/releases/latest |grep browser_ |grep testnet |cut -d\\" -f4)\nunzip testnet.zip\n')),(0,l.kt)("p",null,"3.Write genesis state locally"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"geth --datadir node init genesis.json\n")),(0,l.kt)("p",null,"You could see the following output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"INFO [05-19|14:53:17.468] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bsc/node/geth/chaindata cache=16.00MiB handles=16\nINFO [05-19|14:53:17.498] Writing custom genesis block\nINFO [05-19|14:53:17.501] Persisted trie from memory database      nodes=21 size=56.84KiB time=357.915\xb5s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B\nINFO [05-19|14:53:17.502] Successfully wrote genesis state         database=chaindata hash=7d79cc\u2026fb0d1e\nINFO [05-19|14:53:17.503] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bsc/node/geth/lightchaindata cache=16.00MiB handles=16\nINFO [05-19|14:53:17.524] Writing custom genesis block\nINFO [05-19|14:53:17.525] Persisted trie from memory database      nodes=21 size=56.84KiB time=638.396\xb5s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B\nINFO [05-19|14:53:17.528] Successfully wrote genesis state         database=lightchaindata hash=7d79cc\u2026fb0d1e\n")),(0,l.kt)("p",null,"4.Start your fullnode"),(0,l.kt)("p",null,"!!! Note\nBREAKING CHANGE: Non-EIP155 transactions (i.e. transactions which are not replay-protected) are now rejected by the RPC API. You can disable this restriction using the --rpc.allow-unprotected-txs command-line flag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"## start a full node\ngeth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,l.kt)("p",null,"Start a validator node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"## generate the consensus key and input the password\ngeth account new --datadir ./node\necho {your-password} > password.txt\ngeth --config ./config.toml --datadir ./node --syncmode snap -unlock {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock  --cache 8000\n")),(0,l.kt)("p",null,"!!! Note\nBecause the default value of ",(0,l.kt)("inlineCode",{parentName:"p"},"TrieTimeout")," in config.toml is large, it means ",(0,l.kt)("inlineCode",{parentName:"p"},"geth")," will not persist state into database until reach this time threshold, if the node has been force shutdown, it will start syncing from last state which may take long time. The recommended setting for valiidators is ",(0,l.kt)("inlineCode",{parentName:"p"},"TrieTimeout = 100000000000")),(0,l.kt)("p",null,"5.Monitor node status"),(0,l.kt)("p",null,"you can monitor the log from ",(0,l.kt)("inlineCode",{parentName:"p"},"/node/bsc.log")," by default."),(0,l.kt)("h2",{id:"node-maintainence"},"Node Maintainence"),(0,l.kt)("h3",{id:"peer-discovery"},"Peer Discovery"),(0,l.kt)("p",null,"The bootstrap nodes will be enhanced in the short future. So far, a discovery http service will provide some stable public p2p peers for syncing. Please visit ",(0,l.kt)("a",{parentName:"p",href:"https://api.binance.org/v1/discovery/peers"},"https://api.binance.org/v1/discovery/peers")," to get dynamic peer info. You can append the peer info to the ",(0,l.kt)("inlineCode",{parentName:"p"},"StaticNodes")," in the config.toml to enhance the networking of the full nodes. To avoid crowded networking, the discovery service will change the peer info from time to time, try fetch new ones if the connected peers of full node are too few."),(0,l.kt)("h3",{id:"binary"},"Binary"),(0,l.kt)("p",null,"All the clients are suggested to upgrade to the latest release. The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc/releases/latest"},"latest version")," is supposed to be more stable and get better performance."),(0,l.kt)("h3",{id:"storage"},"Storage"),(0,l.kt)("p",null,"According to the test, the performance of a fullnode will degrade when the storage size exceeds 1.5T. We suggest the fullnode always keep light storage by pruning the storage. "),(0,l.kt)("p",null,"How to prune:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Stop the BSC node."),(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"nohup geth snapshot prune-state --datadir {the data dir of your bsc node} &"),". It will take 3-5 hours to finish."),(0,l.kt)("li",{parentName:"ol"},"Start the node once it is done.")),(0,l.kt)("p",null,"The maintainers should always have a few backup nodes."),(0,l.kt)("p",null,"The hardware is also important, ",(0,l.kt)("strong",{parentName:"p"},"make sure the SSD meets: 2T GB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms"),"."),(0,l.kt)("h3",{id:"diff-sync"},"Diff Sync"),(0,l.kt)("p",null,"The diffsync protocol rolled out as a stable feature in release v1.1.5. Diff sync improves the syncing speed by 60%\uff5e70% approximately according to the test. All full nodes are suggested to enable it by adding ",(0,l.kt)("inlineCode",{parentName:"p"},"--diffsync")," in the starting command.  "),(0,l.kt)("h3",{id:"light-storage"},"Light Storage"),(0,l.kt)("p",null,"When the node crashes or been force killed, the node will sync from a block that was a few minutes or a few hours ago. This is because the state in memory is not persisted into the database in real time, and the node needs to replay blocks from the last checkpoint once it start. The replaying time dependents on the configuration ",(0,l.kt)("inlineCode",{parentName:"p"},"TrieTimeout")," in the config.toml.  We suggest you raise it if you can tolerate with long replaying time, so the node can keep light storage."),(0,l.kt)("h2",{id:"upgrade-geth"},"Upgrade Geth"),(0,l.kt)("p",null,"Please read ",(0,l.kt)("a",{parentName:"p",href:"/docs/validator/upgrade-fullnode"},"this guide")))}u.isMDXComponent=!0}}]);