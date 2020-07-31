import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private cart: ElementFinder;

  constructor () {
    this.cart = $('.cart_navigation span');
  }

  public async goToSummary(): Promise<void> {
    await this.cart.click();
  }
}
