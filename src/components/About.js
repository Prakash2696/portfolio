import AboutImg from '../assets/about.png';

export default function About(){
    const config ={
        line1: 'Hi, My name Praksh.i am a UI developer/Fontend developer.l built beautidul websites React.js',
        line2: 'I am proficient in Fontend skils like Html,javascript,css,scss,tailwind and many more.',
    }



    return<section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className=' flex flex-col justify-center text-white gap-4 '>
              <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
               <p> {config.line1}</p>
               <p className='pb-5'>{config.line2}</p>
              </div>
        </div> 
            
    </section>
}