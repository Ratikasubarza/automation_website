import { Given, And, Then} from "cypress-cucumber-preprocessor/steps"
import _ from 'lodash';

//Feature: Catalog
//Veriy success to search a product 
Given('I click search button at homepage & input white musk' , ()=>{
    cy.get('#search').click()
    .should('be.visible', 'input#search.input-text').type('white musk')
    .should('have.length', '1')
    .invoke('show', '#search_autocomplete')
});

Then('Should be success to search product the white musk and list of product will be showing', ()=>{
    cy.get('.amasty-xsearch-loader', {timeout:3000})
    cy.get('.amsearch-products')
});

//Verify success to search product. If input 1 word
Given('I click search button at homepage & input body' , ()=>{
    cy.get('#search').click()
    .should('be.visible', 'input#search.input-text').type('body')
    .should('have.length', '1')
    .invoke('show', '#search_autocomplete')
});

Then('should be success to search product with input 1 word and list of product will be showing', ()=>{
    cy.get('.amasty-xsearch-loader', {timeout:3000})
    cy.get('.amsearch-products')
});

// Verify success search product with SKU number 
Given('I click search button at home page & input SKU number' , ()=>{
    cy.get('#search').click()
    .should('be.visible', 'input#search.input-text').type('126420083')
    .should('have.length', '1')
    .invoke('show', '#search_autocomplete')
});

Then('Should be success to search product with SKU number and the product will be showing', ()=>{
    cy.get('.amasty-xsearch-loader', {timeout:3000})
    cy.get('.amsearch-products')
});

// Check if user search with invalid word 
Given('I click search button at home page & input invalid word' , ()=>{
    cy.get('#search').click()
    .should('be.visible', 'input#search.input-text').type('bodycare')
    .should('have.length', '1')
    .invoke('show', '#search_autocomplete')
});

Then('The popup will be showing and verify the error message', ()=>{
    cy.get('.amasty-xsearch-loader', {timeout:3000})
    cy.get('.amsearch-products').wait(10000)
});

// Check functional tab stories button from popup search product. If there are product list
Given('I click search button at home page & input invalid word' , ()=>{
    cy.get('#search').click()
    .should('be.visible', 'input#search.input-text').type('bodycare')
    .should('have.length', '1')
    .invoke('show', '#search_autocomplete')
});

Then('Should be success to search product the white musk and list of product will be showing', ()=>{
    cy.get('.amasty-xsearch-loader', {timeout:3000})
    cy.get('.amsearch-products').wait(10000)
})

And('I click tab button stories', ()=>{
    cy.get('.page > .amasty-xsearch-block-header').click()
})

Then('The functional button should be works well', ()=>{
    cy.get('.amasty-xsearch-loader', {timeout:3000})
    cy.get('.amsearch-products').wait(10000)
    cy.get('.page > .amsearch-wrapper-item')
    .title('Musk Family', 'White Musk® Flora', 'white musk leau','black musk night bloom')
});

// Check functional tab journal button from popup search product. If there are product list
Given('I click search button at home page & input invalid word' , ()=>{
    cy.get('#search').click()
    .should('be.visible', 'input#search.input-text').type('bodycare')
    .should('have.length', '1')
    .invoke('show', '#search_autocomplete')
});

Then('Should be success to search product the white musk and list of product will be showing', ()=>{
    cy.get('.amasty-xsearch-loader', {timeout:3000})
    cy.get('.amsearch-products').wait(10000)
})

And('I click tab button journal', ()=>{
    cy.get('.blog > .amasty-xsearch-block-header').click()
})

Then('The functional button should be works well', ()=>{
    cy.get('.amasty-xsearch-loader', {timeout:3000})
    cy.get('.amsearch-products').wait(10000)
    cy.get('.page > .amsearch-wrapper-item')
    .title('Ekstraksi Parfum Tanpa Menyakiti Hewan', 'Ekstraksi Parfum Tanpa Menyakiti Hewan', 'Kenalan dengan Parfum Aroma Musk yang Hangat dan Banyak Disukai', '7 Rekomendasi Pilihan Parfum Perempuan Terlaris di The Body Shop®', 'Mengenal Kepribadianmu dan Karakter Parfum yang Cocok Untukmu', '5 Kejutan Ulang Tahun yang Bisa Anda Berikan untuk Pacar', 'Rekomendasi Parfum Pria yang Wanginya Disukai Wanita dan Tahan Lama','Gaya Berpakaian Pria yang Disukai Wanita Indonesia')
});
