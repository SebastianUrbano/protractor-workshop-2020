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

    await menuContentPage.goToTShirtMenu();

    await productListPage.checkProductList();

    await productAddedModalPage.addProduct();

    await summaryStepPage.goToSummary();

    await signInStepPage.goToSignIn();

    await addressStepPage.confirmAddress();

    await shippingStepPage.confirmShipping();

    await paymentStepPage.confirmPayment();

    await bankPaymentPage.goToBank();

    await expect(orderSummaryPage.confirm()).toBe('Your order on My Store is complete.');
  });
});
