const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",  // Themes: 'bootstrap', 'hierarchy', 'foundation', 'simple'
  jsonFile: "reports/cucumber-report.json",
  output: "reports/cucumber-report.html",
  reportSuiteAsScenarios: true,  // Groups steps under scenarios
  launchReport: true,  // Opens report automatically after generation
  scenarioTimestamp: true, // Adds timestamps
  metadata: {
    "Test Environment": "QA",
    "Browser": "Chromium",
    "Platform": "Windows",
  },
  screenshotsDirectory: "reports/screenshots/",
  storeScreenshots: true, // Stores attached screenshots in the report
};

reporter.generate(options);
