///  <reference types="Cypress"/>
//Test case is called spec in cypress
describe("My First Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
    cy.wait(2000)
    cy.get(".product:visible").should("have.length", 4)
    // cy.get(".product:hidden").invoke("visible")
    //  cy.get(".product:visible").should("have.length", 5)
    //parent child chaining
    cy.get(".products").as("ProductsCatalog")
    cy.get("@ProductsCatalog").find(".product").should("have.length", 4)
    //cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
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
    //Assert iftext is correctly displayed
    cy.get(".greenLogo").should("have.text", "GREENKART")

    //Below code is to print the log in cypress
    cy.get(".greenLogo").then(function (logoText) {
      cy.log(logoText.text())
    })
    /*cypress supports jquery methods, as it is known that cypress is asynchronous in nature it can identify methods owned by cypress
       but if any method is not written in cypress it cannot resolve promise of that mehod, forr that case promise needs to be resolved manually*/

    // cy.log(cy.get(".greenLogo").text());
  })
})
