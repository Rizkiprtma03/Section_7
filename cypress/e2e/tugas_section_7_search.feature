Feature: Search keywords in the Zero Bank website SearchBar 

    As a valid user
    I want to search the data based on my keyword on the Application


    Scenario: Search Valid Data
        Given I on Zero Bank homepage
        And I am fill search text box with "Account" keywords
        When I push enter
        Then I should a list that match with my keywords

    Scenario: Search Invalid Data
        Given I on Zero Bank homepage
        And I am fill search text box with "assdaas" keywords
        When I push enter
        Then I should empty list of my search