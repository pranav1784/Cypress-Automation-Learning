class productPage {
  getButton() {
    return cy.get(".nav-link.btn-primary")
  }
  getCheckOutButton() {
    return cy.get("button.btn-success")
  }
  getCountry() {
    return cy.get("#country")
  }
  selectCountry() {
    return cy.get("div.suggestions li a")
  }
  selectCheckBox() {
    return cy.get("#checkbox2")
  }
  purchaseProduct() {
    return cy.get("input[type='submit']")
  }
}
export default productPage
