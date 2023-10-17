export class LoginPage {
  #loginPageElements = {
    textBoxUserName: "input[name='username']",
    textBoxPassword: "input[name='password']",
    btnLogin: "button[type='submit']",
  };

  performLoginToApplication(username, password) {
    cy.get(this.#loginPageElements.textBoxUserName).type(username);
    cy.get(this.#loginPageElements.textBoxPassword).type(password);
    cy.get(this.#loginPageElements.btnLogin).click();
  }
  openUrl() {
    cy.visit(Cypress.env("URL"));
    return this;
  }
}
