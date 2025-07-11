import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { homePage, reservePage } from "../hooks/hooks";
import { expect } from "@playwright/test";

setDefaultTimeout(100 * 100000);
let endpoint: string;
let response: Response | undefined;
let numberOfCountries: number;

Given("the user is on the Shady Meadows B&B page", async function () {
  await homePage.isHomePageDisplayed();
});

When("the user selects checkin date", async function () {
  await homePage.selectCheckinDate();
});

When("the user selects checkout date", async function () {
  await homePage.selectCheckout(2);
});

When("the user clicks on the check availability button", async function () {
  await homePage.clickAvailability();
});

Then("All available rooms must be displayed", async function () {
  await homePage.isRoomsDisplayed();
});

When("the user clicks on the book now button", async function () {
  await homePage.clickBookNow();
});

Then("the user is redirected to the book this room page", async function () {
  await homePage.isSelectedRoomsDisplayed();
});

When("the use clicks on the Reserve now button", async function () {
  await homePage.clickReserveNow();
});

When("the user enters the first name", async function () {
  await reservePage.enterFirstName();
});

When("the user enters the last name", async function () {
  await reservePage.enterLastName();
});

When("the user enters the email", async function () {
  await reservePage.enterEmail();
});

When("the user enters the phone", async function () {
  await reservePage.enterPhone();
});

When("the user clicks on Reserve now button", async function () {
  await reservePage.clickReserveButton();
});

Then("a reservation  is done successfully", async function () {
  await reservePage.validateSuccessMessage();
});
Then("error is displayed", async function () {
  await homePage.validateErrorMessage();
});
