export const roadMapItems = [
  {
    title: "Enhance core functions",
    description: "Strengthening Carbon's architecture to power high- performant financial infrastructures.",
    tabs: [
      {
        title: "Stargate",
        description: "Stargate is a set of upgrades by Cosmos that will bring significant performance improvements to protocols in the Tendermint ecosystem. Stargate will enable Carbon to support the Inter-blockchain Communication protocol (IBC) that powers cross-chain transactions, and accelerate blockchain performance and UI development via Protobuf, improving overall composability and interoperability for Carbon.",
        status: "In progress",
        progress: 75,
        link: "https://figment.io/resources/cosmos-stargate-upgrade-overview/",
      },
      {
        title: "AMM incentive improvements",
        description: "Carbon’s AMM module will see incentive improvements that allow liquidity providers to earn boosted rewards on their liquidity by locking up Switcheo tokens (SWTH) instead of LP tokens. Implemented during Switcheo’s v1.9.0 node software upgrade, boosted rewards are additional rewards earned by liquidity providers for committing (i.e. locking up) their LP tokens. The longer the commitment duration, the greater the boost.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Smart accounts (ADR-28)",
        description: "Smart accounts (ADR-28) are simple smart contract modules that allow Carbon to encode standing instructions into an address resulting in specific execution paths. This means that Carbon can send funds into a special account (swth123xyz…) on the protocol which then automatically performs an action or series of actions based on the encoded instructions. This enables trades to be executed even if users do not have an account on Carbon.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "On-chain referral mechanism",
        description: "The on-chain referral mechanism will enable user interfaces (UIs) built on Carbon to attach a referral address which can attract a percentage commission from trading fees. This commission can be earned when the address has been successfully used to generate a new lead for the platform.",
        status: "In progress",
        progress: 70,
        link: "",
      },
    ],
  },
  {
    title: "Attain financial sophistication",
    description: "Supporting every imaginable financial construct.",
    tabs: [
      {
        title: "Cross-margin support",
        description: "Cross-margin capabilities are a feature soon to come to Carbon. It will allow traders to use all available assets in their account as collateral when trading on our derivatives markets, instead of just using a single settlement currency. This can help to reduce the risk of liquidation and be especially beneficial in periods of high volatility.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Multi-collateral positions",
        description: "Multi-collateral positions are an upcoming feature on the Carbon protocol that will enable users to trade derivatives using any underlying asset as margin, beyond just USDC. This means that any other token may be used as collateral to open futures positions, increasing flexibility and capital efficiency for traders.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "AMMs for futures markets",
        description: "An innovation within the DeFi realm, Carbon is one of the first protocols to enable AMM support for futures markets. This enables the trading of futures contracts without the need for a counterparty. The AMMs will utilize the constant value quoting strategy and leveraged vaults can be used to increase the AMM’s efficiency.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Perpetuals markets",
        description: "Soon to be supported on Carbon, perpetual markets are one of the most common derivatives instruments that are native to the crypto landscape. Similar to traditional futures contracts, what sets perpetuals apart is the absence of a settlement or expiry date.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Transferable bonded tokens (bSWTH)",
        description: "Transferable bonded tokens (bSWTH).",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Options markets",
        description: "Options markets are financial instruments that allow traders to hedge risks, exploit opportunities, and improve financial and operational efficiency. Largely helmed by centralized exchanges, Carbon will be one of the first protocols to bring decentralized options to the masses.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Insurance fund bootstrapping",
        description: "Carbon’s insurance fund provides additional protection to assets and prevents the need for auto-deleveraging (ADL) — a form of socialized loss that utilizes trader profits to cover losses caused by other liquidated positions. Powered by Carbon’s layer 2 sidechain, the insurance fund can be bootstrapped from liquidated positions and incentivized contributions from SWTH holders, a mechanism too complex to be adopted by general layer 1 chains.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Collateralized Debt Position",
        description: "CDPs, made popular by the Maker protocol, are permissionless lending mechanisms that require borrowers to deposit crypto assets in return for borrowing another type of asset, such as DAI. This mechanism can be applied to decentralized exchanges to create a stronger demand for their native token while also providing liquidity to the exchange.",
        status: "In progress",
        progress: 85,
        link: "",
      },
    ],
  },
  {
    title: "Expand the ecosystem",
    description: "Creating an integrated system of blockchains, infrastructures and applications.",
    tabs: [
      {
        title: "Gravity bridge",
        description: "Gravity Bridge is a decentralized bridge that connects Ethereum to Cosmos Hub and vice-versa. It enables the two-way transfer between ERC-20 and Cosmos assets, opening the gateway for further cross-chain transactions. By supporting Gravity Bridge on Carbon, platforms and applications integrated with our protocol will be able to enjoy the benefits of interacting with both Cosmos and Ethereum ecosystems in a direct and decentralized manner.",
        status: "In progress",
        progress: 85,
        link: "https://github.com/cosmos/gravity-bridge",
      },
      {
        title: "IBC",
        description: "As its name suggests, Cosmos’ Inter-blockchain Communication (IBC) protocol enables protocols, applications and wallets that utilize Cosmos-SDK to interoperate and communicate with each other seamlessly. By supporting IBC, Carbon will soon be able to interact with ecosystem partners such as ThorChain, Terra and Mirror protocol, opening up a world of possibilities for cross-chain transactions, exchange of data and overall value creation for participating protocols.",
        status: "In progress",
        progress: 85,
        link: "https://blog.cosmos.network/deep-dive-how-will-ibc-create-value-for-the-cosmos-hub-eedefb83c7a0",
      },
      {
        title: "EVM (Web3) support through Ethermint module",
        description: "The Ethereum Virtual Machine (EVM) is a blockchain-based software that allows for anyone to deploy smart contracts and modules in a sandbox environment on the Ethereum blockchain. With EVM (Web3) support on Carbon, we are able to streamline transactions and approvals directly with Web3 without users having to switch between Metamask and other login methods to approve transactions.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Zilliqa Integration",
        description: "Zilliqa is a public blockchain platform with a booming ecosystem of applications and services. Carbon’s integration with Zilliqa will create the ability for Zilliqa assets to transact seamlessly across supported chains on Carbon — including Ethereum, Binance Smart Chain and Neo, and vice-versa. As a derivatives-based trading protocol, Carbon will play a key role in introducing Zilliqa-based derivative products to the ecosystem for the very first time.",
        status: "In progress",
        progress: 70,
        link: "",
      },
      {
        title: "Third-party liquidity aggregation",
        description: "In addition to native liquidity pools, Carbon will tap on third-party platforms such as Uniswap, Kyber Network and THORChain as liquidity backstops to guarantee deep liquidity that facilitates instantaneous trades, low slippage and tight spreads.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "ERC-20 & ICS-20 SWTH",
        description: "As the native token of Carbon, SWTH transacts largely within the protocol. In our vision for truly open finance and accessible markets, creating an ERC-20 and ICS-20 SWTH token standard will enable SWTH to rejoin the broader ecosystem, become a more productive token and significantly broaden the scope of its utility across other DeFi protocols and applications.",
        status: "In progress",
        progress: 50,
        link: "https://etherscan.io/token/0xb4371da53140417cbb3362055374b10d97e420bb",
      },

    ],
  },
  {
    title: "Achieve complete decentralization",
    description: "Becoming fully permissionless and censorship-resistant.",
    tabs: [
      {
        title: "Open-source codebase",
        description: "Open-sourcing the Carbon codebase is central in our mission to achieving true decentralization and subverting authority from any single entity. Anyone will be able to access our codes to develop new applications, wallets, and nodes or integrate existing protocols with Carbon. Coupled with the Switcheo Development Fund, we wish to accelerate the growth of Carbon by encouraging community development in order to create a censorship-resistant, robust and highly secure protocol.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Permissionless token and market listings",
        description: "A key component of any DeFi protocol is the ability to list tokens and markets permissionlessly. Anyone can add liquidity to Carbon's liquidity protocol comprising of an AMM feature for every market. Through Carbon's governance module, anyone will be able to list their desired token or markets instantly, regardless of token popularity or market capital, making Carbon the the go-to Tendermint chain for trading of all kinds of assets.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Incentivized API nodes and UI hosting",
        description: "Having API nodes and user interfaces (UIs) hosted by the wider community is vital in decentralizing the protocol. These distributed development points interact independently with Carbon, safeguarding network stability and security as the protocol will not have to rely on any central entity in order to operate. An incentive mechanism will be implemented to attract developers globally to host their own nodes and launch interfaces on Carbon's cutting-edge blockchain.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Decentralized relayer network (Hydrogen)",
        description: "Relayer networks are systems deployed on top of blockchains like Carbon that facilitate order-matching while ensuring transactions are verified and validated by the network.",
        status: "In progress",
        progress: 85,
        link: "",
      },
      {
        title: "Enable oracle incentives",
        description: "Carbon’s oracles are currently being run by the protocol’s 20 validators who feed external data such as price feeds to the Carbon sidechain. By enabling oracle incentives, Carbon protocol will attract a distributed network of oracle providers that leverage different data sources. Having decentralized oracles are vital to trustlessness, transparency and security of the protocol by ensuring external data being utilized is not centralized and controlled by any single point of authority.",
        status: "In progress",
        progress: 85,
        link: "",
      },
    ],
  },
];

interface Props {
    title: string;
    description: string;
    status: string;
    progress: number;
    link: string;
}

const restructureRoadMapItems = () => {
  let result: Props[] = [];
  roadMapItems.forEach((items) => {
    result = [...result, ...items.tabs];
  });
  return result;
};
export const roadMapAnimationItems = restructureRoadMapItems();