import { expect } from "@playwright/test";
import { page } from "../src/web/hooks/hooks";
import { log } from "console";
const fs = require("fs");

export class ReservePage {
  public checkin = '//label[@for="checkin"]/following-sibling::div';
  public checkout = '//label[@for="checkout"]/following-sibling::div';
  public checkinDatePick = '//div[@role="option"]';
  public checkinSelectedDatePick = '//div[@aria-selected="true"]';
  public checkAvailability = 'section[id="booking"] button';
  public bookNow = '//a[text() = "Book now"][1]';
  public header = "//h1";
  public reserve = "#doReservation";
  public firstName = "input[name='firstname']";
  public lastname = "input[name='lastname']";
  public email = "input[name='email']";
  public phone = "input[name='phone']";
  public reserveNow = "//button[contains(@class,'btn btn-primary')]";
  public success = "//h2[contains(@class,'card-title')]";

  async clickCheckAvailability() {
    await page.fill(this.firstName, "Kwanda");
    await page.fill(this.lastname, "Buso");
    await page.fill(this.email, "kwanda@gmail.com");
    await page.fill(this.phone, "083584256956");
    await page.click(this.reserveNow);
    const isSuccess = await page.isVisible(this.success);
    expect(isSuccess).toBeTruthy();
  }
  async enterFirstName() {
    await page.fill(this.firstName, "Kwanda");
  }
  async enterLastName() {
    await page.fill(this.lastname, "Buso");
  }
  async enterEmail() {
    await page.fill(this.email, "kwanda@gmail.com");
  }
  async enterPhone() {
    await page.fill(this.phone, "083584256956");
  }
  async clickReserveButton() {
    await page.click(this.reserveNow);
    const isSuccess = await page.isVisible(this.success);
    expect(isSuccess).toBeTruthy();
  }

  async validateSuccessMessage() {
    const isSuccess = await page.isVisible(this.success);
    expect(isSuccess).toBeTruthy();
  }
}
