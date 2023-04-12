import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Header"
import Footer from "../components/Footer"

const about = () => {
  return (
    <div className="support">
         <Head>
        <title>Rilindja Kombetare Iliriste - Political Platform</title>
        <meta name="description" content="RKI is a political group, with intentions to spread Albanian Patriotism all across Albania, Kosovo and the Diaspora. Our ideology is called Illyrism, which is a mixture of Patriotism, Social Conservatism and the protection of Albanian interests and the Albanian people's rights. We do not condone any calls for genocide, or any far-right or far-left ideologies such as Nazism, Fascism and Communism.
We do not hate or discriminate against anyone based on their ethnicity as well.
The origin of the name for our ideology 'Illyrism' is simple. It is called Illyrism as a way to connect with our ancestors, the Illyrians.</h3>
    " />        <link rel="icon" href="/Llogo.png" />
      </Head>
      <Navbar/>
<div className='supportus'>
<div className='logo'><Image src="/Llogo.png" alt="logo" width="200" height="200"></Image></div>
<div className='Text'>
  <div className='supporttitle'>
    <h1>Political Platform of RKI</h1>
  </div>
  <div className='downloadable'>
  <a href="/Platforma-Iliriste-e-RKI---Shqip-1.pdf" download><button className='supportbutton'>Shkarko Platformën Politike</button></a>
  <a href="/Platforma-Iliriste-e-RKI-1.pdf" download><button className='supportbutton'>Download the Political Platform</button></a>
</div>
  <div className='rules'>
    <ol>
    <li>Uphold traditional Albanian values and customs, including respect for family, religion, and nation.</li><br></br>
    <li>Promote national sovereignty and reject globalism in some aspects.</li><br></br>
    <li>To support the rule of law and the protection of private property rights, while limiting government
interference in economic affairs.</li><br></br>
<li>Increase military spending to ensure the country&#39;s security and territorial integrity.</li><br></br>
<li>Restrict immigration to maintain cultural and ethnic homogeneity.</li><br></br>
<li>Promote the use of the Albanian language and culture in public life, while discouraging the use of
foreign languages by Albanians.</li><br></br>
<li>Protect the rights of unborn children and oppose abortion of 6+ weeks fetuses, only allow them when
the life of the mother is in danger or have been raped.</li><br></br>
<li>Promote traditional marriage and family values, while opposing same-sex marriage or adoption of kids
by LGBT individuals, while still respecting human rights.</li><br></br>
<li>Support the protection of the environment while rejecting extremist environmentalist agendas that
undermine economic development.</li><br></br>
<li>Ensure that Albanian schools promote a traditional education that teaches moral values, history, and
cultural heritage.</li><br></br>
<li>Oppose political correctness, censorship, and &quot;cancel culture&quot; that stifle free speech and thought.</li><br></br>
<li>Promote free-market policies that reduce government regulation and encourage private enterprise.</li><br></br>
<li>More efficient public spending to limit government debt to ensure fiscal responsibility and
sustainability.</li><br></br>
<li>Support the traditional role of the family as the primary source of social stability and reject state
intervention in family life.</li><br></br>
<li>Promote Albanian tourism and investment to stimulate economic growth and job creation.</li><br></br>
<li>Protect Albanian workers and businesses from unfair competition from foreign companies and
imports.</li><br></br>
<li>Increase law enforcement efforts to reduce crime and violence, while protecting the rights of victims
and defendants.</li><br></br>
<li>Support the creation of labor camps for the most heinous criminals.</li><br></br>
<li> Oppose the use of recreational drugs and promote drug prevention and rehabilitation programs.</li><br></br>
<li>Ensure that Albanian culture and history are properly represented in the media and the arts.</li><br></br>
<li>Promote national unity and reject divisive identity politics that divide Albanians based on origin or
religion.</li><br></br>

<li>Promote the use of renewable energy sources and technologies that support economic growth and
environmental sustainability.</li><br></br>
<li>Protect the rights of Albanians living abroad and promote their return to Albania to invest in the
country&#39;s economy.</li><br></br>
<li>Oppose the spread of radical ideologies and terrorist organizations that threaten Albanian security
and values.</li><br></br>
<li>Promote the use of technology to improve public services and increase transparency in government
affairs.</li><br></br>
<li>Promote traditional Albanian handicrafts and arts to stimulate cultural and economic development.</li><br></br>
<li>Oppose corruption and the abuse of power in all forms and at all levels of government.</li><br></br>
<li>Promote the development of rural areas and support farmers and small businesses to reduce
urbanization and migration.</li><br></br>
<li>Support the Albanian Armed Forces and increase cooperation with its allied countries.</li><br></br>
<li>Oppose the use of force or aggression against other nations and promote diplomacy and peaceful
solutions to international disputes when possible.</li><br></br>
<li>Support the development of tourism and cultural events that promote the Albanian brand and image
abroad.</li><br></br>
<li>Promote traditional gender roles and reject misogynist or misandrist ideologies that undermine
family values and traditional gender roles.</li><br></br>
<li>Support the use of Albanian elements in architecture and construction.</li><br></br>
<li>Increase penalties for illegal logging and deforestation.</li><br></br>
<li>Expand protected areas for wildlife and biodiversity conservation.</li><br></br>
<li>Develop policies to support sustainable agriculture and reduce the use of harmful pesticides and
fertilizers.</li><br></br>
<li>Increase the number of judges and prosecutors to reduce case backlogs and improve the efficiency of
the justice system.</li><br></br>
<li>Increase the use of surveillance cameras in public spaces to deter crime.</li><br></br>
<li>Increase investment in science and technology, especially in fields that can benefit the Albanians.</li><br></br>
<li>Promote family-friendly policies such as tax incentives for large families and maternal or paternal
leave.</li><br></br>
    </ol>
  </div>
</div>

</div>
      <Footer/>

    </div>
  )
}

export default about