import { ShopDetails } from './shop-details';

export interface Item {
  id: string;
  type: string;
  model: string;
  trade: boolean;
  active: boolean;
  status: boolean;
  account: string;
  segment: string;
  eCommerce: boolean;
  collection: boolean;
  registryDate: Date;
  shopDetail: ShopDetails[];
}
