import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private accept: ElementFinder;
  private emailCredential: ElementFinder;
  private passwordCredential: ElementFinder;

  private email: string;
  private password: string;

  constructor (email: string, password: string) {
    this.emailCredential = $('#email');
    this.passwordCredential = $('#passwd');
    this.accept = $('#SubmitLogin > span');

    this.email = email;
    this.password = password;
  }

  public async goToSignIn(): Promise<void> {
    await this.emailCredential.sendKeys(this.email);
    await this.passwordCredential.sendKeys(this.password);
    await this.accept.click();
  }
}
