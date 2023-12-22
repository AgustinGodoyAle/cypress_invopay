describe("Test suite - Conjunto de pruebas del Side-Nav de Supplier Manager", () => {
    
    it("Validar Desplegable Side Nav Supplier Manager", ()=>{
        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("pecijor707@mainoj.com")
        cy.get('#floatingPassword').type("wScvQSbX")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("pecijor707 (Supplier manager)")

        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        //clickear desplegable
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(1)').click()
        //se despliega
        cy.get(':nth-child(1) > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .mat-mdc-tooltip-trigger').should("be.visible")

    })

    it("Validar Inicio Side Nav Supplier Manager", ()=>{
        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("pecijor707@mainoj.com")
        cy.get('#floatingPassword').type("wScvQSbX")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("pecijor707 (Supplier manager)")
        
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        //clickear botón inicio
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(2)').click()
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Inicio")
    })

    it("Validar Facturas Side Nav Supplier Manager", ()=>{
        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("pecijor707@mainoj.com")
        cy.get('#floatingPassword').type("wScvQSbX")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("pecijor707 (Supplier manager)")
        
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        
        //clickear botón facturas
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(3)').click()
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Facturas")
    })
    it("Validar Rendiciones Side Nav Supplier Manager", ()=>{
        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("pecijor707@mainoj.com")
        cy.get('#floatingPassword').type("wScvQSbX")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("pecijor707 (Supplier manager)")
        
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        //clickear botón historial de pago
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(4)').click()
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Historial de pagos")
    })
    
    it("Validar Cerrar sesión Side Nav Supplier Manager", ()=>{
        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("pecijor707@mainoj.com")
        cy.get('#floatingPassword').type("wScvQSbX")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("pecijor707 (Supplier manager)")

        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        //clickear cerrar sesión
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(5)').click()
        cy.get('.ip-login__welcome-text-title').should("be.visible")
        cy.get('.ip-login__welcome-text-title').contains("Iniciar sesión")
    })


})