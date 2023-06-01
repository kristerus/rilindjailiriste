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
        <meta name="description" content="RKI is a political group, with intentions to spread Albanian Patriotism all across Albania, Kosovo and the Diaspora. Our ideology is called Illyrism, which is a mixture of Patriotism, Social Conservatism and the protection of Albanian interests and the Albanian people's rights. We do not condone any calls for genocide, or any far-right or far-left ideologies such as Nazism, Fascism and Communism.
We do not hate or discriminate against anyone based on their ethnicity as well.
The origin of the name for our ideology 'Illyrism' is simple. It is called Illyrism as a way to connect with our ancestors, the Illyrians.</h3>
    " />        <link rel="icon" href="/Llogo.PNG" />
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
