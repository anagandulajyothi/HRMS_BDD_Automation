Feature: Playwright HRMS Asset
Feature Description : To run Login tests with playwright library

@Asset
Scenario: Verfiy HRMS Create Asset
Given Login to HRMS
Then Create Category
Then Create Subcategory
Then Create Item
Then Create Asset
Then Relogin
Then Approve Asset