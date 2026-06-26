import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test.describe('Home Page Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('should display the title', async () => {
    const title = await homePage.getTitleText();
    await expect(title).toBe('Welcome to Propel Projects');
  });

  test('should navigate to the about page', async () => {
    await homePage.clickAboutLink();
    await expect(homePage.getCurrentUrl()).toBe('/about');
  });
});