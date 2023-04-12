import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Header"
import Footer from "../components/Footer"

const about = () => {
  return (
    <div className="about">
         <Head>
        <title>Rilindja Kombetare Iliriste - About Us</title>
        <meta name="description" content="RKI is a political group, with intentions to spread Albanian Patriotism all across Albania, Kosovo and the Diaspora. Our ideology is called Illyrism, which is a mixture of Patriotism, Social Conservatism and the protection of Albanian interests and the Albanian people's rights. We do not condone any calls for genocide, or any far-right or far-left ideologies such as Nazism, Fascism and Communism.
We do not hate or discriminate against anyone based on their ethnicity as well.
The origin of the name for our ideology 'Illyrism' is simple. It is called Illyrism as a way to connect with our ancestors, the Illyrians.</h3>
    " />
        <link rel="icon" href="/public/Llogo.png" />
      </Head>
      <Navbar/>
<div className='aboutus'>
  <div className='entry'>
    <h1 className='abouttitle'>About Us</h1>
  </div>
  <div className='whorwe'>
    <div className="leftside">
      <h1 className='aboutsubtitle'>Who are We?</h1>
      <h3 className='p'>RKI is a political group, with intentions to spread Albanian Patriotism all across Albania, Kosovo and the Diaspora.</h3>
    </div>
    <div className='rightSide'>
    <Image src="/../public/image_6487327(2).JPG" alt="" width="320" height="400" id="aboutimage"></Image>    </div>
  </div>
  <div className='whorwe'>
  <div className="leftside">
  <Image src="/../public/Llogo.png" alt="" width="300" height="300" id="aboutimage"></Image>  </div>
    <div className='rightSide'>
      <h1 className='aboutsubtitle'>Our Ideology</h1>
      <h3 className='p'>Our ideology is called Illyrism, which is a mixture of Patriotism, Social Conservatism and the protection of Albanian interests and the Albanian people&apos;s rights. We do not condone any calls for genocide, or any far-right or far-left ideologies such as Nazism, Fascism and Communism.
We do not hate or discriminate against anyone based on their ethnicity as well.
The origin of the name for our ideology &apos;Illyrism&apos; is simple. It is called Illyrism as a way to connect with our ancestors, the Illyrians.</h3>
    </div>
  </div>
  <div className='whorwe'>
    <div className="leftside">
      <h1 className='aboutsubtitle' id="aboutsubtitle">Our Goal</h1>
      <h3 className='p'>Our purpose is  to spread Illyrism, and to educate people on Albanian history.Our ultimate end goal is to regain the lands that Albanians have lost and unite all Albanians under one flag.</h3>

    </div>
    <div className='rightSide'>
    <Image src="/../public/image_6487327(1).JPG" alt="" width="320" height="400" id="aboutimage">

    </Image>

      </div>
      </div>
 

</div>
      <Footer/>
 </div>
  )
}

export default about