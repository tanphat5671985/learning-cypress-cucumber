const URL = 'https://demo.guru99.com/test/newtours/'
const USERNAME_INPUT = '[name="userName"]'
const PASSWORD_INPUT = '[name="password"]'
const SUBMIT_BTN = '[name="submit"]'

class newtoursPage {
    static visit() {
        cy.visit(URL)
    }
    static fillUsername(name) {
        cy.get(USERNAME_INPUT).type(name)
    }
    static fillPassword(name) {
        cy.get(PASSWORD_INPUT).type(name)
    }
    static clickSubmit(){
        cy.get(SUBMIT_BTN).click()
    }
}

export default newtoursPage;