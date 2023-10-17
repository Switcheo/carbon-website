import CarbonHubIcon from "@carbon-info/assets/icons/carbonHub.svg";
import CarbonscanIcon from "@carbon-info/assets/icons/carbonscan.svg";
import DemexIcon from "@carbon-info/assets/icons/demex.svg";
import DomexIcon from "@carbon-info/assets/icons/domex.svg";
import HydrogenIcon from "@carbon-info/assets/icons/hydrogen.svg";
import NitronIcon from "@carbon-info/assets/icons/nitron.svg";
import { Path } from "@carbon-info/constants";
import { CarbonHubBg, CarbonscanBg, DemexBg, HydrogenBg, NitronBg } from "./assets/background";

export interface WalletConfig {
  label: string,
  logo: string,
}
export interface BlockchainConfig extends WalletConfig {
  category: string,
}


export interface ValidatorConfig extends WalletConfig {
  link: string,
  sortPriority: number,
}

export function isBlockchainConfigArr(arr: any[]): arr is BlockchainConfig[] {
  return arr[0] && "label" in arr[0] && "logo" in arr[0] && "category" in arr[0];
}

export function isValidatorConfig(item: any): item is ValidatorConfig {
  return item && "label" in item && "logo" in item && "link" in item;
}

export interface DAppsConfig {
  icon: string,
  name: string,
  description: string,
  tag: string,
  ctaLink: string,
  backgroundImage?: string,
  category: string,
}

export const allDApps: DAppsConfig[] = [{
  icon: DemexIcon,
  name: "Demex",
  description: "Demex is a central limit order book decentralized exchange that offers all types of crypto derivative trading including spot, futures, perpetuals, and more!",
  tag: "DEX",
  ctaLink: Path.Footer.Demex,
  backgroundImage: DemexBg,
  category: "Carbon Core",
}, {
  icon: NitronIcon,
  name: "Nitron",
  description: "Nitron is a lending and borrowing platform that allows you to leverage and earn yield on idle assets while minting our overcollateralized native stablecoin.",
  tag: "Lending",
  ctaLink: Path.Footer.Nitron,
  backgroundImage: NitronBg,
  category: "Carbon Core",
}, {
  icon: CarbonHubIcon,
  name: "Carbon Hub",
  description: "Carbon Hub is an all-in-one platform that allows you to bridge, migrate and stake your SWTH tokens while learning more about the ecosystem.",
  tag: "Staking",
  ctaLink: Path.Footer.CarbonHub,
  backgroundImage: CarbonHubBg,
  category: "Carbon Core",
}, {
  icon: CarbonscanIcon,
  name: "Carbonscan",
  description: "Carbonscan is a blockchain explorer that tracks all transactions performed natively on Carbon which include assets on any market, pool or trade executed.",
  tag: "Explorer",
  ctaLink: Path.Footer.CarbonScan,
  backgroundImage: CarbonscanBg,
  category: "Carbon Core",
}, {
  icon: HydrogenIcon,
  name: "Hydrogen",
  description: "Hydrogen is a cross-chain blockchain relayer and explorer that allows you to track all transactions that go through Carbon.",
  tag: "Bridge Relayer",
  ctaLink: Path.Footer.Hydrogen,
  backgroundImage: HydrogenBg,
  category: "Carbon Core",
}, {
  icon: DomexIcon,
  name: "Domex",
  description: "Domex is a decentralized AMM exchange that allows traders to trade with high capital efficiency through the use of concentrated liquidity pools.",
  tag: "DEX",
  ctaLink: Path.Footer.Hydrogen,
  category: "Carbon EVM", 
  // TODO : add background picture + link once its live
}];
