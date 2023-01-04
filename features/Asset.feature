Feature: Playwright HRMS Asset
Feature Description : To run Login tests with playwright library

@Asset
Scenario: Verfiy HRMS Create Asset
Given Login to HRMS
And Techsupport Employee Creates Category
And Techsupport Employee Creates Subcategory
And Techsupport Employee Creates Item
And Techsupport Employee Creates Asset
And Relogin
Then Techsupport HOD Approve Asset