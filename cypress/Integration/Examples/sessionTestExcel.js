const neatCsv = require("neat-csv")
const excelToJson = require("convert-excel-to-json")
const fs = require("fs")
describe("My Session Test Suite", () => {
  it("Session Test Case", () => {
    cy.LoginFunction().then(() => {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"))
        },
      })
    })
    let subtotal = 0
    let actualProductName = ""
    let orderid = ""
    cy.get(".card .card-body b")
      .eq(1)
      .then((val) => {
        actualProductName = val.text()
      })
    cy.get(".card .card-body button:last-of-type").eq(1).click()
    cy.get("button[routerlink*='cart']").click()
    cy.get("li:nth-child(1) span:nth-child(2)").then(function (val) {
      subtotal = val.text()
      //cy.log(subtotal)
    })
    cy.get("li:nth-child(2) span:nth-child(2)").then(function (val) {
      expect(val.text()).to.equal(subtotal)
      //cy.log(subtotal)
    })
    //cy.log(subtotal)

    cy.contains("Checkout").click()
    cy.contains("Number").siblings().clear().type("1111222233334444")
    // const subtotal=cy.get('.label').siblings('.value')
    cy.get("select").eq(0).select("05")
    cy.get("select").eq(1).select("31")
    cy.contains("CVV").siblings().type("345")
    cy.get("input[placeholder*='Country']").type("ind")
    cy.get(".ta-results button").each(($el, index, $list) => {
      if ($el.text() === " India") {
        cy.wrap($el).click()
      }
    })
    cy.get(".action__submit").click()
    cy.wait(2000)
    cy.contains("Excel").click()
    const fileName = Cypress.config("fileServerFolder")
    const result = excelToJson({
      source: fs.readFileSync(
        fileName + "/cypress/downloads/order-invoice_pranav.xlsx"
      ), // fs.readFileSync return a Buffer
    })
    console.log(result)
  })
})
