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

test.describe('Founder Section', () => {
  test('shows founder name heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Halo, saya Kholid Putra/i })).toBeVisible();
  });

  test('shows 8+ experience stat', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('#founder');
    await expect(section.getByText(/8\+/).first()).toBeVisible();
  });
});

test.describe('Services Section', () => {
  test('shows 4 service cards', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('#layanan [data-service]');
    await expect(cards).toHaveCount(4);
  });

  test('Custom App card is visually distinct (dark)', async ({ page }) => {
    await page.goto('/');
    const customCard = page.locator('[data-service="custom-app"]');
    await expect(customCard).toBeVisible();
  });
});
