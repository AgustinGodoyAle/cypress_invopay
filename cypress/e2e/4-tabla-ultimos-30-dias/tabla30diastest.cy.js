describe("Test suite - Conjunto de pruebas de Tabla ultimos 30 días", () => {

    it("Validar componentes de la tabla", () => {
        cy.viewport(1285, 710)

        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
    
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()

        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)

        //titulo ultimos 30 días
        cy.get('.ip-table__top--title').should("be.visible")
        cy.get('.ip-table__top--title').contains("Últimos 30 dias")
        
    })

})