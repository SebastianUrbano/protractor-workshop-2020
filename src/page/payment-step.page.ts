import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payment: ElementFinder;

  constructor () {
    this.payment = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async confirmPayment(): Promise<void> {
    await this.payment.click();
  }
}
