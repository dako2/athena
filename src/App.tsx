import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.location.href = '/athena-3d.html'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-amber-800">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">⚡ Athena's Temple Run 3D ⚡</h1>
        <p className="text-lg">Loading the 3D game...</p>
      </div>
    </div>
  )
}

export default App
