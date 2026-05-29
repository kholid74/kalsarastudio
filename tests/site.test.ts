import { describe, it, expect } from 'vitest';
import { site } from '../src/config/site';

describe('site config', () => {
  it('waUrl returns valid WhatsApp deep link', () => {
    const url = site.waUrl();
    expect(url).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
  });

  it('waUrl encodes the message', () => {
    const url = site.waUrl();
    expect(url).not.toContain(' ');
  });

  it('waUrl with custom message', () => {
    const url = site.waUrl('Test message here');
    expect(url).toContain(encodeURIComponent('Test message here'));
  });
});
