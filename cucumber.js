let options = [
'--require-module ts-node/register' , // Load TypeScript module
'--require ./pages/*.page.ts',
'--require ./steps/*.steps.ts', // Load step definitions
'--format progress', // Load custom formatter
'--format html:./Reports/cucumber_report.html',
'--format json:./Reports/cucumber_report.json',
'--format ./reporter.js',
'tags={"@Login","@Asset"}'

]. join(' ');

let run_features = [
'./features/', // Specify our feature files
options,
] . join(' ');
module. exports = {
test_runner: run_features
};
