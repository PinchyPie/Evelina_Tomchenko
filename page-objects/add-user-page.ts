const { BasePage, By, until, Builder } = require("./base-page");

export class AddUserPage extends BasePage {
  userRoleSelector: typeof By;
  selectorItem: typeof By;
  statusSelector: typeof By;
  nameInputField: typeof By;
  foundNamesItems: typeof By;
  usernameInputField: typeof By;
  passwordInputField: typeof By;
  confirmPasswordInputField: typeof By;
  saveButton: typeof By;
  constructor(driver: typeof Builder) {
    super(driver);
    this.userRoleSelector = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div'
    );
    this.selectorItem = By.css(".oxd-select-option");
    this.statusSelector = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div'
    );
    this.nameInputField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input'
    );
    this.foundNamesItems = By.xpath("//span[.='Odis  Adalwin']");
    this.usernameInputField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input'
    );
    this.passwordInputField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input'
    );
    this.confirmPasswordInputField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input'
    );
    this.saveButton = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]'
    );
  }

  async addUser(name: string, username: string, password: string) {
    await this.clickButton(this.userRoleSelector);
    let selectorItems = await this.findElements(this.selectorItem);
    await selectorItems[2].click();

    await this.clickButton(this.statusSelector);
    selectorItems = await this.findElements(this.selectorItem);
    await selectorItems[1].click();

    await this.inputData(name, this.nameInputField);
    await this.clickButton(this.foundNamesItems);

    await this.inputData(username, this.usernameInputField);

    await this.inputData(password, this.passwordInputField);
    await this.inputData(password, this.confirmPasswordInputField);

    await this.webdriver.sleep(1000);
    await this.clickButton(this.saveButton);
    await this.webdriver.wait(
      until.urlIs(
        "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
      )
    );
  }
}

module.exports = { AddUserPage };
