import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCar: ElementFinder;

  constructor () {
    this.addToCar = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async checkProductList(): Promise<void> {
    await this.addToCar.click();
  }
}
