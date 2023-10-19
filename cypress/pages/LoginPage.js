import HomePage from "./HomePage";

class LoginPage {
  #textBoxUserName = "input[name='username']";
  #textBoxPassword = "input[name='password']";
  #btnLogin = "button[type='submit']";

  // #loginPageElements = {
  //   textBoxUserName: "input[name='username']",
  //   textBoxPassword: "input[name='password']",
  //   btnLogin: "button[type='submit']",
  // };

  performLoginToApplication(username, password) {
    cy.get(this.#textBoxUserName).type(username);
    cy.get(this.#textBoxPassword).type(password);
    cy.get(this.#btnLogin).click();
    return new HomePage();
  }
  openUrl() {
    cy.visit(Cypress.env("URL"));
    return this;
  }
}

export default LoginPage;
