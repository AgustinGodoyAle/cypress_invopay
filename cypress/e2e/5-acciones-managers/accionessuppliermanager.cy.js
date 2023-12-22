describe("Test suite - Conjunto de pruebas de Supplier Manager", () => {

    it("Validar ingreso a seccion Usuarios de Supplier Manager", ()=>{

        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("pecijor707@mainoj.com")
        cy.get('#floatingPassword').type("wScvQSbX")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("pecijor707 (Supplier manager)")
        
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)

        //nombre de usuario que inicio sesión
        cy.get('.ip-header__content-name').contains("pecijor707 (Supplier manager)")
        
        //botón de acciones enterprise manager
        cy.get('.mdc-button__label').should("be.visible")

        //ingresar a seccion usuarios
        cy.get('.mdc-button__label > img').click()
        cy.get('.mat-mdc-menu-item').click()
        cy.get('.mdc-button__label').contains("Añadir nuevo usuario proovedor")



    })

})