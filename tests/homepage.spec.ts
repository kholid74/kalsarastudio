import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test('has correct H1 headline', async ({ page }) => {
    await page.goto('/');
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toContainText('Website dan Sistem Digital');
  });

  test('primary CTA links to WhatsApp', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByRole('link', { name: /Konsultasi Gratis/i }).first();
    const href = await cta.getAttribute('href');
    expect(href).toContain('wa.me');
  });

  test('secondary CTA links to services section', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByRole('link', { name: /Lihat Layanan/i });
    const href = await cta.getAttribute('href');
    expect(href).toContain('#layanan');
  });
});
