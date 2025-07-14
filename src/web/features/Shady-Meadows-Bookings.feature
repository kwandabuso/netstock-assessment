
@web
Feature: Shady meadows bookings

  Scenario: validate booking using valid data
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

  Scenario: validate error when booking with no email
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
    # And the user enters the email
    And the user enters the phone
    And the user clicks on Reserve now button
    Then error is displayed
