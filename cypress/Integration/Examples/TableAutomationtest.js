///  <reference types="Cypress"/>
//Test case is called spec in cypress
describe("My Second Test Suite", function () {
  it("My Fourth Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
    cy.get("table[name='courses'] tr td:nth-child(2)").each(
      ($el, index, $list) => {
        var course = $el.text()
        if (course.includes("Python")) {
          cy.get("table[name='courses'] tr td:nth-child(2)")
            .eq(index)
            .next()
            .then(function (price) {
              var pricetxt = price.text()
              expect(pricetxt).to.equal("25")
            })
        }
      }
    )
  })
})
