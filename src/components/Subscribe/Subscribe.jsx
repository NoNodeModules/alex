import { useState } from 'react'
import './Subscribe.scss'

function Subscribe() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {

        console.log(email)

        setEmail('')
        e.preventDefault()
    }

    return (
        <section className="subscribe">
            <div className="container">
                <h2>Подпишитесь на новостную рассылку</h2>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button>
                        ПОДПИСАТЬСЯ
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Subscribe