Feature: Validate Product and Plan selection EndToEnd flow

  Scenario: Verify the selected Plan for the NordVPN product is visible on Payments Page
    Given I navigate to the Nord Products selection Page
    When I select the NordVPN product
    Then I navigate to the Login Page
    Then I navigate back to the Plan Selection Page
    Then I select the 1-year Plan
    Then I navigate to the Continue to Payment Page
    Then I should see the expected Plan amount is visible on Payment Page