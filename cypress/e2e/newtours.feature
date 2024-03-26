Feature: newtours validation

Background: 
    Given open newtours app
@smoke
Scenario: Verify user can login successfully with valid account
    When enter valid account
        |username|password|
        |admin|admin|
    And click Submit button
    Then verify title of the page should be 'Login: Mercury Tours'
@test
Scenario: Verify user can NOT login with no-existing account
    When enter valid account
        |username|password|
        |testingbyphat|tester|
    And click Submit button
    Then verify title of the page should be 'Welcome: Mercury Tours'
# way to run with TAG
# npx cypress run -e TAGS='@smoke'
# npx cypress run -e TAGS='@smoke and not @test'
# should be NOT display steps in browser