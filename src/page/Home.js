import React from 'react'
import Header from '../components/Header'
import Banner from '../components/BannerText'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import '../sass/base/_base.scss'
import '../sass/layout/_container.scss'


function Home () {
    return (
        <div>
            <motion.div
                className='container'
                initial={{ y: -200, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ type: 'tween', duration: .67}}
                >
                <Header />
                <div className='all-body'>
                    <Banner />
                    <Main />
                </div>
            </motion.div>
            <Footer />
        </div>
    )
}

export default Home