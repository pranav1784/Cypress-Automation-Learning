///  <reference types="Cypress"/>
//Test case is called spec in cypress
describe("My Second Test Suite", function () {
  it("My hird Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
    cy.get("input#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1")
    cy.get("input#checkBoxOption1").uncheck().should("not.be.checked")
    cy.get("input[type='checkbox']").check(["option2", "option3"])
  })
})
