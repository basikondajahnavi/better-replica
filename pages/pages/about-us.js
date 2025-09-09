import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <>
      <Head><title>About Us — Replica</title></Head>
      <Header />
      <main className="container about">
        <h1>About Better — Replica</h1>
        <p>We believe that getting a home loan should be straightforward and stress-free. 
          Our platform is built with a focus on transparency, speed, and customer-first design.</p>

        <section className="team">
          <div className="card">
            <h3>Mission</h3>
            <p>Our mission is to simplify the mortgage process so that more people can focus 
          on what really matters — finding a place to call home.</p>
          </div>

          <div className="card">
            <h3>Values</h3>
            <p>Customer-first, data-driven, transparent.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
