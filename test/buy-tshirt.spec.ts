import { browser } from 'protractor';
import { MenuContentPage, AddressStepPage, BankPaymentPage, OrderSummaryPage, PaymentStepPage,
ProductAddedModalPage, ProductListPage, ShippingStepPage, SignInStepPage, SummaryStepPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const email: string = 'aperdomobo@gmail.com';
  const password: string = 'WorkshopProtractor';
  const signInStepPage: SignInStepPage = new SignInStepPage(email, password);
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();

    await(browser.sleep(3000));
    await productListPage.checkProductList();

    await(browser.sleep(3000));
    await productAddedModalPage.addProduct();

    await(browser.sleep(3000));
    await summaryStepPage.goToSummary();

    await(browser.sleep(3000));
    await signInStepPage.goToSignIn();

    await(browser.sleep(3000));
    await addressStepPage.confirmAddress();

    await(browser.sleep(3000));
    await shippingStepPage.confirmShipping();

    await(browser.sleep(3000));
    await paymentStepPage.confirmPayment();

    await(browser.sleep(3000));
    await bankPaymentPage.goToBank();

    await(browser.sleep(3000));
    await expect(orderSummaryPage.confirm()).toBe('Your order on My Store is complete.');
  });
});
