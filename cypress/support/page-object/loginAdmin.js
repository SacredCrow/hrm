class loginAdmin {
  email_textbox = 'input[type="email"]';
  password_textbox = 'input[type="password"]';
  admin_button = ".Admin";

  //fungsi login
  inputEmailTextbox(n) {
    cy.get(this.email_textbox).type(n);
  }
  inputPasswordTexbox(n) {
    cy.get(this.password_textbox).type(n);
  }
  clickAdminButton() {
    cy.get(this.admin_button).click();
  }
}
export default new loginAdmin();
