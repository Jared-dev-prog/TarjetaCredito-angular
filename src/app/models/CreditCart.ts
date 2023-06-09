export class CreditCard {
  id?: string;
  titular: string;
  cardNumber: string;
  expirationDate: string;
  cvv: number;
  creationDate: Date;
  updateDate: Date;

  constructor(
    titular: string,
    cardNumber: string,
    expirationDate: string,
    cvv: number
  ) {
    this.titular = titular;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
    this.creationDate = new Date();
    this.updateDate = new Date();
  }
}
