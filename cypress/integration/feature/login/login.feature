Feature: Login 

    Scenario Outline: As a T3 user can login with valid phone number
        Given I input <phonenumber> at field phone number
        And I click sign or register button
        And I input <password>, and click submit button
        Then user should login successfully

      Example: 
        |phonenumber|password|
        |085774177740|Ratika2711|
