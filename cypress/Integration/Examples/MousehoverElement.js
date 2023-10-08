///  <reference types="Cypress"/>
//Test case is called spec in cypress
describe("My Second Test Suite", function () {
  it("My sixth Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
    //Even if html elemtn is not visile we can click on it by adding force in click function
    //cypress does not support mouse hover
    cy.contains("Top").click({ force: true })
    cy.url().should("contain", "top")
    //Another method is to show the webelement using jquery invoke to show that element then click on it
    cy.get(".mouse-hover-content").invoke("show")
    cy.contains("Top").click()
    cy.url().should("contain", "top")
  })
})
