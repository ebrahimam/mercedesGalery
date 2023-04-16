import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Header from '../components/Header'
import Countainer from '../components/Countainer'
import Items from '../components/Items'
import Sells from '../components/Sells'
import Vid from '../components/Vid'
import Galery from '../components/Galery'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <Countainer/>
      <Items/>
      <Sells/>
      <Vid/>
      <Galery/>
      <Footer/>
    </React.Fragment>
  )
}
