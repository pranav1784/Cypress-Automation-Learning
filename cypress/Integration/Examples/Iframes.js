///  <reference types="Cypress"/>
///<reference types="cypress-iframe"/>
//Test case is called spec in cypress
import "cypress-iframe"
describe("My frames Suite", function () {
  it("Frames Learning", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
    cy.frameLoaded("#courses-iframe")
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2)
  })
})
