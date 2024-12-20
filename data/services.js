export const tabs = [
  { id: 'webdev', label: 'Web Development' },
  { id: 'seo', label: 'SEO and Marketing' },
  { id: 'business', label: 'Business Support' }
];

export const services = {
  webdev: [
    {
      title: "Custom Website Design & Development",
      href: 'services#webdev',
      category: "Web Development",
      icon: "development.png",
      description: "Get a custom-designed website that perfectly represents your brand and meets your specific needs."
    },
    {
      title: "E-commerce and WooCommerce Solutions",
      href: 'services#ecommerce',
      category: "Web Development",
      icon: "online.png",
      description: "Launch your online store with powerful e-commerce solutions tailored to your business including secure payment gateways(e.g M-pesa, PayPal, and Stripe) and inventory management systems."
    },
    {
      title: "Website Redesign",
      href: 'services#redesign',
      category: "Web Development",
      icon: "design.png",
      description: "We will transform your existing website with a modern, user-friendly design that converts visitors into customers."
    }
  ],
  seo: [
    {
      title: "Local SEO",
      href: 'services#seo',
      category: "SEO and Marketing",
      icon: "quality.png",
      description: "We will help improve your local search rankings and attract more customers from your area."
    },
    {
      title: "Email Marketing Setup",
      href: 'contact',
      category: "SEO and Marketing",
      icon: "web-development.png",
      description: "We will build and engage your audience with effective email marketing campaigns."
    },
    {
      title: "Online Booking & Appointment Systems",
      href: 'contact',
      category: "SEO and Marketing",
      icon: "email.png",
      description: "We will help you streamline your booking process with an efficient online scheduling system. We implement convenient scheduling tools that allow customers to book services directly through your website."
    }
  ],
  business: [
    {
      title: "Website and Database Migration",
      href: 'services#migration',
      category: "Business Support",
      icon: "server.png",
      description: "We will safely migrate your website and data from your existing hosting provider to a new one with minimal downtime and zero data loss."
    },
    {
      title: "Website Maintenance & Support",
      href: 'services#maintenance',
      category: "Business Support",
      icon: "maintenance.png",
      description: "We will help keep your website running smoothly with our comprehensive website maintenance services."
    },
    {
      title: "Website Speed Optimization",
      href: 'contact',
      category: "Business Support",
      icon: "percentage.png",
      description: "We will boost your website's performance and user experience with our website (including WordPress) optimization services."
    }
  ]
};

export const servicesPageData = {
  title: "Our Services, Tailored for your Business.",
  description: "Custom Web Development and Marketing Solutions for Growing Businesses.",
  allServices: [
    {
      id: 'webdev',
      title: 'Custom Website Design & Development',
      category: 'Web Development',
      icon: 'development.png',
      description: "WordPress and Laravel Websites that capture your brand's essence and provide an exceptional user experience, optimized for both desktop and mobile devices.",
    },
    {
      id: 'ecommerce',
      title: 'E-commerce and WooCommerce Solutions',
      category: 'Web Development',
      icon: 'online.png',
      description: 'Robust WooCommerce and Laravel online stores that turn browsers into buyers, featuring secure payment gateways(including M-pesa) and inventory management systems.',
    },
    {
      id: 'redesign',
      title: 'Website Redesign',
      category: 'Web Development',
      icon: 'design.png',
      description: 'Is your website looking a bit dated? Does it no longer perform as expected? We can redesign it for you!',
    },
    {
      id: 'seo',
      title: 'Local SEO',
      category: 'SEO and Marketing',
      icon: 'quality.png',
      description: 'Boost your visibility in local search results, helping nearby customers find your business when they need it most.',
    },
    {
      id: 'email',
      title: 'Email Marketing Setup',
      category: 'SEO and Marketing',
      icon: 'web-development.png',
      description: 'Design and implement email campaigns that nurture leads and keep your customers informed about your latest offerings.',
    },
    {
      id: 'booking',
      title: 'Online Booking & Appointment Systems',
      category: 'SEO and Marketing',
      icon: 'email.png',
      description: 'Implement convenient scheduling tools that allow customers to book services directly through your website.',
    },
    {
      id: 'migration',
      title: 'Website and Database Migration',
      category: 'Business Support',
      icon: 'server.png',
      description: 'Seamlessly transition your existing website or database to a new platform.',
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance & Support',
      category: 'Business Support',
      icon: 'maintenance.png',
      description: 'Keeping your site secure, up-to-date, and running smoothly with regular maintenance and dedicated support.',
    },
    {
      id: 'speed',
      title: 'Website Speed Optimization',
      category: 'Business Support',
      icon: 'percentage.png',
      description: "Enhance your site's loading speed to improve user experience and search engine rankings.",
    },
  ]
};
