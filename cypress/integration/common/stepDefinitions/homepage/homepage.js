import { Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"

const homepageUrl = "https://magento-2.tbsgroup.co.id/"
// const homepageUrl ="https://www.thebodyshop.co.id/"

beforeEach(()=>{
    cy.log('url');
    cy.visit(homepageUrl)
    cy.title('The Body Shop Official | Toko Produk Kecantikan & Perawatan Tubuh')

    Given('I click login button', ()=>{
        cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > ul.header.links > li.authorization-link').should('be.visible')
        .wait(3000);
        cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > ul.header.links > li.authorization-link > a').click({ force: true });
    });
    
    Then('verify title of customer login page', ()=>{
        cy.get('#maincontent > div.page-title-wrapper > h1 > span').should('be.visible');
        cy.title('customer login page');
    });
    
    // Verify functional icon favorite button 
    Given('I click my account menu button', ()=>{
        cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.menu-mobile > ul > li:nth-child(5) > a').click({ force: true });
    });
    
    Then('verify title of customer login page', ()=> {
        cy.get('#maincontent > div.page-title-wrapper > h1 > span').should('be.visible');
        cy.title('Customer Login');
    });
    
    // success click the wishlist button from homepage
    Given('I click wishlist button', ()=>{
        cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > div > li > a').click({ force: true });
    });
    
    Then('verify title of customer login page', ()=> {
        cy.get('#maincontent > div.page-title-wrapper > h1 > span').should('be.visible');
        cy.title('Customer Login');
    })
    
    //  Verify functional shoping cart button without have an item product 
    Given('I click icon shoping cart button', ()=>{
        cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > div > div > a').trigger('click');
    });
    
    Then('verify shoping cart should be displayed', ()=> {
        cy.get('#minicart-content-wrapper > div.block-content.block-content-quickcart').should('be.visible');
        cy.title('Shopping-Cart');
    });
    
    //  Verify functional Shop button 
    Given('Im on homepage', ()=>{
        cy.title('The Body Shop Official | Toko Produk Kecantikan & Perawatan Tubuh');
    });
    
    And('I click shop button and verify sub menu category', ()=>{
        cy.get('#ui-id-4.nav-anchor.ui-corner-all')
        .wait(3000);
        cy.get('#ui-id-4 > span.drill-opener').click({ force: true });
    });
    
    Then('I should direct to product page', ()=>{
        cy.get('.base').contains('Products');
    });
    
    // Verify functional Sub menu category button 
    Given('Im on homepage ', ()=>{
        cy.title('The Body Shop Official | Toko Produk Kecantikan & Perawatan Tubuh');
    });
    
    When('I click shop button & verify sub menu category', ()=>{
        cy.get('#ui-id-4.nav-anchor.ui-corner-all')
        .wait(3000);
        cy.get('div.mega-col.mega-col-10.mega-col-level-1.col-xs-12', { wait: 10000 }).should('not.have.class', 'disabled');
        cy.get('nav-item level1 nav-1-3 submenu-left subhover  dropdown-submenu  category-item parent').click({ force: true });
    });
});

// afterEach(()=>{
//     cy.clearCookie('.minicart-wrapper > .showcart');
// })

// Verify functional login button on home page 
// Given('I click login button', ()=>{
//     cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > ul.header.links > li.authorization-link').should('be.visible')
//     .wait(3000);
//     cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > ul.header.links > li.authorization-link > a').click({ force: true });
// });

// Then('verify title of customer login page', ()=>{
//     cy.get('#maincontent > div.page-title-wrapper > h1 > span').should('be.visible');
//     cy.title('customer login page');
// });

// // Verify functional icon favorite button 
// Given('I click my account menu button', ()=>{
//     cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.menu-mobile > ul > li:nth-child(5) > a').click({ force: true });
// });

// Then('verify title of customer login page', ()=> {
//     cy.get('#maincontent > div.page-title-wrapper > h1 > span').should('be.visible');
//     cy.title('Customer Login');
// });

// // success click the wishlist button from homepage
// Given('I click wishlist button', ()=>{
//     cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > div > li > a').click({ force: true });
// });

// Then('verify title of customer login page', ()=> {
//     cy.get('#maincontent > div.page-title-wrapper > h1 > span').should('be.visible');
//     cy.title('Customer Login');
// })

// //  Verify functional shoping cart button without have an item product 
// Given('I click icon shoping cart button', ()=>{
//     cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > div > div > a').trigger('click');
// });

// Then('verify shoping cart should be displayed', ()=> {
//     cy.get('#minicart-content-wrapper > div.block-content.block-content-quickcart').should('be.visible');
//     cy.title('Shopping-Cart');
// });

// //  Verify functional Shop button 
// Given('Im on homepage', ()=>{
//     cy.title('The Body Shop Official | Toko Produk Kecantikan & Perawatan Tubuh');
// });

// And('I click shop button and verify sub menu category', ()=>{
//     cy.get('#ui-id-4.nav-anchor.ui-corner-all')
//     .wait(3000);
//     cy.get('#ui-id-4 > span.drill-opener').click({ force: true });
// });

// Then('I should direct to product page', ()=>{
//     cy.get('.base').contains('Products');
// });

// // Verify functional Sub menu category button 
// Given('Im on homepage ', ()=>{
//     cy.title('The Body Shop Official | Toko Produk Kecantikan & Perawatan Tubuh');
// });

// When('I click shop button & verify sub menu category', ()=>{
//     cy.get('#ui-id-4.nav-anchor.ui-corner-all')
//     .wait(3000);
//     cy.get('div.mega-col.mega-col-10.mega-col-level-1.col-xs-12', { timeout: 10000 }).should('not.have.class', 'disabled');
//     cy.get('nav-item level1 nav-1-3 submenu-left subhover  dropdown-submenu  category-item parent').click({ force: true });
// });
