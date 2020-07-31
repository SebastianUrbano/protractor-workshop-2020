import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private card: ElementFinder;

  constructor () {
    this.card = $('#cart_navigation > button > span');
  }

  public async goToBank(): Promise<void> {
    await this.card.click();
  }
}
