import { LoginPage } from "../../pages/LoginPage";
import LoginTestData from "../../fixtures/LoginTestData.json";
const loginPage = new LoginPage();

describe("Page object Model Demo Suite", function () {
  it("Login to application test", function () {
    loginPage
      .openUrl()
      .performLoginToApplication(
        LoginTestData.username,
        LoginTestData.password
      );
  });
});
