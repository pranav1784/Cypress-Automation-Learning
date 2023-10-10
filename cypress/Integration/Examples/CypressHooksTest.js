///  <reference types="Cypress"/>
//Test case is called spec in cypress
describe("My Second Test Suite", function () {
  it("My sixth Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get("input[name='name']:nth-child(2)").type("Pranav")
    cy.get("select").select("Female")
  })
})
