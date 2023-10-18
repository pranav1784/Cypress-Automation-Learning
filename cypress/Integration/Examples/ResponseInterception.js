///  <reference types="Cypress"/>
describe("Response Interception Test Suite", function () {
  it("My Interception case:", function () {
    //syntax to mock the response
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "Physics",
            isbn: "mock_code01",
            aisle: "test101",
          },
        ],
      }
    ).as("bookResponseIntercept")
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
    cy.get("button.btn-primary").click()
    cy.wait("@bookResponseIntercept").then(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1)
    })
    cy.get("p").should("contain.text", "Oops")
  })
  //   it("My second Intercception Case:", function () {
  //     cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
  //   })
})
