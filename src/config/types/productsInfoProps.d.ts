export interface IProducts {
  productId: string;
  productName: string;
  time: string;
  navps: number;
  mer: number;
  accumulatedMER: number;
}

export interface IProductDetailsData {
  product: string;
  time: string;
  sentinelId: string;
  assetValue: number;
  mer: number;
  accumulatedMER: number;
  currentTotalShare: number;
  gav: number;
  gavps: number;
  nav: number;
  navps: number;
  withdrawAmount: number;
  withdrawCount: number;
  depositAmount: number;
  depositCount: number;
  currentPerformance: number;
  clientsAmount?: number;
}

export interface IProductDetails {
  name: string;
  data: IProductDetailsData;
}

export interface IProductInfoComposition {
  exchange: string;
  instrument: string;
  balances: {
    asset: string;
    available: number;
    total: number;
  }[];
  prices: {
    asset: string;
    price: number;
  }[];
  deposits: {
    asset: string;
    creationTime: number;
    amount: number;
    date: string;
  }[];
  withdrawals: {
    asset: string;
    creationTime: number;
    amount: number;
    date: string;
  }[];
}

export interface IFundTransactions {
  clientId: number;
  type: 'Withdraw' | 'Deposit';
  value: number;
  quote: string;
  time: string;
  status: string;
}

export interface IProductInfoData {
  allEntries: IFundTransactions[];
  assetValue: number;
  currentAccumulatedMER: number;
  currentTotalShare: number;
  equity: number;
  gav: number;
  gavps: number;
  mer: number;
  nav: number;
  navps: number;
  newAccumulatedMER: number;
  productInfo: IProductInfoComposition[];
  timeSentinel: string;
  performance?: number;
  depositCount?: number;
  withdrawCount?: number;
  depositAmount?: number;
  withdrawAmount?: number;
  values: {
    value: number;
    asset: string;
  }[];
}

export interface IProductInfo {
  name: string;
  id: string;
  data: IProductInfoData;
}

export interface IProductInfoEntries {
  id: string;
  product: string;
  value: number;
  shares: number;
  quote: string;
  time: string;
  processingDate: string;
  type: string;
  clientId: number;
  status: string;
  partiallyProcessedValue: number;
  idADMProcessed: string;
  allocation?: number;
}

export interface IClientSharesInProduct {
  name: string;
  amount: number;
}
