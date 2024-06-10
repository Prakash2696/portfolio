import ResumeImg from '../assets/resume.jpg';

export default function Resume(){

    const config ={
        link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.clickdimensions.com/links/TestPDFfile.pdf&ved=2ahUKEwj6mfSov9CGAxWK-TgGHT1PGNsQFnoECAcQAQ&usg=AOvVaw14RVGxdqbELGEMOuqU_e8S'
    }


    return<section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className=' flex flex-col justify-center text-white gap-4 '>
              <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
               <p className='pb-5'>You can view my resume <a className='btn' href={config.link}>Download</a> </p>
              </div>
        </div> 
            
    </section>
}