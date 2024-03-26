import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
beforeEach(()=>{
    cy.reload()
})
after(()=>{
    cy.log('done test case, test')
})

Given('open newtours app', ()=>{
    cy.visit('https://demo.guru99.com/test/newtours/')
})
When('enter valid account', (datatable) =>{
    datatable.hashes().forEach(element => {
        cy.get('[name="userName"]').type(element.username)
        cy.get('[name="password"]').type(element.password)
    });
    
})
And('click Submit button', ()=>{
    cy.get('[name="submit"]').click()
})
Then('verify title of the page should be {string}', (title)=>{
    cy.title().should('eq', title)
})
