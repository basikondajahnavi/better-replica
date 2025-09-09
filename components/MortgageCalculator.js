import { useState, useMemo } from 'react'

function currency(n){ return Number(n).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2}) }

export default function MortgageCalculator({initialTax=265, initialZip='421005'}){
  const [price, setPrice] = useState(300000)
  const [down, setDown] = useState(60000)
  const [rate, setRate] = useState(6.5)
  const [years, setYears] = useState(30)
  const [taxes, setTaxes] = useState(initialTax)
  const [zip, setZip] = useState(initialZip)

  const monthlyPayment = useMemo(()=>{
    const principal = price - down
    const monthlyRate = rate/100/12
    const n = years*12
    if (monthlyRate === 0) return principal / n
    const payment = principal * (monthlyRate * Math.pow(1+monthlyRate, n)) / (Math.pow(1+monthlyRate, n)-1)
    return payment
  }, [price, down, rate, years])

  const totalMonthly = useMemo(()=>{
    return monthlyPayment + (taxes/12)
  }, [monthlyPayment, taxes])

  return (
    <div className="calc">
      <div className="calc-grid">
        <div className="calc-form">
          <label>Home price</label>
          <input type="number" value={price} onChange={e=>setPrice(Number(e.target.value))} />

          <label>Down payment</label>
          <input type="number" value={down} onChange={e=>setDown(Number(e.target.value))} />

          <label>Rate (% APR)</label>
          <input step="0.01" type="number" value={rate} onChange={e=>setRate(Number(e.target.value))} />

          <label>Term (years)</label>
          <select value={years} onChange={e=>setYears(Number(e.target.value))}>
            <option>15</option>
            <option>20</option>
            <option>30</option>
          </select>

          <label>Annual taxes (approx)</label>
          <input type="number" value={taxes} onChange={e=>setTaxes(Number(e.target.value))} />

          <label>ZIP</label>
          <input type="text" value={zip} onChange={e=>setZip(e.target.value)} />
        </div>

        <div className="calc-summary">
          <h3>Estimated monthly</h3>
          <div className="big">${currency(totalMonthly)}</div>
          <p className="muted">Principal & interest: ${currency(monthlyPayment)}</p>
          <p className="muted">Taxes (monthly): ${currency(taxes/12)}</p>
        </div>
      </div>
    </div>
  )
}
