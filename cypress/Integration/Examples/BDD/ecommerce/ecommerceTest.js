/// <reference types="Cypress" />
import HomePage from "../pageObjects/homepage"
import productPage from "../pageObjects/ProductPage"
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// npx cypress run --spec cypress/integration/examples/BDD/*.feature --headed --browser chrome --env url="https://google.com"
const homePage=new HomePage()
const productPage=new ProductPage()
let name
Given('I open ECommerce Page',()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/")
})

// When I add items to Cart
When('I add items to Cart',function ()
{
    homepage.getShopPage().click()



    this.data.productName.forEach((element) => {
        cy.addProduct(element)
      })
      // cy.pause()
      productpage.getButton().click()
})

//And Validate the total prices
When('Validate the total prices',()=>
{
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
    })
})
    //Then select the country submit and verify Thankyou

    Then('select the country submit and verify Thankyou',()=>
    {
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
    //When I fill the form details
    When('I fill the form details',function(dataTable)
    {

        // [bobz , male   ]
        name = dataTable.rawTable[1][0]
        homepage.getPatientName().type(dataTable.rawTable[1][0])
    homepage.getGender().select(dataTable.rawTable[1][1])
    })
    // Then validate the forms behaviour
    Then('validate the forms behaviour',function()
    {
        homepage.getBindTextfield().should("have.value", dataTable.rawTable[1][0])
        homepage.getPatientName().should("have.attr", "minlength", "2")
        cy.get("input#inlineRadio3").should("be.disabled")
    Cypress.config('defaultCommandTimeout', 8000)
    })
    // And select the Shop Page
    Then('select the Shop Page',()=>
    {
        homepage.getShopPage().click()
    })

//thanks



   






