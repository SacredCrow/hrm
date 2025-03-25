import loginAdmin from "../support/page-object/loginAdmin";

describe("Verify Login Functionality", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Success login admin with valid account", () => {
    loginAdmin.inputEmailTextbox("admin@mail.com");
    loginAdmin.inputPasswordTexbox("demo");
    loginAdmin.clickAdminButton();
    cy.url("", { timeout: 5000 }).should("include", "/dashboard");
    cy.get("h1").should("contain", "Dashboard");
  });

  it("Fail login admin with invalid account", () => {
    loginAdmin.inputEmailTextbox("admin@mail.com");
    loginAdmin.inputPasswordTexbox("coba");
    loginAdmin.clickAdminButton();
    cy.get("strong").should("be.visible").should("contain", "These credentials do not match our records.");
  });
});
