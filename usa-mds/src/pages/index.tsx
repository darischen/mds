// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/careers', label: 'Careers' },
  { href: '/forms', label: 'Forms' },
  { href: '/contact', label: 'Contact' },
  { href: '/search', label: 'Search' },
  { href: '/sitemap', label: 'Site Map' },
  { href: '/accreditations', label: 'Accreditations' }
];

const Home: NextPage = () => (
  <>
    <Head>
      <title>Molecular Diagnostic Services, Inc.</title>
      <meta charSet="UTF-8" />
    </Head>

    <nav className="navbar">
      <div className="nav-container">
        <Link href="/">
          <img src="/images/header3.gif" alt="MDS Logo" className="logo" />
        </Link>
        <div className="nav-links">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>

    <main className="main-content">
      <section className="intro">
        <h1>Molecular Biology Services</h1>
        <p>
          Molecular Diagnostic Services, Inc., an independent contract service organization,
          has been operating since 1992 providing comprehensive cellular and molecular biology,
          toxicology, microbiology, sterility assurance, and biocompatibility services to pharmaceutical,
          biotechnology, medical device, and research institutions. The services are designed for clients'
          needs, both GLP-compliant for regulatory submission and non-GLP screening for product research
          and development.
        </p>
        <Link href="/contact" className="cta-button">
          Contact Us
        </Link>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <img src="/images/moleculesmall.gif" alt="Molecules" />
          <h2>Molecular Diagnostics</h2>
          <p>Comprehensive molecular assays for research and regulatory needs.</p>
        </div>
        <div className="service-card">
          <img src="/images/rrdahead.gif" alt="RRDA" />
          <h2>Animal Testing Services</h2>
          <p>AAALAC, USDA, NIH accredited vivarium for GLP and non-GLP studies.</p>
        </div>
      </section>
    </main>

    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Molecular Diagnostic Services, Inc.</p>
    </footer>

    <style jsx>{`
      /* Global resets */
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #333;
        background: #f9f9f9;
      }

      .navbar {
        background: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        position: sticky;
        top: 0;
        z-index: 1000;
      }
      .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1rem;
      }
      .logo {
        height: 50px;
      }
      .nav-links {
        display: flex;
        gap: 2rem;
      }
      .nav-link {
        text-decoration: none;
        color: #555;
        font-weight: 500;
        padding: 0.5rem 0;
      }
      .nav-link:hover {
        color: #0070f3;
      }

      .main-content {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 0 1rem;
      }
      .intro {
        text-align: center;
        margin-bottom: 3rem;
      }
      .intro h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      .intro p {
        font-size: 1.125rem;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto 2rem;
      }
      .cta-button {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background: #0070f3;
        color: #fff;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 600;
      }
      .cta-button:hover {
        background: #005bb5;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 2rem;
      }
      .service-card {
        background: #fff;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        text-align: center;
      }
      .service-card img {
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
      }
      .service-card h2 {
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
      }

      .footer {
        text-align: center;
        padding: 2rem 0;
        background: #fff;
        margin-top: 4rem;
        box-shadow: 0 -1px 3px rgba(0,0,0,0.05);
      }
    `}</style>
  </>
);

export default Home;
