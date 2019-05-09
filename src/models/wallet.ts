export class Wallet {
  constructor(
    public address: string,
    public privateKey: string,
    public publicKey: string,
    public alias: string) { }
}