import {Given, And, Then} from "cypress-cucumber-preprocessor/steps"


Given('I input {string} at field phone number', ()=>{
    cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > ul.header.links > li.authorization-link > a').click({ force: true });
    cy.xpath('//*[@id="phone"]').click({force:true});
    // cy.xpath('/html/body/div[2]/div[1]/div/header/div[2]/div/ul[2]/li[4]/a').click({force:true});
    cy.title('Mobile Phone');
    cy.get().type('085774177740');
});
    
And('I click sign or register button', ()=>{
    cy.get('#check_search').click();
});

    
And('I input password, and click submit button', ()=>{
    cy.get('#login-content > #login-form > .fieldset > .password > .control > #pass').type('Ratika2711');
    cy.get('#send2').click();
})
       
Then('user should login successfully', ()=>{
    cy.get('body > div.page-wrapper > div.header-placeholder > div > header > div.panel.wrapper > div > ul.header.links > li.link > a > span')
    cy.get('#maincontent').scrollIntoView().invoke('removeAttr', 'id38Lftb0R').click({force:true})
});
    


