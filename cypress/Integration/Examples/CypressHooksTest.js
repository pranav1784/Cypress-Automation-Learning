///  <reference types="Cypress"/>
//Test case is called spec in cypress
import HomePage from "../pageObjects/homepage"
import productPage from "../pageObjects/ProductPage"
describe("My Second Test Suite", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data
    })
  })
  //samplecomment
  it("My sixth Test Case", function () {
    Cypress.env('url')
    cy.visit(Cypress.env('url')+"/angularpractice/")
    const homepage = new HomePage()
    const productpage = new productPage()
    homepage.getPatientName().type(this.data.name)
    homepage.getGender().select(this.data.Gender)
    homepage.getBindTextfield().should("have.value", this.data.name)
    homepage.getPatientName().should("have.attr", "minlength", "2")
    cy.get("input#inlineRadio3").should("be.disabled")
    homepage.getShopPage().click()
    this.data.productName.forEach((element) => {
      cy.addProduct(element)
    })
    // cy.pause()
    productpage.getButton().click()
    //var sum =

    cy.sumProducts().then(function (sum) {
      // cy.get("td.text-right strong").then(function (a) {
      // var displayedSum = a.text()
      // displayedSum = displayedSum.split(" ")
      // displayedSum = displayedSum[1].trim()
      // cy.log(sum)
      cy.get("td.text-right strong")
        .invoke("text")
        .then((displayedSum) => {
          displayedSum = parseFloat(displayedSum.split(" ")[1].trim())
          // cy.log("Total Sum: " + sum)
          // cy.log("displayed sum: "+displayedSum)
          expect(displayedSum).to.equal(sum)
        })

      // })

      productpage.getCheckOutButton().click()
      productpage.getCountry().type("india")
      // Cypress.config("defaultCommandTimeout", 6000)
      productpage.selectCountry().click()
      productpage.selectCheckBox().click({ force: true })
      productpage.purchaseProduct().click()
      cy.get(".alert").then(function (text) {
        const alert = text.text()
        expect(alert.includes("Success")).to.to.be.true
      })
    })
  })
})
