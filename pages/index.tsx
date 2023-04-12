import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Header"
import Footer from "../components/Footer"


export default function Home() {
 
  return (
    <div className="container">
      <Head>
        <title>Rilindja Kombetare Iliriste - Home</title>
        <meta name="description" content="RKI is a political group, with intentions to spread Albanian Patriotism all across Albania, Kosovo and the Diaspora. Our ideology is called Illyrism, which is a mixture of Patriotism, Social Conservatism and the protection of Albanian interests and the Albanian people's rights. We do not condone any calls for genocide, or any far-right or far-left ideologies such as Nazism, Fascism and Communism.
We do not hate or discriminate against anyone based on their ethnicity as well.
The origin of the name for our ideology 'Illyrism' is simple. It is called Illyrism as a way to connect with our ancestors, the Illyrians.</h3>
    " />
    <link rel="shortcut icon" href="Llogo.png" type="image/x-icon" />
      </Head>
      <main className="main">
        <Navbar />
        <div className='first'>
          <div className='shitter'>
            <h1 style={{ textAlign: "center", margin: "20px" }} id="maintitle">Rilindja Kombëtare Iliriste</h1>
            <Image src="public/Llogo.png" width="200" height="200" alt="logo" id="ufit" />
          </div>
        </div>
        <div className='love'>
          <div className='leftside'>
          <h1 className='maintitle'>Why We Love Albania?</h1>
          <ul className='p'>
            <li>Albania has a rich and diverse history that spans thousands of years, from the Illyrian and Roman periods to the Ottoman and communist eras.</li>
            <li> Albania boasts breathtaking natural scenery, including stunning mountain ranges, pristine beaches, and crystal-clear lakes, making it a popular destination for outdoor enthusiasts and nature lovers.</li>
            <li>Albanian culture is unique and vibrant, with a rich tradition of music, dance, cuisine, and art that reflects its complex history and diverse influences.</li>
            <li> Albanians are known for their hospitality, warmth, and generosity, making it easy for visitors to feel welcome and at home in their country.</li>
            <li>Albania is a rapidly developing nation that is making significant strides in areas such as education, healthcare, and technology, offering its citizens and visitors a promising future.</li>
          </ul>
          </div>
          
          <div className="rightside">
<Image src="/krenar.png" width="350" height="250" alt=""></Image>          
</div>
        </div>


        <div className='prices'>
          <h1 className='pricesTitle'> Learn More About Us!</h1>
          <div className='suggestions'>
            <div className="suggester">
              <h3 className='m'>Learn who we are and what we stand for. Take a look at our purpose and goals. Understand our Ideology and the history behind it.</h3>
              <button className='suggestion'>Who Are We?</button>
              </div>
            <div className="suggester">
              <h3 className='m'>Grasp our detailed Political Platformm, highlighting the main solutions to many problematics and methods to improve our society.</h3>
              <button className='suggestion'>Our Political Platform</button>
</div>

           
          </div>
            </div>
            <div className='invitation'>
    <div className="rightside">
    <a href="">  <Image src="/../public/Discord.webp" alt="" width="300" height="180" id="discordlogo"></Image></a>
    </div>
    <div className="leftside">
    <h2> Join Us!</h2>
<p className='p'>Ready to be part of a community like no other? Want to challenge yourself and work for the improvement of your country? Join us in Discord to see what we are all about. </p>
  <a href="https://discord.com/invite/HEsQuBe7Sc?fbclid=PAAabDYy630XNGUCI77Ixow4JmFUyiqXAeKPjFXCQCCHQO7yThnbJSUPg2wsc"><button className='joinbutton'>Join Now</button></a>
    </div>

  </div>
       
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}