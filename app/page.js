'use client'

import { useState } from 'react';
import PrimaryBtnLink from '@/components/buttons/PrimaryBtnLink';
import TransparentBtnLink from '@/components/buttons/TransparentBtnLink';
import ServicesCard from '@/components/cards/ServicesCard';

import heroImg1 from '@/public/imgs/hero-img-1.jpg';
import heroImg3 from '@/public/imgs/hero-img-3.jpg';
import Image from 'next/image';
import clsx from 'clsx';

export default function Home() {
  const [activeTab, setActiveTab] = useState('webdev');

  const tabs = [
    { id: 'webdev', label: 'Web Development' },
    { id: 'seo', label: 'SEO and Marketing' },
    { id: 'business', label: 'Business Support' }
  ];

  const services = {
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

  return (
    <main className="flex flex-col flex-wrap justify-between items-center p-4 mx-auto mt-16 max-w-screen-xl">
      <div className="my-20 hero">
        <div>
          <div className="flex items-center px-4 py-3 mb-8 bg-blue-100 rounded-full shadow-md max-w-fit">
            <span className='mr-2 w-2 h-2 text-5xl text-transparent bg-blue-600 rounded-full'>.</span>
            <h1 className='text-base text-[#232BB1] font-lexend font-semibold tracking-wide'>MainStreet Digital - Your Business, Our Digital Expertise</h1>
          </div>

          <h2 className="mb-6 max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-lexend">Transform Your Business with Expert Digital Solutions</h2>
          <p className="mb-4 max-w-2xl font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-600 font-inter">Elevate your online presence with our comprehensive digital services tailored for small businesses.</p>

          <p className="mb-6 max-w-2xl font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-600 font-inter">We combine cutting-edge technology and big-agency expertise with a deep understanding of the digital landscape to boost your online presence, connect you with more customers, and empower your business to succeed online.</p>
          <div className="flex flex-wrap gap-4">
            <PrimaryBtnLink size="md" href="/contact" className="group">
              Get Started
              <svg className="w-6 h-6 transition-all text-currentColor dark:text-white group:hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </PrimaryBtnLink>
            <TransparentBtnLink href="/services">Learn More</TransparentBtnLink>
          </div>
        </div>

        <div className="grid relative grid-cols-1 gap-4 md:grid-cols-2">
          <div className="hidden md:block relative w-full h-[300px] md:h-[400px]">
            <Image
              src={heroImg1}
              alt="Hero image 1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover rounded-lg"
              quality={90}
            />
          </div>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={heroImg3}
              alt="Hero image 3"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover rounded-lg"
              quality={90}
            />
          </div>
        </div>
      </div>

      <section className="py-16 w-full">
        <h2 className="mb-12 text-4xl font-bold text-center font-lexend">Our Services</h2>

        {/* Tabs - visible only on md and above */}
        <div className="hidden md:block">
          <div className="flex justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  'px-6 py-3 font-semibold transition-colors duration-200 font-lexend text-lg',
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services[activeTab].map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                href={service.href}
                category={service.category}
                icon={service.icon}
              >
                {service.description}
              </ServicesCard>
            ))}
          </div>
        </div>

        {/* Mobile view - all services listed */}
        <div className="grid grid-cols-1 gap-8 md:hidden">
          {Object.values(services).flat().map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              href={service.href}
              category={service.category}
              icon={service.icon}
            >
              {service.description}
            </ServicesCard>
          ))}
        </div>
      </section>
    </main>
  );
}
