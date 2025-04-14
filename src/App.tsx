import { useState } from 'react'
import vanillaExtractLogo from '/vanilla-extract.svg'
import './App.css'

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Button, Label, Input, myThemeClass } from '@receter/my-component-library';

function App() {
  const [count, setCount] = useState(0)
  const [inputCustomCountValue, setInputCustomCountValue] = useState('');

  const handleClickCustomCount = () => {
    if (inputCustomCountValue === '') {
      setCount(count => count + 1);
    } else {
      setCount(Number(inputCustomCountValue));
    }
  }

  return (
    <div className={myThemeClass}>
      <div>
        <a href="https://vanilla-extract.style/" target="_blank">
          <img src={vanillaExtractLogo} className="logo" alt="Vanilla Extract logo" />
        </a>
      </div>
      <h1>Vite + React + Vanilla Extract</h1>
      <div className="card">
        <Label>My Label</Label><br />
        <Input
          placeholder="Custom count"
          value={inputCustomCountValue}
          onChange={(e) => setInputCustomCountValue(e.target.value)}
        /><br />
        <Button onClick={handleClickCustomCount}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
