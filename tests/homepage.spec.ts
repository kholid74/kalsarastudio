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

test.describe('Why Kalsara Section', () => {
  test('shows 5 differentiator points', async ({ page }) => {
    await page.goto('/');
    const points = page.locator('#mengapa [data-point]');
    await expect(points).toHaveCount(5);
  });
});

test.describe('Process Section', () => {
  test('shows 7 process steps', async ({ page }) => {
    await page.goto('/');
    const steps = page.locator('#proses [data-step]');
    await expect(steps).toHaveCount(14);
  });
});

test.describe('Pricing Section', () => {
  test('shows 3 pricing cards', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('#harga [data-plan]');
    await expect(cards).toHaveCount(3);
  });

  test('highlighted plan CTA links to WhatsApp', async ({ page }) => {
    await page.goto('/');
    const featuredCta = page.locator('[data-plan="tumbuh"] a');
    const href = await featuredCta.getAttribute('href');
    expect(href).toContain('wa.me');
  });
});

test.describe('FAQ Section', () => {
  test('shows 6 FAQ items', async ({ page }) => {
    await page.goto('/');
    const items = page.locator('#faq details');
    await expect(items).toHaveCount(6);
  });

  test('FAQ accordion opens on click', async ({ page }) => {
    await page.goto('/');
    const firstSummary = page.locator('#faq details summary').first();
    const firstDetails = page.locator('#faq details').first();
    await expect(firstDetails).not.toHaveAttribute('open');
    await firstSummary.click();
    await expect(firstDetails).toHaveAttribute('open');
  });
});

test.describe('Final CTA Section', () => {
  test('final CTA links to WhatsApp', async ({ page }) => {
    await page.goto('/');
    const cta = page.locator('#cta a[href*="wa.me"]');
    await expect(cta).toBeVisible();
  });
});
