// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --  thanks
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("addProduct", (productName) => {
  cy.get("h4.card-title").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.get("button.btn.btn-info").eq(index).click()
    }
  })
})

Cypress.Commands.add("sumProducts", () => {
  let sum=0
  cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {
    const price = $el.text()
    const price2 = parseFloat(price.split(" ")[1].trim());
    //cy.log(price2)

    sum = Number(sum) + Number(price2)
    
  }).then(()=>{
    return sum
  })
 
})
Cypress.Commands.add("LoginFunction",()=>{
  cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",{"userEmail":"pranav@nomail.com","userPassword":"Pranav@2000"}
  ).then(function(response){
    expect(response.status).to.eq(200)
    Cypress.env('token',response.body.token)
  })
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
