import ServicesCard from '@/components/cards/ServicesCard';

export default function Services() {
    return (
        <main className="flex flex-col flex-wrap justify-between max-w-screen-xl p-4 mx-auto mt-20 services">
            <h2 className='mb-4 text-5xl font-bold leading-tight capitalize font-lexend'>
                Our Services, <br /> Tailored for your Business.
            </h2>
            <p className='mb-8 leading-relaxed text-gray-600 text-md font-inter'>
                Custom Web Development and Marketing Solutions for Growing Businesses.
            </p>

            <div className="services-cards-horizontal">

            <ServicesCard title="Custom Website Design & Development" href='contact' category="Web Development" icon="development.png" horizontal id="webdev">
                WordPress and Laravel Websites that capture your brand&apos;s essence and provide an exceptional user experience, optimized for both desktop and mobile devices.
            </ServicesCard>

            <ServicesCard id="ecommerce" title="E-commerce and WooCommerce Solutions " href='contact' category="Web Development" icon="online.png" horizontal odd>
                Robust WooCommerce and Laravel online stores that turn browsers into buyers, featuring secure payment gateways(including M-pesa) and inventory management systems.
            </ServicesCard>

            <ServicesCard id="redesign" title="Website Redesign " href='contact' category="Web Development" icon="design.png" horizontal>
                Is your website looking a bit dated? Does it no longer perform as expected? We can redesign it for you!
            </ServicesCard>

            <ServicesCard  id="seo" title="Local SEO" href='contact' category="SEO and Marketing" icon="quality.png" horizontal odd>
                Boost your visibility in local search results, helping nearby customers find your business when they need it most.
            </ServicesCard>

            <ServicesCard id="email" title="Email Marketing Setup" href='contact' category="SEO and Marketing" icon="web-development.png" horizontal>
                Design and implement email campaigns that nurture leads and keep your customers informed about your latest offerings.
            </ServicesCard>

            <ServicesCard  id="booking" title="Online Booking & Appointment Systems" href='contact' category="SEO and Marketing" icon="email.png" horizontal odd>
                Implement convenient scheduling tools that allow customers to book services directly through your website.
            </ServicesCard>

            <ServicesCard  id="migration" title="Website and Database Migration " href='contact' category="Business Support" icon="server.png" horizontal>
                Seamlessly transition your existing website or database to a new platform.
            </ServicesCard>

            <ServicesCard  id="maintenance" title="Website Maintenance & Support " href='contact' category="Business Support" icon="maintenance.png" horizontal odd>
                Keeping your site secure, up-to-date, and running smoothly with regular maintenance and dedicated support.
            </ServicesCard>

            <ServicesCard  id="speed" title="Website Speed Optimization" href='contact' category="Business Support" icon="percentage.png" horizontal>
                Enhance your site&apos;s loading speed to improve user experience and search engine rankings.
            </ServicesCard>
            </div>
      </main>
    );
}