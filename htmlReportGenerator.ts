const reporter = require('cucumber-html-reporter')

 var options={
 theme:'bootstrap',
 jsonfile:'Reports/cucumber_report.json',
 output:'Reports/cucumber_report.html' ,
 playwright:'Reports/playwright.html',
 screenshotsDirectory:'./Screenshots/',
 storeScreenshots:true,
 reportSuiteAsScenarios:true,
 launchreport:true,
 metadata:{
  "Test environment":"dev",
}
};
 reporter.generate(options)