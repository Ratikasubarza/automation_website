import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"
import _ from 'lodash';

const urlReview = 'https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u'

//Verify success click icon cart button. When null product in shoping cart
Given('I go to url review prodct ', ()=>{
    cy.visit ('urlReview');
});

And('Input full name ', ()=>{
    cy.get('(//input[@placeholder="Enter your answer"])[1]')
    cy.type('Raika Purnama')
})
     
And('input phone number',()=>{
    cy.get('(//input[@placeholder="Enter your answer"])[2]')
    cy.type('085774177740');
})
        
And('select the produt service ',()=>{
    cy.get('select the produt service ').click();
});

And('select the rate service',()=>{
    cy.get('//span[@aria-label="5 Star"]').click()
});
 
And('Input review date ',()=>{
    cy.get('//input[@id="DatePicker0-label"]').click();
    cy.get('//button[@id="id__17"]').click();
});

And('click submit button',()=>{
    cy.get('//button[normalize-space()="Submit"]').click();
});

Then('The review product was successfully', ()=>{
    cy.get('//span[normalize-space()="Your response was submitted."]').should('be.invisible')
    contains('Your response was submitted.');
}); 