Feature: Order

    As a user success to order in The Body Shop Indonesia website

    Scenario: Verify success order 1 product all category with virtual account payment 
        Given Im on homepage
        When  I click shop button 
        And I click add to bag 
        And I click Go to checkout at shopping cart pop-up
        And I click regular shipping
        And I click virtual account 
        And I click button place order
        Then The midtrans popup should be showing and order transaction success

    Scenario: Verify success order 2 product makeup category with free shipping 
    Scenario: Verify success order 3 product body care category with add greeting cards
    Scenario: Verify success order 2 all prduct category with donate
