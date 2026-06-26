import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

  async getTitleText() {
    return await this.page.title();
  }

  async clickAboutLink() {
    await this.page.click('text=About');
  }

  async getCurrentUrl() {
    return this.page.url();
  }
}