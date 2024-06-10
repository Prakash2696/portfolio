import websiteImg1 from '../assets/ecommerce-websites.jpg';  
import websiteImg2 from '../assets/Flim_Booking.jpg';
import websiteImg3 from '../assets/og-en.png';

export default function Projects(){

  const config ={
    projects :[
      {
        image:  websiteImg1,
        description: 'My  project  Truckrentify . Built with MERN Stack',
        link: 'https://truckrentify.netlify.app/'

      },

      {
        image:  websiteImg2,
        description: 'Flim Booking  website like Swiggy, Built with',
        link: 'https://github.com/Prakash2696'

      },

      {
        image:  websiteImg3,
        description: 'Basic Blog Website. Built with',
        link: 'https://github.com/Prakash2696'

      }
    ]
  }




    return<section id='projects' className="flex flex-col py-20 px-5 justify-center  bg-primary text-white">
        <div className="w-full">
           <div className="flex flex-col px-10 py-5">
           <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold">Projects</h1>
           <p>These are some of my best projects. I have built these with React, vanilsa css. check them out.</p>
           </div>
            
        </div>
        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-10  gap-5'>
                {config.projects.map((project) => (
                  <div className='relative'>
                  <img className='h-[200px] w-[500px]' src={project.image}/>
                  <div className='project-desc '>
                    <p className='text-center py-5' >{project.description}</p>
                    <div className='flex justify-center'>
                    <a className='btn' target='blank' href={project.link}>view Project</a>
                  </div>
                  </div>
                </div>
                
                ))}
                
                
           

            </div>
        </div>
    </section>
}