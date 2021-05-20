import { Given, And, Then} from "cypress-cucumber-preprocessor/steps"
import _ from 'lodash';

//Feature: Product list 
//Verify success to product details page
Given('I click shop button at homepage ' , ()=>{
    cy.get('#ui-id-4 > :nth-child(1)').click()
    .should('be.visible')
})
And('I click image product', ()=>{
    cy.get('#maincontent > div.columns > div.column.main.infinite-scroll > div.products.wrapper.grid.products-grid > ol > li:nth-child(3) > div > div.product_image > a > span > span').click({ force: true });
});

Then('Should be directly to product details page & verify the information of product details', ()=>{
    cy.get('#maincontent > div.columns > div > div.product-info-main')
    .should('have.value', '101031095')
});

