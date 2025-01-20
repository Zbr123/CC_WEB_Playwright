Feature: Login Page

@run
Scenario: Login with valid credentials on DMS portal
Given I navigate to "https://newclearcapstg.wpenginepowered.com/data-requests/"
When user click on resident of the state form checkbo
When I enter valid credentials
And I click on the "Sign in" button
Then the additional information banner should be visible


