describe("Test suite - Conjunto de pruebas de inicio de sesión", () => {

    it("Validar página de inicio", ()=>{
        cy.viewport(1285, 710)
        cy.visit("https://techforb-finsuites.web.app/finsuite")
        cy.get('.fs-login__form-section-content > :nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click()
        cy.get('#mat-option-0').click()
        cy.get('#DniNumber').type("41046444")
        cy.get('#Password').type("1234")
        cy.get('.fs-login__form-section-content-button > .mdc-button__label').click()
       
    })

})