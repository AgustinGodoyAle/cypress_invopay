describe("Test suite - Conjunto de pruebas de recuperar contraseña", () => {

    
    it("Validar página de inicio", ()=>{
        cy.viewport(1285, 710)

        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('.ip-login__welcome-text-title').should("be.visible")
        cy.get('.ip-login__welcome-text-title').contains("Iniciar sesión")
    })

    it("Recuperar Contraseña", ()=>{
        cy.viewport(1285, 710)

        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('.ip-login__welcome-text-title').should("be.visible")
        cy.get('.ip-login__welcome-text-title').contains("Iniciar sesión")
        cy.get('.ip-login__content-wrapper-form-submit-forgotten').click()
        cy.get('#floatingEmail').type("agustin.godoy@techforb.com")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.wait(8000); // Espera 8000 milisegundos (8 segundos)
        cy.get('.ip-login__content-wrapper-title').contains("Verifica tu casilla de correo")
    })
})