import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Label, Input } from '../';

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
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Label>My Label</Label><br />
        <Input
          placeholder="Custom count"
          value={inputCustomCountValue}
          onChange={(e) => setInputCustomCountValue(e.target.value)}
        /><br />
        <p>count is {count}</p>
        <Button onClick={handleClickCustomCount}>
          click me!
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
