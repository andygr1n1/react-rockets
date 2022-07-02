import { useState } from 'react'

import logo from './logo.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(1000000)

    return (
        <div className='App'>
            <header className='App-header'>
                <span className='material-icons-round App-logo !text-5xl !text-white'>rocket_launch</span>
                <p>Welcome on board!</p>
                <p>
                    <button
                        className='
                        rounded border-2 border-white
                        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                        p-4 transition-all hover:border-blue-700'
                        type='button'
                        onClick={() => setCount((count) => count + 1)}
                    >
                        I want: {count} $
                    </button>
                </p>
            </header>
        </div>
    )
}

export default App
