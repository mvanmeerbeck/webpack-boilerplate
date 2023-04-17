import { Wallet } from "./wallet";
import { Config } from "./wallet";

export class Eniblock {
  constructor() {
    
  }

  createWallet() {
    return new Wallet();
  }
};

export { Wallet } from "./wallet";
export { Config } from "./wallet";
