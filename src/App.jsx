import { useState } from 'react'
import './App.css'

  export const PasswordGenerator = () => {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
 
  const createpassword = () => {
    let charset = ""
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeLowercase) charset += "abcdefghiklmopqstuvwxyz"
    if (includeNumbers) charset += "123456789"
    if (includeSymbols) charset += "!@#$%^&*()_+;':?><~`"
    let createpassword = ""
    for (let i = 0; i<length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      createpassword += charset[randomIndex]
    }
    setPassword(createpassword)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    alert("password copyed!")
  }
  return (
    <>
     <div className="password generator">
     <h2>create an strong password</h2>
     <div className="input-group">
      <label htmlFor="num"> password lenght: </label>
      <input type="number" id="num" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
     </div>
     <div className="checkbox-group">
      <input type="checkbox" id="Upper"  checked={includeUppercase} 
      onChange={(e) => setIncludeUppercase(e.target.checked)}/>
      <label htmlFor="Upper"> Include Uppercase</label>
     </div>
     <div className="checkbox-group">
      <input type="checkbox" id="lower"  checked={includeLowercase}  
      onChange={(e) => setIncludeLowercase(e.target.checked)}/>
      <label htmlFor="lower"> Include lowercase</label>
     </div>
     <div className="checkbox-group">
      <input type="checkbox" id="numbers"  checked={includeNumbers} 
      onChange={(e) => setIncludeNumbers(e.target.checked)}/>
      <label htmlFor="numbers"> Include Numbers</label>
     </div>
     <div className="checkbox-group">
      <input type="checkbox" id="symbols"  checked={includeSymbols}
      onChange={(e) => setIncludeSymbols(e.target.checked)} />
      <label htmlFor="symbols"> Include symbols</label>
     </div>
     <button className='create password' onClick={createpassword} > create password</button>
     <div className="generate-password">
      <input type="text" readOnly value={password}/>
      <button className="copy password" onClick={copyToClipboard}>copy</button>
     </div>
     </div> 
    </>
  )
}


export default PasswordGenerator
