import HeroImg from '../assets/hero.png';
import { AiOutlineInstagram, AiOutlineLinkedin,AiOutlineTwitter } from "react-icons/ai";
export default function Myhero(){
     const config = {
          subtitle: 'Im a UI developer/Fontend developer',
          social: {
               twitter:'https://twittwe.com/',
               linkedin:'https://linkedin.com/',
               instagram:'https://instagram.com/',
          }
     }


     return<section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center '>
       <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im Prakash
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
     
        <div className='flex py-10 gap-5 '>
         <a href={config.social.twitter}className='hover:text-white' ><AiOutlineTwitter size={40} /></a>
         <a href={config.social.linkedin}className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
         <a href={config.social.instagram}className='hover:text-white'><AiOutlineInstagram size={40}/></a>
        </div>   
        </div>
         <img className='md:w-1/3' src={HeroImg} />
     </section>
}