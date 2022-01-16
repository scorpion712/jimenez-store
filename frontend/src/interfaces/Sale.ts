import { IProduct } from "./Product";

export interface ISale {
    id: string;
    date: Date; 
    products: IProduct[];
    client?: string;
  }