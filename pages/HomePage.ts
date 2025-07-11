import { expect } from "@playwright/test";
import { page } from "../src/web/hooks/hooks";
import { log } from "console";
const fs = require("fs");

export class HomePage {
  public hero = '//section[@class="hero py-5"]';
  public checkin = '//label[@for="checkin"]/following-sibling::div';
  public checkout = '//label[@for="checkout"]/following-sibling::div';
  public checkinDatePick = '//div[@role="option"]';
  public checkinSelectedDatePick = '//div[@aria-selected="true"]';
  public checkAvailability = 'section[id="booking"] button';
  public bookNow = '//a[text() = "Book now"][1]';
  public header = "//h1";
  public reserve = "//button[contains(@class,'btn btn-primary')]";
  public firstName = "input[name='firstname']";
  public lastname = "input[name='lastname']";
  public email = "input[name='email']";
  public phone = "input[name='phone']";
  public reserveNow = "//button[contains(@class,'btn btn-primary')]";
  public success = "//h2[contains(@class,'card-title')]";
  public rooms = "//section[@id='rooms']//div[contains(@class,'col')]";
  public SelectedRoomImg = "//img[@alt='Room Image']";
  public emailMissingErrorMessage = "//div[@class='alert alert-danger']//li";

  async selectCheckinDate() {
    await page.click(this.checkin);

    const dateSelected = await page.$(this.checkinSelectedDatePick);

    const dates = await page.$$(this.checkinDatePick);

    let getMonth = await dateSelected?.getAttribute("aria-label");
    getMonth = getMonth?.split(" ")[3].trim();

    const currentMonth = new Date().getMonth(); // getMonth() is zero-based
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    for (const date of dates) {
      let datePickMonth = await date?.getAttribute("aria-label");
      datePickMonth = datePickMonth ? datePickMonth.split(" ")[3].trim() : null;

      if (getMonth === monthNames[currentMonth] && getMonth === datePickMonth) {
        if (dateSelected) {
          const dateText = await date.textContent();
          const selectedDateText = dateSelected
            ? await dateSelected.textContent()
            : null;

          if (
            dateText &&
            selectedDateText &&
            parseInt(dateText) >= parseInt(selectedDateText)
          ) {
            await date.click();
            break;
          }
        }
      }
    }
  }

  async selectCheckout(daysStay: number) {
    await page.click(this.checkout);

    const dateSelected = await page.$(this.checkinSelectedDatePick);

    const dates = await page.$$(this.checkinDatePick);

    let getMonth = await dateSelected?.getAttribute("aria-label");
    getMonth = getMonth?.split(" ")[3].trim();

    const currentMonth = new Date().getMonth(); // getMonth() is zero-based
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    for (const date of dates) {
      let datePickMonth = await date?.getAttribute("aria-label");
      datePickMonth = datePickMonth ? datePickMonth.split(" ")[3].trim() : null;

      if (getMonth === monthNames[currentMonth] && getMonth === datePickMonth) {
        if (dateSelected) {
          const dateText = await date.textContent();
          const selectedDateText = dateSelected
            ? await dateSelected.textContent()
            : null;

          if (
            dateText &&
            selectedDateText &&
            parseInt(dateText) >= parseInt(selectedDateText)
          ) {
            await page.click(this.checkinSelectedDatePick);
            break;
          }
        }
      }
    }
  }
  async isHomePageDisplayed() {
    await expect(page.locator(this.hero)).toBeVisible();
  }
  async isRoomsDisplayed() {
    const isRoomsDisplayed = await page.isVisible(this.rooms);
    expect(isRoomsDisplayed).toBeTruthy();
  }

  async isSelectedRoomsDisplayed() {
    await expect(page.locator(this.SelectedRoomImg)).toBeVisible();
  }

  async clickAvailability() {
    await page.click(this.checkAvailability);
  }
  async clickBookNow() {
    await page.click(this.bookNow);

    const isHeaderDisplayed = await page.isVisible(this.header);
  }

  async clickReserveNow() {
    await page.click(this.reserve);
  }
  async validateErrorMessage() {
    await expect(page.locator(this.emailMissingErrorMessage)).toHaveText(
      "must not be empty"
    );
  }
}
