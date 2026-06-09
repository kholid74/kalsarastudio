import type { ImageMetadata } from 'astro';

import imgGaruda from '../assets/portfolio/project_garuda.png';
import imgBerkah from '../assets/portfolio/project_berkah_raya.png';
import imgLumaCo from '../assets/portfolio/project_luma_co.png';
import imgKlinikGigi from '../assets/portfolio/project_klinik_gigi.png';

export type ProjectStatus = 'Client Project' | 'Showcase Concept' | 'Coming Soon';

export type ProjectCategory =
  | 'Company Profile'
  | 'Landing Page'
  | 'F&B / Restaurant'
  | 'Clinic / Healthcare'
  | 'E-Commerce';

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  category: ProjectCategory;
  industry: string;
  type: string;
  summary: string;
  desc: string;
  challenge: string;
  solution: string;
  features: string[];
  decisions: string[];
  idealFor: string[];
  tags: string[];
  url: string;
  image: ImageMetadata;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: 'garuda-pariwisata',
    title: 'Garuda Pariwisata',
    status: 'Client Project',
    category: 'Company Profile',
    industry: 'Travel & Tourism',
    type: 'Company Profile Website',
    summary: 'Company profile untuk bisnis tour & travel yang membantu calon pelanggan memahami paket wisata dan inquiry via WhatsApp.',
    desc: 'Website company profile untuk bisnis tour & travel yang berfokus pada paket wisata Labuan Bajo — memudahkan calon pelanggan menemukan informasi dan melakukan reservasi via WhatsApp.',
    challenge: 'Bisnis travel membutuhkan website yang dapat menjelaskan paket, destinasi, dan jalur inquiry dengan cepat tanpa membuat calon pelanggan harus bertanya ulang dari nol.',
    solution: 'Struktur halaman dibuat untuk menonjolkan destinasi, benefit perjalanan, dan CTA WhatsApp yang mudah ditemukan sehingga calon pelanggan bisa langsung masuk ke percakapan booking.',
    features: [
      'Company profile structure',
      'Destination and package showcase',
      'WhatsApp booking CTA',
      'SEO-friendly content hierarchy',
      'Mobile-first layout',
    ],
    decisions: [
      'CTA WhatsApp dibuat mudah dijangkau karena proses penjualan travel biasanya membutuhkan konsultasi singkat.',
      'Konten paket dan destinasi diprioritaskan agar visitor cepat memahami pilihan perjalanan.',
      'Struktur heading dibuat SEO-friendly untuk mendukung pencarian organik jangka panjang.',
    ],
    idealFor: ['Tour & travel', 'Paket wisata lokal', 'Operator trip', 'Bisnis hospitality berbasis inquiry'],
    tags: ['Travel & Tourism', 'WhatsApp Booking', 'SEO-Friendly'],
    url: 'https://garudapariwisata.com',
    image: imgGaruda,
    imageAlt: 'Screenshot website Garuda Pariwisata',
  },
  {
    slug: 'berkah-raya-farm',
    title: 'Berkah Raya Farm',
    status: 'Client Project',
    category: 'Landing Page',
    industry: 'Food Product / UMKM',
    type: 'Product Landing Page',
    summary: 'Landing page produk lokal untuk memperkenalkan produk, membangun trust, dan mempermudah inquiry/pemesanan online.',
    desc: 'Landing page untuk produsen telur asin yang memperkenalkan produk, membangun kepercayaan calon pembeli, dan mempermudah proses pemesanan secara online.',
    challenge: 'UMKM produk lokal sering membutuhkan halaman yang sederhana namun kredibel untuk menjelaskan produk, keunggulan, dan cara pemesanan tanpa kompleksitas e-commerce penuh.',
    solution: 'Landing page difokuskan pada product story, keunggulan produk, trust content, dan CTA pemesanan yang jelas agar calon pembeli bisa mengambil keputusan lebih cepat.',
    features: [
      'Product value proposition',
      'Benefit-focused product sections',
      'WhatsApp inquiry flow',
      'Trust-building content',
      'Responsive product landing layout',
    ],
    decisions: [
      'Copywriting dibuat sederhana agar mudah dipahami pembeli non-teknis.',
      'CTA pemesanan ditempatkan setelah informasi produk dan trust section.',
      'Visual produk dibuat dominan agar halaman terasa lebih konkret dan tidak generik.',
    ],
    idealFor: ['UMKM makanan', 'Produk lokal', 'Produsen rumahan', 'Brand katalog sederhana'],
    tags: ['Food Business', 'UMKM', 'WhatsApp Inquiry'],
    url: 'https://berkahrayafarm.com',
    image: imgBerkah,
    imageAlt: 'Screenshot website Berkah Raya Farm',
  },
  {
    slug: 'luma-co-restaurant',
    title: 'Luma & Co. Restaurant',
    status: 'Showcase Concept',
    category: 'F&B / Restaurant',
    industry: 'Restaurant / F&B',
    type: 'Restaurant Website',
    summary: 'Showcase website restaurant modern dengan menu, ambience, review tamu, dan alur reservasi dalam satu pengalaman digital premium.',
    desc: 'Website restaurant modern dengan showcase menu, ambience, review tamu, dan alur reservasi yang membantu calon pelanggan memahami pengalaman makan sebelum melakukan booking.',
    challenge: 'Restaurant lokal membutuhkan website yang tidak hanya menampilkan menu, tetapi juga membangun rasa percaya dan desire sebelum pelanggan datang atau melakukan reservasi.',
    solution: 'Showcase ini dirancang dengan fokus pada menu, ambience, social proof, chef story, dan reservation flow sehingga calon pelanggan memahami experience sebelum booking.',
    features: [
      'Menu showcase with categories',
      'Reservation flow',
      'Ambience gallery',
      'Guest review section',
      'Chef/story section',
      'Mobile-first premium layout',
    ],
    decisions: [
      'CTA reservasi ditempatkan di hero dan closing section agar pengunjung tidak perlu mencari tombol booking.',
      'Menu dibuat mudah dipindai supaya pengunjung cepat memahami karakter hidangan.',
      'Gallery ambience dipakai untuk membangun emotional desire sebelum pengunjung melakukan reservasi.',
    ],
    idealFor: ['Restaurant', 'Cafe premium', 'Private dining', 'Bistro lokal', 'F&B brand dengan reservasi'],
    tags: ['Restaurant', 'Menu Showcase', 'Reservation Flow'],
    url: 'https://luna-co-restaurant.vercel.app/',
    image: imgLumaCo,
    imageAlt: 'Screenshot website Luma & Co. Restaurant',
  },
  {
    slug: 'klinik-gigi-senyum-sehat',
    title: 'Klinik Gigi Senyum Sehat',
    status: 'Showcase Concept',
    category: 'Clinic / Healthcare',
    industry: 'Clinic / Healthcare',
    type: 'Clinic Website',
    summary: 'Showcase website klinik gigi dengan layanan, profil dokter, artikel edukasi, informasi asuransi, dan alur booking online.',
    desc: 'Showcase website klinik gigi dengan struktur layanan, profil dokter, artikel edukasi, informasi asuransi, dan alur booking online untuk membantu pasien membuat janji lebih mudah.',
    challenge: 'Banyak klinik lokal masih mengandalkan WhatsApp, Instagram, atau Google Maps sehingga calon pasien sulit menemukan layanan, dokter, jadwal, asuransi, dan cara booking dalam satu tempat.',
    solution: 'Showcase ini menyusun website klinik sebagai pusat informasi dan booking: layanan jelas, profil dokter tersedia, edukasi kesehatan membantu SEO, dan CTA booking mudah dijangkau.',
    features: [
      'Online booking flow',
      'Service catalog',
      'Doctor profile section',
      'Health education articles',
      'Insurance information',
      'WhatsApp CTA',
      'Healthcare SEO structure',
    ],
    decisions: [
      'Informasi layanan dibuat dalam card agar mudah dipindai di mobile.',
      'Profil dokter ditampilkan untuk memperkuat trust sebelum pasien membuat janji.',
      'Artikel edukasi ditambahkan untuk membangun authority sekaligus membuka peluang SEO lokal.',
    ],
    idealFor: ['Klinik gigi', 'Klinik umum', 'Praktik dokter', 'Healthcare provider lokal'],
    tags: ['Clinic Website', 'Online Booking', 'Healthcare SEO'],
    url: 'https://klinik-gigi-platform.vercel.app/',
    image: imgKlinikGigi,
    imageAlt: 'Screenshot showcase website Klinik Gigi Senyum Sehat',
  },
];

export const categories = [
  'Semua',
  'Company Profile',
  'Landing Page',
  'F&B / Restaurant',
  'Clinic / Healthcare',
  'E-Commerce',
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
