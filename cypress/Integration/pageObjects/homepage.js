import productPage from "./ProductPage"

class HomePage {
  getPatientName() {
    return cy.get("input[name='name']:nth-child(2)")
  }
  getGender() {
    return cy.get("select")
  }
  getBindTextfield() {
    return cy.get("input.ng-touched")
  }
  getShopPage() {
    return cy.get("a[href*='shop']")
  }
}

export default HomePage
