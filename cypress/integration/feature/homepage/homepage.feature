Feature: Homepage 

    The functional button at homepage should be works well 

    Scenario: Verify functional login button on home page 
        Given I click login button
        Then verify title of customer login page

    Scenario: Verify functional icon favorite button 
        Given I click wishlist button
        Then verify title of customer login page

    Scenario: Verify functional shoping cart button without have an item product 
        When I click icon shoping cart button
        Then verify shoping cart should be displayed

    Scenario: Verify functional Shop button 
        Given Im on homepage
        And I click shop button and verify sub menu category
        Then I should direct to product page

     Scenario: Verify functional Sub menu category button 
        Given Im on homepage 
        When I click shop button & verify sub menu category  
        And I click body care button & verify sub item category 
        And I click bath&shower button 
        Then I should direct to bath & showe page
    
Feature: Catalog 

    The functional button in the catalog will works well 

    Scenario: Verify functional search button 
    