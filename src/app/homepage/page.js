// import React from 'react'

// const HomePage = () => {
//   return (
//     <div>
//       <section class="relative bg-blue-500 py-20 px-6 sm:px-12 md:px-16 lg:px-24">
//         <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center">
//             <div class="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
//                 <h1 class="text-4xl font-bold leading-tight mb-4">Best Telecalling CRM with lead integrations & Auto Dialer</h1>
//                 <p class="text-lg mb-6">Capture leads from anywhere and distribute in your team members.</p>
//                 <p class="text-lg mb-6">Track your calling activity and improve the productivity with proper feedback.</p>
//                 <p class="text-lg mb-6">Your caller just needs a Smart-Phone with a SimCard in your phone.</p>
//                 <a href="#cta" class="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300">Get Started</a>
//             </div>
//             <div class="lg:w-1/2">
//                 <img src="" alt="Hero Image" class="w-full h-auto rounded-lg shadow-xl"/>
//             </div>
//         </div>
//     </section>
//     </div>
//   )
// }

// export default HomePage



import React from 'react'
import Wbtbt from '../components/Wbtbt'

const HomePage = () => {
  return (
    <div>
      <section className="relative  py-10 px-6 sm:px-12 md:px-16 lg:px-20 hero">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center hero-bg ">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 text-white  text-left">Best Telecalling CRM with lead integrations & Auto Dialer</h1>

            <p className="text-lg mt-6 mb-6 flex text-white font-bold"><img src="/images/hand_point_right.png" className='w-14 mr-4' />Capture leads from anywhere and distribute in your team members.</p>
            <p className="text-lg mt-6 mb-6 flex text-white font-bold"><img src="/images/hand_point_right.png" className='w-14 mr-4' />Track your calling activity and improve the productivity with proper feedback.</p>
            <p className="text-lg mt-6 mb-6 flex text-white font-bold"><img src="/images/hand_point_right.png" className='w-14 mr-4' />Your caller just needs a Smart-Phone with a SimCard in your phone.</p>
            
            
            <div className="py-6">
                <a
                  href="#"
                  className=" hero-btn mx-3 block rounded-lg px-8 py-2.5 text-base/7 font-semibold "
                >
                 Get In Touch
                </a>
              </div>
          </div>
          <div className=" rounded-lg  lg:w-1/2">
            <img src="/images/hero1.png" alt="Hero Image" className="rounded-lg w-full h-auto" />
          </div>
        </div>
      </section>
      <Wbtbt />
    </div>
  )
}

export default HomePage
