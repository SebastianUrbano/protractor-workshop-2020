import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private productAdd: ElementFinder;

  constructor () {
    this.productAdd = $('[style*="display: block;"] .button-container > a');
  }

  public async addProduct(): Promise<void> {
    await this.productAdd.click();
  }
}
