

Feature: To Test Login and Add User Functionality
  Scenario: To Add An User from Admin Account
     Given Open chrome browser
    And open banking app
    And give admin credentials
    And Click on Add User 
    And Fill the Form and press send
    And Admin should land on create password page
    And Admin Creats the password for the user 
    And Click on create
    Then User Should See the new user on Show Details of All User page
    
    
    
    