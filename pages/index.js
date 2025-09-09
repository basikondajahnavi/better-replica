import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Head>
        <title>Better — Replica</title>
        <meta name="description" content="Smarter home loans, simplified for everyone. Explore tools and calculators with a transparent mortgage experience." />
        <meta name="keywords" content="mortgage, home loan, calculator, Next.js, finance" />
      </Head>
      <Header />
      <main className="container hero">
        <section className="hero-content">
          <h1>Smarter home loans, made simple.</h1>
          <p>
            Get fast approvals, clear numbers, and guidance every step of the way. 
            A modern approach to home financing designed for transparency and ease.
          </p>
          <div className="hero-actions">
            <a href="/start" className="btn">Get Started</a>
            <a href="/mortgage-calculator" className="btn ghost">Calculator</a>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <h4>Digital process</h4>
            <p>Apply online in minutes with a streamlined, paperless flow.</p>
          </div>
          <div className="feature">
            <h4>Transparent pricing</h4>
            <p>See real rates instantly — no hidden fees or surprises.</p>
          </div>
          <div className="feature">
            <h4>Support</h4>
            <p>Helpful tools and resources so you always know what comes next.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
