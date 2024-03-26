import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import newtoursPage from "./newtoursPage";


beforeEach(()=>{
    cy.reload()
})
after(()=>{
    cy.log('done test case, test')
})

Given('open newtours app', ()=>{
    newtoursPage.visit()
})
When('enter valid account', (datatable) =>{
    datatable.hashes().forEach(element => {
        newtoursPage.fillUsername(element.username)
        newtoursPage.fillPassword(element.password)
    }); 
})
When('click Submit button', ()=>{
    newtoursPage.clickSubmit()
})
Then('verify title of the page should be {string}', (title)=>{
    cy.title().should('eq', title)
})
