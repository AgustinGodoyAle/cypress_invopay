describe("Test suite - Conjunto de pruebas del Side-Nav de Enterprise", () => {
    
    it("Validar Desplegable Side Nav Enterprise Manager", ()=>{
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(1)').click()
        cy.get(':nth-child(1) > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .mat-mdc-tooltip-trigger').should("be.visible")

    })

    it("Validar Inicio Side Nav Enterprise Manager", ()=>{
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(2)').click()
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Inicio")
    })

    it("Validar Facturas Side Nav Enterprise Manager", ()=>{
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(3)').click()
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Facturas")
    })
    it("Validar Rendiciones Side Nav Enterprise Manager", ()=>{
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(4)').click()
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Rendiciones")
    })
    
    it("Validar Proveedores Side Nav Enterprise Manager", ()=>{
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(5)').click()
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Proveedores")
    })
    
    it("Validar Alta contratos Side Nav Enterprise Manager", ()=>{
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(6)').click()
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Alta contratos")
    })

    it("Validar Orden de compra Side Nav Enterprise Manager", ()=>{
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(7)').click()
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Orden de compra")
    })

    it("Validar Cerrar sesión Side Nav Enterprise Manager", ()=>{
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.wait(10000); // Espera 10000 milisegundos (10 segundos)
        cy.get('.ip-side-nav__container-content > .mat-mdc-list > :nth-child(8)').click()
        cy.get('.ip-login__welcome-text-title').should("be.visible")
        cy.get('.ip-login__welcome-text-title').contains("Iniciar sesión")
    })


})