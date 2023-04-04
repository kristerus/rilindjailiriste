import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Header"
import Footer from "../components/Footer"

const about = () => {
  return (
    <div className="contact">
         <Head>
        <title>Rilindja Kombetare Iliriste - Contact</title>
        <meta name="description" content="Urban Fit is a modern fitness center, located near the center of Tirana, Albania. Covering an immense area, the center features a gym area, a cross fit and cardio environment, as well as a yoga and martial arts section, for groups of all ages. The gym is opened from Monday to Sunday, from 6:00 to 23:00 and features a sophisticated automated entry system. Every member is equipped with their own gym card. The gym has several instructors based on the type of activity. Working out is a pleasure. The gym also features a full-fledged sauna for maximal experience. Gym. Sauna. Karate. Cross-Fit. Cardio. Weightlifting. Workout. " />
        <link rel="icon" href="/Llogo.png" />
      </Head>
      <Navbar/>
<div className='form'>
  <h1 className='contacttitle'>Questions? Suggestions? <br></br>Reach Out to Us Now!</h1>
<div className="emailblock">
      <div >
        <div className="nameblock">
          <label htmlFor="frm-first">Name:</label>
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
            className='textarea'          />
        </div>
      </div>
      <div className='nameblock'>
        <label htmlFor="frm-email">Email:</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          className='textarea'
        />
      </div>
      <div className="nameblock">
        <label htmlFor="frm-phone">Phone:</label>
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
          className='textarea'
        />
      </div>
      <div className="nameblock">
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message"  name="message" className='textarea'></textarea>
      </div>
      
        <button type='submit' className='contactbutton'>Submit</button>
      
    </div>
</div>

      <Footer/>

    </div>
    
  )
}

export default about