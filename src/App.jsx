
import { HashRouter as Router, Route, Routes } from "react-router-dom"

import { MailIndex } from "./pages/MailIndex"
import { MailDetails } from "./pages/MailDetails"


export function App() {

    return <Router>
        <main>
            <Routes>
                <Route path="/" element={<MailIndex />} />
                <Route path="/mail/:id" element={<MailDetails />} />

            </Routes>

        </main>
    </Router>

}

