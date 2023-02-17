import React from 'react';
import ReactDom from 'react-dom';
import Head from 'next/head';
import Header from '../components/Header';
import Cart from '../components/Cart';

//ReactDom.render(<Cart />, document.getElementById('root'));

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Val Interativa</title>
        <link rel="icon" href="/valfav.png" />
      </Head>
      
      <Header />
      <Cart />
      {/* Banner */}
    </div>
  )
}
