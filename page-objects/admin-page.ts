const { BasePage, By, Builder } = require("./base-page");

export class AdminPage extends BasePage {
  adminButton: typeof By;
  userManagementTopbar: typeof By;
  userDropdownItem: typeof By;
  addButton: typeof By;
  usernameInputField: typeof By;
  searchButton: typeof By;
  resetButton: typeof By;
  searchResultSpan: typeof By;
  deleteUserItem: typeof By;
  deleteButton: typeof By;
  confirmDeleteButton: typeof By;
  constructor(driver: typeof Builder) {
    super(driver);
    this.adminButton = By.xpath(
      '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a'
    );
    this.userManagementTopbar = By.xpath(
      '//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span'
    );
    this.userDropdownItem = By.xpath(
      '//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/ul/li/a'
    );
    this.addButton = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button'
    );
    this.usernameInputField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input'
    );
    this.searchButton = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]'
    );
    this.searchResultSpan = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/span'
    );
    this.deleteUserItem = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div'
    );
    this.deleteButton = By.css(".bi-trash");
    this.confirmDeleteButton = By.xpath(
      '//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]'
    );
    this.resetButton = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[1]'
    );
  }

  async goToAddUserForm() {
    await this.clickButton(this.adminButton);
    await this.clickButton(this.userManagementTopbar);
    await this.clickButton(this.userDropdownItem);
    await this.clickButton(this.addButton);
  }

  async checkByUsername(username: string) {
    await this.inputData(username, this.usernameInputField);
    await this.clickButton(this.searchButton);
    await this.webdriver.sleep(1000);
    const result = await this.webdriver
      .findElement(this.searchResultSpan)
      .getText();
    await this.clickButton(this.resetButton);
    return !(result === "No Records Found");
  }

  async deleteUser(username: string) {
    await this.inputData(username, this.usernameInputField);
    await this.clickButton(this.searchButton);
    await this.webdriver.sleep(3000);
    const deleteUser = await this.webdriver.findElement(this.deleteUserItem);
    const deleteButton = await deleteUser.findElement(this.deleteButton);
    await deleteButton.click();
    await this.clickButton(this.confirmDeleteButton);
  }
}

module.exports = { AdminPage };
