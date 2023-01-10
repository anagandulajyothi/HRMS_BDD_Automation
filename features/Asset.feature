Feature: Playwright HRMS Asset
Feature Description : To run Login tests with playwright library
@Asset
Scenario: Verfiy HRMS Create Asset
And Add skill
And Techsupport Employee Creates Category
And Techsupport Employee Creates Subcategory
And Techsupport Employee Creates Item
And Techsupport Employee Creates Asset
And Relogin "techsupporthod@intonenetworks.com" username and password "Password1!"
Then Techsupport HOD Approve Asset