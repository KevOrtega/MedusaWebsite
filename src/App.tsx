import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyles from './assets/GlobalStyles'
import RootPage from './layout/RootPage'

function App(): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Routes>
                    <Route path="/" element={<h1>Main page</h1>} />
                    <Route path="/root" element={<RootPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App