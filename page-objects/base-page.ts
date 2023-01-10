const { Builder, By, until, WebDriverWait } = require("selenium-webdriver");

export class BasePage {
  webdriver: typeof Builder;
  constructor(driver: typeof Builder) {
    driver
      ? (this.webdriver = driver)
      : (this.webdriver = new Builder().forBrowser("chrome").build());
    this.webdriver.manage().window().maximize();
  }

  async setDriverTimeout() {
    await this.webdriver.manage().setTimeouts({ implicit: 60000 });
  }

  async getCurrentUrl() {
    return await this.webdriver.getCurrentUrl();
  }

  async killWebdriver() {
    await this.webdriver.quit();
  }

  async clickButton(button: typeof By) {
    return await this.webdriver.findElement(button).click();
  }

  async inputData(data: string, inputField: typeof By) {
    return await this.webdriver.findElement(inputField).sendKeys(data);
  }

  async findElements(elem: typeof By) {
    return await this.webdriver.findElements(elem);
  }
}

module.exports = { By, BasePage, until, Builder };
