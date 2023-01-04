@Login
Feature: Playwright HRMS Login
Feature Description : To run Login tests with playwright library
Scenario Outline: Verfiy HRMS Login page
Given Login to HRMS '<username>' username and password '<password>'
Examples:
        | username                         | password   | 
        | abc@intonenetworks.com           | password1! | 
        | abcd@intonenetworks.com          | password1  | 
        | dotnetemployee@intonenetworks.com| password1  |
        | dotnetemployee@intonenetworks.com| password1! |
