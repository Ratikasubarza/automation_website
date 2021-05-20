Feature: Add to bag product to shopping cart
    As a user don't have account want to added product to shopping cart
    

    # Scenario: Verify success click icon cart button. When null product in shoping cart
    #     Given I click icon cart button 
    #     Then Should be popup shoping cart display & verify continue shoping button will be display

    Scenario: Verify success add to bag product from homepage
        Given I scroll untill footer MUST BUY 
        And I click add to bag Ayr20-Radiant Matte 3
        Then The product success to added 
    
        
    Scenario: Verify success to add to bag product from makeup category product
        Given I click shop button 
        And I click makeup category button 
        And I click blusher button & verify blusher product page
        And I click add to bag button from IN ONE BLUSH 06 4G product
        Then Should be success to add to cart & verify name product selected
    
    Scenario: Check functional button checkout from product page
        Given I click add to bag button on SKIN CONTROL HYDRATOR TEA TREE 40ML product & verify mini cart showing
        And I click checkout button 
        Then Should be success direct to customer login page
    
    Scenario: Check functional button continue shopping in show cart from product page
        Given I click button qty on shopping cart & verify the popup information will be displayed
        Then I click button continue shoping & Show cart popup will be close

    # Scenario: Check functional button view and edit cart at show cart popup
    #     Given Display show cart pop-up
    #     When I click button view and edit cart on show cart pop-up 
    #     Then should be direct to checkout cart page

    # Scenario: Verify success to edit qty on checkout cart page 
    #     Given User on checkout cart page
    #     When I click dropdown qty
    #     And I change the qty from 1 to 5 qty
    #     Then The qty will change to 5 and the price will be adjusted from the qty 

    # Scenario: Verify success to remove the product form checkout cart page 
    #     Given Im on checkout cart page 
    #     And I clikc remove button on the product 
    #     Then The product success to remove from checkout cart page
    
    # Scenario: Check functional button go to checkout from shopping-cart summary on chekout cart page 
    #     Given Im on checkout cart page & verify shopping-cart summary
    #     And I click button go to checkout 
    #     Then should be direct to account login page


