import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Start(){
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function handleStart(e){
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <>
      <Head><title>Start — Replica</title></Head>
      <Header />
      <main className="container page start">
        <h1>Start your application</h1>
        <p>Enter email to start your application.</p>

        {!sent ? (
          <form onSubmit={handleStart} className="start-form">
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email} 
              onChange={e=>setEmail(e.target.value)} 
              required 
            />
            <button className="btn">Start</button>
            {error && <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>}
          </form>
        ) : (
          <div className="notice">Thanks — check {email} for next steps (demo).</div>
        )}
      </main>
      <Footer />
    </>
  )
}
