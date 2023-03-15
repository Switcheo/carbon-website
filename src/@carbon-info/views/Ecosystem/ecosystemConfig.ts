import CarbonHubIcon from "@carbon-info/assets/icons/carbonHub.svg";
import CarbonscanIcon from "@carbon-info/assets/icons/carbonscan.svg";
import DemexIcon from "@carbon-info/assets/icons/demex.svg";
import HydrogenIcon from "@carbon-info/assets/icons/hydrogen.svg";
import NitronIcon from "@carbon-info/assets/icons/nitron.svg";
import { Path } from "@carbon-info/constants";
import { CarbonHubBg, CarbonscanBg, DemexBg, HydrogenBg, NitronBg } from "./assets/background";
import { Arbitrum, BSC, Comdex, Cosmos, Ethereum, Evmos, Junos, Kujira, Neo, Osmosis, Persistence, Stafi, Stargaze, Stride, Zilliqa } from "./assets/blockchains";
import { AXvalidator, AlphaValidator, Blockhunters, BoraBora, Born2Stake, ChainTools, DegenPower, DevelCo, HuobiPool, Intsol, Mikasa, NeoEconomy, PolarBear, Switcheo } from "./assets/validators";
import { Keplr, Leap, Ledger, Metamask, NeoLine, O3, Station, Trust, WalletConnect, ZilPay } from "./assets/wallets";

export interface WalletConfig {
  icon: string,
  name: string,
}

export interface ValidatorConfig extends WalletConfig {
  votingPower: number,
}

export interface BlockchainConfig extends WalletConfig {
  chain: "IBC" | "EVM" | "Non-EVM" | "Coming",
}

export function isBlockchainConfig(arr: any[]): arr is BlockchainConfig[] {
  return "icon" in arr[0] && "name" in arr[0] && "chain" in arr[0];
}

export interface DAppsConfig {
  icon: string,
  name: string,
  description: string,
  tag: string,
  ctaLink: string,
  backgroundImage?: string,
}

export const allBlockchains: BlockchainConfig[] = [{
  icon: Ethereum,
  name: "Ethereum",
  chain: "EVM",
}, {
  icon: BSC,
  name: "BNB Chain",
  chain: "EVM",
}, {
  icon: Arbitrum,
  name: "Arbitrum",
  chain: "EVM",
}, {
  icon: Neo,
  name: "Neo",
  chain: "Non-EVM",
}, {
  icon: Zilliqa,
  name: "Zilliqa",
  chain: "Non-EVM",
}, {
  icon: Cosmos,
  name: "Cosmos Hub",
  chain: "IBC",
}, {
  icon: Osmosis,
  name: "Osmosis",
  chain: "IBC",
}, {
  icon: Comdex,
  name: "Comdex",
  chain: "IBC",
}, {
  icon: Evmos,
  name: "Evmos",
  chain: "IBC",
}, {
  icon: Junos,
  name: "Junos",
  chain: "IBC",
}, {
  icon: Kujira,
  name: "Kujira",
  chain: "IBC",
}, {
  icon: Persistence,
  name: "Persistence",
  chain: "IBC",
}, {
  icon: Stafi,
  name: "Stafi",
  chain: "IBC",
}, {
  icon: Stargaze,
  name: "Stargaze",
  chain: "IBC",
}, {
  icon: Stride,
  name: "Stride",
  chain: "IBC",
}];

export const allWallets: WalletConfig[] = [{
  icon: Metamask,
  name: "Metamask",
}, {
  icon: Ledger,
  name: "Ledger",
}, {
  icon: Keplr,
  name: "Keplr",
}, {
  icon: Leap,
  name: "Leap",
}, {
  icon: Station,
  name: "Station",
}, {
  icon: Trust,
  name: "Trust",
}, {
  icon: WalletConnect,
  name: "WalletConnect",
}, {
  icon: ZilPay,
  name: "ZilPay",
}, {
  icon: NeoLine,
  name: "NeoLine",
}, {
  icon: O3,
  name: "O3",
}];

export const allValidators: ValidatorConfig[] = [{
  icon: Blockhunters,
  name: "Blockhunters",
  votingPower: 15,
}, {
  icon: Intsol,
  name: "Intsol",
  votingPower: 14,
}, {
  icon: NeoEconomy,
  name: "Neo Economy",
  votingPower: 13,
}, {
  icon: DevelCo,
  name: "Devel & Co",
  votingPower: 12,
}, {
  icon: Switcheo,
  name: "Switcheo",
  votingPower: 11,
}, {
  icon: PolarBear,
  name: "PolarBear",
  votingPower: 10,
}, {
  icon: DegenPower,
  name: "Degen Power",
  votingPower: 9,
}, {
  icon: Born2Stake,
  name: "Born2Stake",
  votingPower: 8,
}, {
  icon: AXvalidator,
  name: "AXvalidator",
  votingPower: 7,
}, {
  icon: Mikasa,
  name: "Mikasa",
  votingPower: 6,
}, {
  icon: ChainTools,
  name: "ChainTools",
  votingPower: 5,
}, {
  icon: AlphaValidator,
  name: "Alpha Validator",
  votingPower: 4,
}, {
  icon: HuobiPool,
  name: "Huobi Pool",
  votingPower: 3,
}, {
  icon: Zilliqa,
  name: "Zilliqa",
  votingPower: 2,
}, {
  icon: BoraBora,
  name: "Bora Bora",
  votingPower: 1,
}];

export const allFeatured: DAppsConfig[] = [{
  icon: DemexIcon,
  name: "Demex",
  description: "Demex is a central limit order book decentralized exchange that offers all types of crypto derivative trading including spot, futures, perpetuals, and more!",
  tag: "DEX",
  ctaLink: Path.Footer.Demex,
  backgroundImage: DemexBg,
}, {
  icon: NitronIcon,
  name: "Nitron",
  description: "Nitron is a lending and borrowing platform that allows you to leverage and earn yield on idle assets while minting our overcollateralized native stablecoin.",
  tag: "Lending",
  ctaLink: Path.Footer.Nitron,
  backgroundImage: NitronBg,
}, {
  icon: CarbonHubIcon,
  name: "Carbon Hub",
  description: "Carbon Hub is an all-in-one platform that allows you to bridge, migrate and stake your SWTH tokens while learning more about the ecosystem.",
  tag: "Staking",
  ctaLink: Path.Footer.CarbonHub,
  backgroundImage: CarbonHubBg,
}, {
  icon: CarbonscanIcon,
  name: "Carbonscan",
  description: "Carbonscan is a blockchain explorer that tracks all transactions performed natively on Carbon which include assets on any market, pool or trade executed.",
  tag: "Explorer",
  ctaLink: Path.Footer.CarbonScan,
  backgroundImage: CarbonscanBg,
}, {
  icon: HydrogenIcon,
  name: "Hydrogen",
  description: "Hydrogen is a cross-chain blockchain relayer and explorer that allows you to track all transactions that go through Carbon.",
  tag: "Bridge Relayer",
  ctaLink: Path.Footer.Hydrogen,
  backgroundImage: HydrogenBg,
}];
