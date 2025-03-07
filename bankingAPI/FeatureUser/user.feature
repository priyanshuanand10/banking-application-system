
@tag
Feature: Login deposite withdraw view history functionality

  @tag1
  Scenario: User Can login to its account and can withdraw deposite and view history of there transiction
    Given Chrome browser should open and user navigates to idfc user login page
    And user gives correct credentials 
    And User Withdraw Some Money
    And User Deposites Some money
    And User Clicks on Transiction History
		Then User Can See change in the balance
		 