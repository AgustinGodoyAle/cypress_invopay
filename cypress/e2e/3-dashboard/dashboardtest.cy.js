describe("Test suite - Conjunto de pruebas de dashboards", () => {

    it("Validar Dashboard Enterprise Manager", ()=>{

        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        
        //nombre de usuario que inicio sesión
        cy.get('.ip-header__content-name').contains("Techforb")
        
        //botón de acciones enterprise manager
        cy.get('.mdc-button__label').should("be.visible")
        
        //boton seleccionar lenguaje
        cy.get('.langSelector__text-color > img').should("be.visible")
        
        //pantalla de inicio
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Inicio")

        //Cards de enterprise
        //pago total de facturas
        cy.get(':nth-child(1) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Pago total facturas")
        cy.get(':nth-child(1) > .ip-company-cards__card-value > .ip-company-cards__card-value-text').should("be.visible")

        //total de facturas pendientes
        cy.get(':nth-child(2) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Total facturas pendientes de aprobación")
        cy.get(':nth-child(2) > .ip-company-cards__card-value > .ip-company-cards__card-value-text').should("be.visible")
  
        //total de facturas vencidas
        cy.get(':nth-child(3) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Total facturas vencidas")
        cy.get(':nth-child(3) > .ip-company-cards__card-value > .ip-company-cards__card-value-text').should("be.visible")
 
        //faltante a pagar
        cy.get(':nth-child(4) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Faltante a pagar")
        cy.get(':nth-child(4) > .ip-company-cards__card-value > .ip-company-cards__card-value-text').should("be.visible")

        //titulo ultimos 30 días
        cy.get('.ip-table__top--title').should("be.visible")
        cy.get('.ip-table__top--title').contains("Últimos 30 dias")
    })

    it("Validar Dashboard Enterprise User Procurement", ()=>{
        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("herajic851@nasmis.com")
        cy.get('#floatingPassword').type("O5UbKZ1J")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        
        //nombre de usuario que inicio sesión
        cy.get('.ip-header__content-name').contains("herajic851 (Procurement)")
    
        //no existe botón de enterprise manager
        cy.get('.mdc-button__label > img').should("not.exist")

        //boton seleccionar lenguaje
        cy.get('.langSelector__text-color > img').should("be.visible")
        
        //pantalla de inicio
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Inicio")

        //Cards de enterprise
        //pago total de facturas
        cy.get(':nth-child(1) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Pago total facturas")

        //total facturas pendientes
        cy.get(':nth-child(2) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Total facturas pendientes de aprobación")
        
        //total facturas vencidas
        cy.get(':nth-child(3) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Total facturas vencidas")
         
        //faltante a pagar
        cy.get(':nth-child(4) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Faltante a pagar")

        //titulo ultimos 30 días
        cy.get('.ip-table__top--title').should("be.visible")
        cy.get('.ip-table__top--title').contains("Últimos 30 dias")
    })

    it("Validar Dashboard Enterprise User Accountability", ()=>{
        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("xotiyi1698@nasmis.com")
        cy.get('#floatingPassword').type("JigMUkxw")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        
        //nombre de usuario que inicio sesión
        //cy.get('.ip-header__content-name').contains("herajic851 (Procurement)")
    
        //no existe botón de enterprise manager
        cy.get('.mdc-button__label > img').should("not.exist")

        //boton seleccionar lenguaje
        cy.get('.langSelector__text-color > img').should("be.visible")
        
        //pantalla de inicio
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Inicio")

        //Cards de enterprise
        //pago total de facturas
        cy.get(':nth-child(1) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Pago total facturas")

        //total facturas pendientes
        cy.get(':nth-child(2) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Total facturas pendientes de aprobación")
        
        //total facturas vencidas
        cy.get(':nth-child(3) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Total facturas vencidas")
         
        //faltante a pagar
        cy.get(':nth-child(4) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Faltante a pagar")

        //titulo ultimos 30 días
        cy.get('.ip-table__top--title').should("be.visible")
        cy.get('.ip-table__top--title').contains("Últimos 30 dias")
        

    })

    it("Validar Dashboard Enterprise User Payment", ()=>{
        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("vomoh66644@nasmis.com ")
        cy.get('#floatingPassword').type("iUrrlywz")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        
        //nombre de usuario que inicio sesión
        //cy.get('.ip-header__content-name').contains("herajic851 (Procurement)")
    
        //no existe botón de enterprise manager
        cy.get('.mdc-button__label > img').should("not.exist")

        //boton seleccionar lenguaje
        cy.get('.langSelector__text-color > img').should("be.visible")
        
        //pantalla de inicio
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Inicio")

        //Cards de enterprise
        //pago total de facturas
        cy.get(':nth-child(1) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Pago total facturas")

        //total facturas pendientes
        cy.get(':nth-child(2) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Total facturas pendientes de aprobación")
        
        //total facturas vencidas
        cy.get(':nth-child(3) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Total facturas vencidas")
         
        //faltante a pagar
        cy.get(':nth-child(4) > .ip-company-cards__card-header > .ip-company-cards__card-header-text').should("be.visible")
        cy.get('.ip-company-cards__card-header-text').contains("Faltante a pagar")

        //titulo ultimos 30 días
        cy.get('.ip-table__top--title').should("be.visible")
        cy.get('.ip-table__top--title').contains("Últimos 30 dias")
        

    })

    it("Validar Dashboard Supplier Manager", ()=>{

        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("pecijor707@mainoj.com ")
        cy.get('#floatingPassword').type("wScvQSbX")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        
        //nombre de usuario que inicio sesión
        cy.get('.ip-header__content-name').contains("pecijor707 (Supplier manager)")
        
        //boton acciones de supplier manager
        cy.get('.mdc-button__label').should("be.visible")
        cy.get('.mdc-button__label > img').should("be.visible")

        //boton seleccionar lenguaje
        cy.get('.langSelector__text-color > img').should("be.visible")
        
        //pantalla inicio
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Inicio")

        //Total reaudado
        cy.get('.ip-info-supplier__row-title').should("be.visible")
        cy.get('.ip-info-supplier__row-title').contains("Total recaudado")

        //total de facturas
        cy.get('.ip-info-supplier__info-date').should("be.visible")
        cy.get('.ip-info-supplier__info-date').contains("Total de facturas cargadas a la fecha actual")

        //titulo ultimos 30 días
        cy.get('.ip-table__top--title').should("be.visible")
        cy.get('.ip-table__top--title').contains("Últimos 30 dias")
    })

    it("Validar Dashboard Supplier User", ()=>{

        cy.viewport(1285, 710)
        //login
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("cihosen511@mainoj.com")
        cy.get('#floatingPassword').type("2fdRJbVv")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        
        //nombre de usuario que inicio sesión
        cy.get('.ip-header__content-name').contains("pecijor707 (Supplier manager)")
        
        //boton acciones de supplier manager no existe
        cy.get('.mdc-button__label').should("be.visible")
        cy.get('.mdc-button__label > img').should("not.be.visible")

        //boton seleccionar lenguaje
        cy.get('.langSelector__text-color > img').should("be.visible")
        
        //pantalla inicio
        cy.get('.ip-header__title').should("be.visible")
        cy.get('.ip-header__title').contains("Inicio")

        //Total reaudado
        cy.get('.ip-info-supplier__row-title').should("be.visible")
        cy.get('.ip-info-supplier__row-title').contains("Total recaudado")

        //total de facturas
        cy.get('.ip-info-supplier__info-date').should("be.visible")
        cy.get('.ip-info-supplier__info-date').contains("Total de facturas cargadas a la fecha actual")

        //titulo ultimos 30 días
        cy.get('.ip-table__top--title').should("be.visible")
        cy.get('.ip-table__top--title').contains("Últimos 30 dias")
    })

})