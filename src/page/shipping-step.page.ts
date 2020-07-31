import { $, ElementFinder, browser } from 'protractor';

export class ShippingStepPage {
  private acceptTerms: ElementFinder;
  private checkout: ElementFinder;

  constructor () {
    this.acceptTerms = $('#cgv');
    this.checkout = $('#form > p > button > span');
  }

  public async confirmShipping(): Promise<void> {
    await this.acceptTerms.click();
    await(browser.sleep(3000));
    await this.checkout.click();
  }
}
