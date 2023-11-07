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

export interface DAppsConfig extends WalletConfig {
  link: string,
  background: string,
  categoryLabel: string,
  description: string,
  sortPriority: number,
}

export function isBlockchainConfigArr(arr: any[]): arr is BlockchainConfig[] {
  return arr[0] && "label" in arr[0] && "logo" in arr[0] && "category" in arr[0];
}

export function isValidatorConfig(item: any): item is ValidatorConfig {
  return item && "label" in item && "logo" in item && "link" in item;
}
