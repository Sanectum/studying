import { test, expect } from "@playwright/test";

test.describe("login tests", () => {
  test("negative login", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page
      .getByRole("textbox", { name: "Username" })
      .fill("standard_user1");
    await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("div.error-message-container h3")).toContainText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  const validUsers = [
    "standard_user",
    "problem_user",
    "performance_glitch_user",
    "error_user",
    "visual_user",
  ];

  for (const user of validUsers) {
    test(`valid login ${user}`, async ({ page }) => {
      await page.goto("https://www.saucedemo.com/");
      await page.getByRole("textbox", { name: "Username" }).fill(user);
      await page
        .getByRole("textbox", { name: "Password" })
        .fill("secret_sauce");
      await page.getByRole("button", { name: "Login" }).click();
      await expect(page).toHaveURL(/inventory.html/);
    });
  }
});
