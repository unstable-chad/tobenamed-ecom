// Single place to edit the business details and landing page copy.
// Everything below is placeholder content — swap it for the real thing.

export const site = {
  name: 'ToBeNamed',
  tagline: 'We build and grow online stores.',
  description:
    'An e-commerce studio helping brands launch, sell and scale online — from store setup to marketing that actually converts.',

  contact: {
    email: 'hello@example.com',
    // International format, digits only (no +, spaces or dashes). e.g. 923001234567
    whatsapp: '923001234567',
    whatsappMessage: "Hi! I'd like to know more about your services.",
  },

  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],
};

export const whatsappLink = (message = site.contact.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const emailLink = (subject = `Enquiry from ${site.name} website`) =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'How we work', href: '/#process' },
  { label: 'Brands', href: '/#brands' },
];

export const stats = [
  { value: '40+', label: 'Brands served' },
  { value: '3x', label: 'Avg. revenue growth' },
  { value: '5 yrs', label: 'In e-commerce' },
];

// `icon` is a key in src/components/Icon.astro
export const services = [
  {
    icon: 'store',
    title: 'Store setup',
    body: 'Shopify, WooCommerce or custom — a fast, good-looking store that is ready to take orders.',
  },
  {
    icon: 'camera',
    title: 'Product content',
    body: 'Product photography, listings and copy that make people want to hit “add to cart”.',
  },
  {
    icon: 'chart',
    title: 'Performance marketing',
    body: 'Meta and Google ads managed around one number: profitable sales, not vanity clicks.',
  },
  {
    icon: 'megaphone',
    title: 'Social media',
    body: 'Content calendars, reels and community management that keep your brand top of mind.',
  },
  {
    icon: 'palette',
    title: 'Brand identity',
    body: 'Logos, packaging and visual systems that look the part across every touchpoint.',
  },
  {
    icon: 'wrench',
    title: 'Ongoing management',
    body: 'Inventory, updates, fixes and reporting handled month to month so you can focus on the product.',
  },
] as const;

export const process = [
  { title: 'Talk', body: 'A quick call or WhatsApp chat to understand your brand and goals.' },
  { title: 'Plan', body: 'A clear proposal with scope, timeline and pricing — no surprises.' },
  { title: 'Build', body: 'We get to work and keep you updated at every milestone.' },
  { title: 'Grow', body: 'Launch, measure and keep improving what brings in sales.' },
];

// Brands shown in the landing page strip. Add `logo: '/brands/acme.svg'` (file in public/brands/)
// once you have logos; until then the name is rendered as text.
export const brands: { name: string; logo?: string }[] = [
  { name: 'Brand One' },
  { name: 'Brand Two' },
  { name: 'Brand Three' },
  { name: 'Brand Four' },
  { name: 'Brand Five' },
  { name: 'Brand Six' },
];

export const featuredReview = {
  quote:
    'They took our store from zero to our best month ever in under a quarter. Fast, honest and genuinely invested in our growth.',
  name: 'Client Name',
  role: 'Founder, Brand One',
};
