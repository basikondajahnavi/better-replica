import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MortgageCalculator from '../components/MortgageCalculator'

export default function Calculator(){
  return (
    <>
      <Head><title>Mortgage Calculator — Replica</title></Head>
      <Header />
      <main className="container page">
        <h1>Mortgage Calculator</h1>
        <p>Estimate your monthly payment.</p>
        <MortgageCalculator initialTax={265} initialZip="421005" />
      </main>
      <Footer />
    </>
  )
}
