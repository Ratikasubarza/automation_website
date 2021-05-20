Feature: Product list

    As a user will be get the information product 

    Scenario: Verify success to product details page 
        Given I click shop button at homepage 
        And I click image product 
        Then Should be directly to product details page & verify the information of product details

    
    # Scenario: Check functionality add to bag butto in product list page 
    #     Given I Clikc shop button 
    #     And I click image product in one of product at product page & verify in product list page
    #     And I click add to bag button 
    #     Then The functionality button works well and verify the product added in the shoping cart 
    
    # Scenario: Check functionality add qty in product list page 
    #     Given Im at product list page 
    #     And I scroll untill add to bag button 
    #     And I click + button 
    #     Then qty success to added
    #     And I clikc add to bag button 
    #     Then The functionality works well and the qty product success to be added in shoping cart according to desirable
