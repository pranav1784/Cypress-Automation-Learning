///  <reference types="Cypress"/>
describe("Request Interception Test Suite", function () {
    it("My second Interception case:",function(){
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        
        //to Mock the request, use this syntax
        cy.intercept('GET',"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
        (req)=>{
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res)=>
            {
               // expect(res.statusCode).to.equal(403)
            })
        }).as("mockurl")
        cy.get("button.btn-primary").click()
        cy.wait("@mockurl")
       
        
    })
})