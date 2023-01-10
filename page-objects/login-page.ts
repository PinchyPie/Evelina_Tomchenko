const { BasePage, By, Builder } = require("./base-page");

export class LoginPage extends BasePage {
  usernameInputField: typeof By;
  passwordInputField: typeof By;
  loginButton: typeof By;
  constructor(driver: typeof Builder) {
    super(driver);
    this.usernameInputField = By.xpath(
      '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input'
    );
    this.passwordInputField = By.xpath(
      '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input'
    );
    this.loginButton = By.xpath(
      '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button'
    );
  }

  async getHomepage() {
    await this.webdriver.get(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  async writeUsername(username: string) {
    await this.inputData(username, this.usernameInputField);
  }

  async writePassword(password: string) {
    await this.inputData(password, this.passwordInputField);
  }

  async clickLoginButton() {
    await this.clickButton(this.loginButton);
  }

  getWebdriver() {
    return this.webdriver;
  }
}

module.exports = { LoginPage };
