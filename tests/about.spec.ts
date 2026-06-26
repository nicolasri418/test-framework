import { test, expect } from '@playwright/test';
import { AboutPage } from '../page-objects/AboutPage';

test.describe('About Page Tests', () => {
  let aboutPage: AboutPage;

  test.beforeEach(async ({ page }) => {
    aboutPage = new AboutPage(page);
    await aboutPage.navigate();
  });

  test('should display the correct heading', async () => {
    const heading = await aboutPage.getHeadingText();
    await expect(heading).toContain('About Propel Projects');
  });
});