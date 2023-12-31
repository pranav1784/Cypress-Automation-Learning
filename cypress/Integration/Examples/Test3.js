///  <reference types="Cypress"/>
//Test case is called spec in cypress
describe("My Second Test Suite", function () {
  it("My third Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
    cy.get("input#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1")
    cy.get("input#checkBoxOption1").uncheck().should("not.be.checked")
    cy.get("input[type='checkbox']").check(["option2", "option3"])

    //static dropdowns
    cy.get("select").select("option2").should("have.value", "option2")

    //Dynamic Dropdown
    cy.get("#autocomplete").type("ind")
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() == "India") {
        cy.wrap($el).click()
      }
    })
    //assertion to check dynamic dropdown is working
    cy.get("#autocomplete").should("have.value", "India")

    //visiblity and invisible elements assertions
    cy.get("#displayed-text").should("be.visible")
    cy.get("#hide-textbox").click()
    cy.get("#displayed-text").should("not.be.visible")
    cy.get("#show-textbox").click()
    cy.get("#displayed-text").should("be.visible")

    //radiobutton check
    cy.get('input[value="radio2"]').check().should("be.checked")
  })
})
