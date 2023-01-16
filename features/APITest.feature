Feature: Validate Client Localization Data

  Scenario: Verify the Client Localization Data
    When I hit the endpoint to get the client locazation data
    Then I should receive the status code 200
    Then I validate the response json schema is correct
    Then I validate the ip is "95.90.240.214"
    Then I validate the country is "Germany"
    Then I validate the country_code is "DE"
    Then I validate the city is "Berlin"
    Then I validate the isp is "Vodafone Germany"
    Then I validate the isp_asn is 3209
    Then I validate the protected is false
    Then I validate the longitude is 13.4151
    Then I validate the latitude is 52.5128
    Then I validate the state_code is "BE"
    Then I validate the zip_code is "10179"
