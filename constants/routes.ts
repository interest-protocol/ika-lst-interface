export enum RoutesEnum {
  Stake = 'stake',
  Pools = 'pools',
  Stats = 'stats',
  Portfolio = 'porfolio',
  DeFi = 'de-fi',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Stake]: '/',
  [RoutesEnum.Pools]: '/pools',
  [RoutesEnum.Stats]: '/stats',
  [RoutesEnum.Portfolio]: '/portfolio',
  [RoutesEnum.DeFi]: '/de-fi',
};
