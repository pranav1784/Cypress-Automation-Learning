///  <reference types="Cypress"/>
//Test case is called spec in cypress
describe("My Second Test Suite", function () {
  it("My Fourth Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
    cy.get("#alertbtn").click()
    cy.get("[value='Confirm']").click()
    //cypress auto accepts alerts
    //If want to validate the text of the alerts we have to use events in cypress like they are below
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      )
    })
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?")
    })
  })
})
