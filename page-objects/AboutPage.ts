import { Page } from '@playwright/test';

export class AboutPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/about');
  }

  async getHeadingText() {
    return this.page.textContent('h1');
  }
}