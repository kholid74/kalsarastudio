export const site = {
  name:        'Kalsara Digital Studio',
  tagline:     'Software Engineering Studio · Indonesia',
  url:         'https://kalsara.studio',
  whatsapp:    '6281234567890',
  email:       'hello@kalsara.studio',
  description: 'Website dan sistem digital yang dibangun untuk mendukung pertumbuhan bisnis. Dari company profile hingga custom web application.',
  ogImage:     '/og-image.png',

  waMessage: 'Halo Kalsara, saya ingin konsultasi tentang website/aplikasi untuk bisnis saya.',

  waUrl(message?: string): string {
    const msg = message ?? this.waMessage;
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(msg)}`;
  },

  nav: [
    { label: 'Layanan',  href: '#layanan'  },
    { label: 'Proses',   href: '#proses'   },
    { label: 'Harga',    href: '#harga'    },
    { label: 'FAQ',      href: '#faq'      },
  ],
} as const;
