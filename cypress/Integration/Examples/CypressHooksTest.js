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
  it("My sixth Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
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
    productpage.getButton().click()
  })
})
