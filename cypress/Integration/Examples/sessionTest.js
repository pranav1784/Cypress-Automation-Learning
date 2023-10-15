describe('My Session Test Suite',()=>{
    it('Session Test Case',()=>{
        cy.LoginFunction().then(()=>{
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad:function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })

    })
})