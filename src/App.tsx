import { useEffect } from 'react'

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
            <p>hello telegram</p>
            <button onClick={onClose}>close</button>
        </div>
    )
}
