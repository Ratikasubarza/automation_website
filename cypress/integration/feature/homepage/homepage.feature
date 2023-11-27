Feature: Review pordutc form 



    Scenario: Fill the review [product form]
        Given I go to url review prodct
        And Input full name 
        And input phone number
        And select the produt service 
        And select the rate service
        And Input review date 
        And click submit button
        Then The review product was successfully