const { LoginPage } = require("../page-objects/login-page");
const { AdminPage } = require("../page-objects/admin-page");
const { AddUserPage } = require("../page-objects/add-user-page");
const { testConstants } = require("./test-constants");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

describe("orangeHRM website testing:", () => {
  let Login: typeof LoginPage;
  let Admin: typeof AdminPage;
  let AddUser: typeof AddUserPage;

  beforeAll(async () => {
    Login = new LoginPage();
    await Login.setDriverTimeout();
    Admin = new AdminPage(Login.getWebdriver());
    AddUser = new AddUserPage(Login.getWebdriver());

    // login before tests
    await Login.getHomepage();
    await Login.writeUsername(testConstants.loginUsername);
    await Login.writePassword(testConstants.loginPassword);
    await Login.clickLoginButton();
  }, 5000);

  afterAll(async () => {
    await Login.killWebdriver();
  });

  it("go to add user form", async () => {
    await Admin.goToAddUserForm();
    const url = await Admin.getCurrentUrl();
    expect(url).toBe(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser"
    );
  });

  it("add user", async () => {
    await AddUser.addUser(
      testConstants.newName,
      testConstants.newUsername,
      testConstants.newPassword
    );
    const result = await Admin.checkByUsername(testConstants.newUsername);
    expect(result).toBe(true);
  });

  it("delete user", async () => {
    await Admin.deleteUser(testConstants.newUsername);
    const result = await Admin.checkByUsername(testConstants.newUsername);
    expect(result).toBe(false);
  });
});
