///  <reference types="Cypress"/>
//Test case is called spec in cypress
describe("My Second Test Suite", function () {
  it("My Second Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
    cy.wait(2000)

    //parent child chaining
    cy.get(".products").as("ProductsCatalog")
    cy.get("@ProductsCatalog")
      .find(".product")
      .contains("ADD TO CART")
      .click()
      .then(function () {
        console.log("Add to cart clicked")
      })
    cy.get("@ProductsCatalog")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text()
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click()
          //comments
          //comment2
        }
      })
    cy.get(".cart-icon>img").click()
    cy.contains("PROCEED TO CHECKOUT").click()
    cy.contains("Place Order").click()
  })
})
