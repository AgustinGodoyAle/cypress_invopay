describe("Test suite - Conjunto de pruebas de inicio de sesión", () => {

    it("Validar página de inicio", ()=>{
        cy.viewport(1285, 710)
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('.ip-login__welcome-text-title').should("be.visible")
        cy.get('.ip-login__welcome-text-title').contains("Iniciar sesión")

    })

    it("Validar inicio de sesión Enterprise Manager", ()=>{
        cy.viewport(1285, 710)
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("olivaimanoleduardo@gmail.com")
        cy.get('#floatingPassword').type("aLvgzlC0")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("Techforb")
        cy.get('.mdc-button__label').should("be.visible")
    })

    it("Validar inicio de sesión Enterprise User - Rol Procurement", ()=>{
        cy.viewport(1285, 710)
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("herajic851@nasmis.com")
        cy.get('#floatingPassword').type("O5UbKZ1J")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("herajic851 (Procurement)")
    })

    it("Validar inicio de sesión Enterprise User - Rol Accountability", ()=>{
        cy.viewport(1285, 710)
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("xotiyi1698@nasmis.com")
        cy.get('#floatingPassword').type("JigMUkxw")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("xotiyi1698 (Accountability)")
    })

    it("Validar inicio de sesión Enterprise User - Rol Payment", ()=>{
        cy.viewport(1285, 710)
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("vomoh66644@nasmis.com ")
        cy.get('#floatingPassword').type("iUrrlywz")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("vomoh66644 (Payments)")
    })

    it("Validar inicio de sesión Supplier Manager", ()=>{
        cy.viewport(1285, 710)
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("pecijor707@mainoj.com")
        cy.get('#floatingPassword').type("wScvQSbX")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("pecijor707 (Supplier manager)")
    })

    it("Validar inicio de sesión Supplier User", ()=>{
        cy.viewport(1285, 710)
        cy.visit("https://techforb-invopay.web.app/invopay")
        cy.get('#floatingEmail').type("cihosen511@mainoj.com ")
        cy.get('#floatingPassword').type("2fdRJbVv")
        cy.get('.ip-login__content-wrapper-form-submit-button').click()
        cy.get('.ip-header__content-name').contains("cihosen511 (Supplier user)")
    })


})