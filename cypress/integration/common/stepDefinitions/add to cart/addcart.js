import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"
import _ from 'lodash';


//Verify success click icon cart button. When null product in shoping cart
Given('I click icon cart button ', ()=>{
    cy.get ('.panel.wrapper > .panel').click()
    cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > div > div > a').trigger('click');
})

Then('Should be popup shoping cart display & verify continue shoping button will be display', ()=>{
    cy.get('#minicart-content-wrapper > div.block-content.block-content-quickcart').should('be.visible');
    cy.title('Shopping-Cart');
})

// Verify success add to bag product from homepage
Given('I scroll untill footer MUST BUY',()=>{
   cy.get('#maincontent > div.columns > div > div:nth-child(4) > div > div.collection-slider > div > div.owl-carousel-custom-2.owl-carousel.owl-theme.owl-loaded > div.owl-thumbs').scrollIntoView({ offset: { top: 125, left: 0 } })
})
        
And('I click add to bag Ayr20-Radiant Matte 3',()=>{
    cy.get('#maincontent > div.columns > div > div:nth-child(4) > div > div.whats-new > div > div.owl-carousel-products-category_products.owl-carousel.owl-theme.owl-loaded > div.owl-stage-outer > div > div:nth-child(9) > div > div > div.actions-primary > button').click({ force: true });
    cy.get('#maincontent > div.columns > div > div:nth-child(4) > div > div.whats-new > div > div.owl-carousel-products-category_products.owl-carousel.owl-theme.owl-loaded > div.owl-stage-outer > div > div:nth-child(9) > div > div > div.actions-primary > button > span')
})
        
Then('The product success to added',()=>{
    cy.get('.message-success > div')
    .contains('You added AYR20 - RADIANT MATTE 3 to your shopping cart.');
});

//Verify success to add to bag product from makeup category product
Given('I click shop button',()=>{
    cy.get('#ui-id-4')
    .should('be.visible')
    .trigger('#ui-id-4 > span.drill-opener')
    .invoke('show', '.dropdown-menu > :nth-child(1)')
    .should('have.length', '1').trigger('click', {timeout:10000})
})

And('I click makeup category button',()=>{
    cy.get('.nav-anchor').contains('MAKE-UP').invoke('show')
    .next()
    .invoke('show','#ui-id-4 > span.drill-opener > :nth-chlild(1)')
    .should('have.length', '1')
    .invoke('show','.dropdown-menu > :nth-child(1)')
    .should('have.length', '1')
    .invoke('show','.dropdown-menu > :nth-child(2) > :nth-child(1) > :nth-child(1)')
    .should('have.length', '1')
    .invoke('show','.dropdown-menu > :nth-child(2) > :nth-child(1) > :nth-child(1) > .ves-column5 > :nth-child(1) > :nth-child(2) > #vesitem-90761621230565259257153 > .subitems-group')
    .should('have.length', '1')
    .invoke('show','.dropdown-menu > :nth-child(2) > :nth-child(1) > :nth-child(1) > .ves-column5 > :nth-child(1) > :nth-child(2) > #vesitem-90761621230565259257153 > .subitems-group > :nth-child(1)')
    .should('have.length', '1')
    .invoke('show', '.dropdown-menu > :nth-child(2) > :nth-child(1) > :nth-child(1) > .ves-column5 > :nth-child(1) > :nth-child(2)')
    .should('have.length', '1')
    .click({force:true}, {timeout:30000})
});
 
And('I click blusher button & verify blusher product page',()=>{
    cy.contains('Blusher').click({force:true}, {timeout:5000})
    cy.get('.base').title('Blusher');
})

And('I click add to bag button from IN ONE BLUSH 06 4G product',()=>{
    cy.get('#maincontent > div.columns > div.column.main.infinite-scroll > div.products.wrapper.grid.products-grid > ol > li:nth-child(3) > div > div.product_image > div.addtocart_position_2.center > form > button').click({force:true}, {timeout:5000})
})

Then('Should be success to add to cart & verify name product selected',()=>{
    cy.get('.message-success > div')
    .title('All In One Blush 06 4g');
})


// Check functional button checkout from product page
Given('I click add to bag button on SKIN CONTROL HYDRATOR TEA TREE 40ML product & verify mini cart showing', ()=>{
    cy.get('#ui-id-4 > :nth-child(1)').click({force:true})
    .wait(10000)
    cy.get('#maincontent > div.columns > div.column.main.infinite-scroll > div.products.wrapper.grid.products-grid > ol > li:nth-child(3) > div > div.product_image > div.addtocart_position_2.center > form > input[type=hidden]:nth-child(3)')
    .invoke('show')
    cy.get('#maincontent > div.columns > div.column.main.infinite-scroll > div.products.wrapper.grid.products-grid > ol > li:nth-child(3) > div > div.product_image > div.addtocart_position_2.center > form > button > span').click({force:true})
    cy.get('.message-success > div').title('You added SKIN CONTROL HYDRATOR TEA TREE 40ML to your ')
    cy.get('#minicart-content-wrapper > .block-content');
    cy.get('#mini-cart > .item > :nth-child(1)')
    .invoke('show', '#minicart-content-wrapper')
    .should('be.visible');
});

And('I click button go to checkout ', ()=>{
    cy.get('#top-cart-btn-checkout').click({force: true})
})

Then('should be direct to account login page', ()=>{
    cy.get('#maincontent > div.page-title-wrapper > h1 > span').invoke('show');
    cy.title('customer login page');
});


//Check functional button continue shopping in show cart from product page
Given('I click button qty on shopping cart & verify the popup information will be displayed',()=>{
    cy.get('#ui-id-4').click()
    .should('be.visible')
    .wait(10000)
    cy.get('#maincontent > div.columns > div.column.main.infinite-scroll > div.products.wrapper.grid.products-grid > ol > li:nth-child(3) > div > div.product_image > div.addtocart_position_2.center > form > button > span').click({force:true})
    .wait(10000)
    cy.get('.message-success > div').title('You added SKIN CONTROL HYDRATOR TEA TREE 40ML to your ')
    cy.get('.showcart > .counter').contains('1').click()
    .wait(10000)
    cy.get('#minicart-content-wrapper > .block-content')
    .invoke('show', 'div.primary > #btn-minicart-close')
    .click({force:true},{timeout:10000})
})

Then('I click button continue shoping & Show cart popup will be close',()=>{
    cy.get('#minicart-content-wrapper > .block-content')
    .invoke('show', 'div.primary > #btn-minicart-close')
    cy.get('div.primary > #btn-minicart-close')
    .click({force:true},{timeout:10000})
    cy.title('The Body Shop Indonesia Online Store');
});

//Check funtional button view and edit cart 
Given('', ()=>{
    cy.get('#ui-id-4 > :nth-child(1)').click({force:true})
    .wait(10000)
    cy.get('#maincontent > div.columns > div.column.main.infinite-scroll > div.products.wrapper.grid.products-grid > ol > li:nth-child(3) > div > div.product_image > div.addtocart_position_2.center > form > button > span').click({force:true})
    .wait(10000)
    cy.get('.message-success > div').title('You added SKIN CONTROL HYDRATOR TEA TREE 40ML to your ')
    cy.get('.showcart > .counter').contains('1').click()
    .wait(10000)
    cy.get('#minicart-content-wrapper > .block-content')
    .invoke('show', 'div.primary > #btn-minicart-close')
    .click({force:true},{timeout:10000})
    cy.get('.action-viewcart > .secondary').click({force:true})
})


    