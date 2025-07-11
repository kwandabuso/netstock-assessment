@web
Feature: Validation In A Table Of Results

  Scenario: Validation In A Table Of Results
    Given the user is on the Shady Meadows B&B page
    When the user selects checkin date
    And the user selects checkout date
    And the user clicks on the check availability button
    Then All available rooms must be displayed
    When the user clicks on the book now button
    Then the user is redirected to the book this room page
    When the use clicks on the Reserve now button
    And the user enters the first name
    And the user enters the last name
    And the user enters the email
    And the user enters the phone
    And the user clicks on Reserve now button
    Then a reservation  is done successfully
    # When the user views the results
    # Then correct results are displayed
# Scenario: Retrieve Search Results
# Given I am on the bbc website
# When I Search for "Sport in 2023"
# Then the search functionality to return at least 4 relevant results whenever someone searches for "Sport in 2023"
