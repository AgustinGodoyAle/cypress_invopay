describe("Test suite - Conjunto de pruebas de enterprise manager", () => {

    it("Validar ingreso a seccion Usuarios de Enterprise Manager", ()=>{
        cy.viewport(1285, 710)

        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)

        //nombre de usuario que inicio sesión
        cy.get('.ip-header__content-name').contains("Techforb")
        
        //botón de acciones enterprise manager
        cy.get('.mdc-button__label').should("be.visible")

        //ingresar a seccion usuarios
        cy.get('.mdc-button__label > img').click()
        cy.get('[routerlink="/invopay/admin"]').click()
        cy.get('.ip-header__title').contains("Usuarios")



    })

    it("Validar ingreso a seccion Empresa de Enterprise Manager", ()=>{
        cy.viewport(1285, 710)

        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)

        //nombre de usuario que inicio sesión
        cy.get('.ip-header__content-name').contains("Techforb")
        
        //botón de acciones enterprise manager
        cy.get('.mdc-button__label').should("be.visible")

        //ingresar a seccion empresas
        cy.get('.mdc-button__label > img').click()
        cy.get('[routerlink="/invopay/admin-enterprise"]').click()
        cy.get('.ip-header__title').contains("Empresa")

    })
})