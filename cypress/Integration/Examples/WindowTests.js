///  <reference types="Cypress"/>
//Test case is called spec in cypress
describe("My Second Test Suite", function () {
  it("My Fifth Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
    //In Cypress if tabs are open in same tab it can handle it but if opened in another tab then it can't handle it
    //Below invoke method is used in jquery which removed target attribute from the a tag so that page opend in the same tab
    //cypress can change the code and do changes in dom
    cy.get("#opentab").invoke("removeAttr", "target").click()
    cy.origin("https://www.qaclickacademy.com/", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click()
      cy.get(".mt-50 h2").should("contain", "QAClick Academy")
      /* If after opening a url in the same tab, that url has different domain name, cypress does not allow it 
      to do automation for that link, to overcome that origin needs to be changed to new domain and commands needs to be mentoned in it
      origin takes two argument, one the URL and another the function in which we have to add the automations scripts for that new domain*/
    })
    //    cy.get("#alertbtn").click()
  })
})
