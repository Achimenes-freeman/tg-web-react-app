import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { Layout } from './components/Layout/Layout'
import { Header } from './components/Header/Header'
import { Homepage } from './pages/Homepage/Homepage'
const tg = window.Telegram.WebApp

export function App() {
    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return (
        <div className="App">
            <Header closeHandler={onClose} />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route />
                </Route>
            </Routes>
        </div>
    )
}
