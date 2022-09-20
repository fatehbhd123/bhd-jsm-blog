import React from 'react'
import Header from './Header'
import { AnimatePresence } from "framer-motion"
function Layout({ children }) {
    return (
        <>
            <Header />
            <AnimatePresence>
                {children}
            </AnimatePresence>
        </>
    )
}

export default Layout
