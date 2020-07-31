import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private confirmAddressBtn: ElementFinder;

  constructor () {
    this.confirmAddressBtn = $('#center_column > form > p > button > span');
  }

  public async confirmAddress(): Promise<void> {
    await this.confirmAddressBtn.click();
  }
}
