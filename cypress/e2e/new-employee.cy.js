import loginAdmin from "../support/page-object/loginAdmin";

describe("Verify Create New Employee Functionality", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Success create new employee with valid fields", () => {
    loginAdmin.inputEmailTextbox("admin@mail.com");
    loginAdmin.inputPasswordTexbox("demo");
    loginAdmin.clickAdminButton();
    cy.get(".treeview:nth-child(2) span:nth-child(2)").click();
    cy.get(".menu-open li:nth-child(1) > a").click();
    cy.get("#name").type("Adot");
    cy.get("#email").type("adot2@mail.com");
    cy.get("#contact_no_one").type("0858112233");
    cy.get("#gender").select("Male");
    cy.get("#datepicker4").type("2025-03-24");
    cy.get("#present_address").type("Bekasi");
    cy.get("#designation_id").select("CFO");
    cy.get(".form-group:nth-child(13) > #joining_position").select("Texas");
    cy.get(".form-group:nth-child(15) > #joining_position").select("ayman");
    cy.get("#marital_status").select("Single");
    cy.get("#datepicker").clear().type("1990-07-20");
    cy.get("label:nth-child(20)").click();
    cy.get("#role").select("Employee");
    cy.get(".btn-primary").click();
    cy.get("#notification_box").should("be.visible").should("contain", "Add successfully.");
  });

  it.only("Fail create new employee with invalid email", () => {
    loginAdmin.inputEmailTextbox("admin@mail.com");
    loginAdmin.inputPasswordTexbox("demo");
    loginAdmin.clickAdminButton();
    cy.get(".treeview:nth-child(2) span:nth-child(2)").click();
    cy.get(".menu-open li:nth-child(1) > a").click();
    cy.get("#name").type("Adat");
    cy.get("#email").type("adat2#mailcom");
    cy.get("#contact_no_one").type("0858112233");
    cy.get("#gender").select("Male");
    cy.get("#datepicker4").type("2025-03-24");
    cy.get("#present_address").type("Bekasi");
    cy.get("#designation_id").select("CFO");
    cy.get(".form-group:nth-child(13) > #joining_position").select("Texas");
    cy.get(".form-group:nth-child(15) > #joining_position").select("ayman");
    cy.get("#marital_status").select("Single");
    cy.get("#datepicker").clear().type("1990-07-20");
    cy.get("label:nth-child(20)").click();
    cy.get("#role").select("Employee");
    cy.get(".btn-primary").click();
    cy.get(".help-block > strong").should("be.visible").should("contain", "The email must be a valid email address.");
  });
});
