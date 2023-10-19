import LoginTestData from "../../fixtures/LoginTestData.json";
import LoginPage from "../../pages/LoginPage";

describe("Page object Model Demo Suite", function () {
  it("Login to application test", function () {
    const loginPage = new LoginPage();
    loginPage
      .openUrl()
      .performLoginToApplication(
        LoginTestData.username,
        LoginTestData.password
      );
  });
});
