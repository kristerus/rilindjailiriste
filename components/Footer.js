import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TagIcon from '@mui/icons-material/Tag';
import LanguageIcon from '@mui/icons-material/Language';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='primaryFooter'>
                <div className='footerLinks'>
                    <h2 className="blank">Navigation</h2>
                    <ul>
                        <li style={{ margin: "8px" }}><Link href="/">Home
                        </Link></li>
                        <li style={{ margin: "8px" }}> <Link href="/about">About Us
                        </Link></li>
                        <li style={{ margin: "8px" }}><Link href="/support">What We Support
                        </Link></li>
                        <li style={{ margin: "8px" }}><Link href="/contact">Contact Us
                        </Link></li>

                    </ul>
                </div>

                <div className='footerLinks'>
                <h2 className="blank">Social Media</h2>
                    <ul>
                        <li className='social'><ChatBubbleIcon /> <h3><a href="https://discord.com/invite/HEsQuBe7Sc?fbclid=PAAabDYy630XNGUCI77Ixow4JmFUyiqXAeKPjFXCQCCHQO7yThnbJSUPg2wsc">Discord-Join Now</a></h3></li>
                        <li className='social'><MusicNoteIcon /> <h3><a href="https://www.tiktok.com/@rilindja_iliriste">Rilindja Kombetare Iliriste</a></h3></li>
                        <li className='social'><InstagramIcon /> <h3><a href="https://instagram.com/rilindja_kombetare_iliriste?igshid=YmMyMTA2M2Y=">Rilindja Kombetare Iliriste</a></h3></li>
                    </ul>
                </div>

                <div className='footerLinks'>
                    <h2 className="blank">Contacts</h2>
                    <ul>
                        <li className='social'><PhoneIcon /> <h3><a href="tel:" className='footerLink'></a></h3></li>
                        <li className='social'><EmailIcon /> <h3>rilindja.iliriste@gmail.com</h3></li>
                        <li className='social'><LanguageIcon /> <h3>rilindjakombetareiliriste.com</h3></li>


                    </ul>
                </div>
              
            </div>
            <div className='secondaryFooter'>
                <h3> Copyright © Rilindja Kombëtare Iliriste 2023</h3>
                <h3 className="cyclus"> <a href="https://www.cycluscorporations.com" className='cycluslink'>Powered by Cyclus Corporations</a><a href="https://www.cycluscorporations.com"><Image src="/cycluslogo.jpg" width="55" height="55" alt="cyclus logo" className='cyclusLogo'></Image></a></h3>
            </div>



        </div>
    )
}

export default Footer