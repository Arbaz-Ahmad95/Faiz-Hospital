import react from 'react';
import { FiPhone } from "react-icons/fi"; // Fi = Feather Icons
import Hospital1 from '../../assets/hospital1.png'
import Hospital2 from '../../assets/hospital2.png'
const HospitalLocation=()=>{
    return(

       <div className='w-full py-12 px-4 '>
      <h1 className='text-3xl md:text-4xl font-bold mb-6 text-blue-900 text-center'>
        Patient care locations
      </h1>

      <p className='text-center text-gray-600'>
        Ananya and Shanbhag Hospitals are both easily accessible and located in residential neighbourhoods in west Bengaluru.
      </p>
      <p className='text-center text-gray-600'>
        Ananya Hospital serves the bustling community of Rajajinagar. Shanbhag Hospital is located in nearby Basaveshwara nagar,
      </p>
      <p className='text-center text-gray-600 '>
        another neighbourhood with an equally strong community vibe.
      </p>

      {/* Cards wrapper */}
      <div className='flex flex-wrap justify-center gap-10 mt-10'>

        {/* Card 1 */}
        <div className='w-[500px] rounded-3xl overflow-hidden border shadow-md p-6 bg-gray-100'>
          <img src={Hospital2} alt='Hospital' className='rounded-lg'/>
          <h1 className="font-bold text-2xl mb-2 mt-3 px-1">Faiz Hospital</h1>
          <p className='text-gray-600 text-lg px-1'>389/44, 19th Main Rd, 1st Block, Rajajinagar, Bengaluru, Karnataka 560010</p>
          <div className="mt-4 border rounded-xl border-blue-800 text-black-600 p-4 flex ">
            <div className='bg-blue-700 rounded-lg w-14 h-14 flex items-center justify-center text-white '>
            <FiPhone size={24} color="white" />
            </div>
         <div className=' p-1 px-4'>
            <p className="font-semibold ">Book an Appointment</p>
            <p>+91 959 152 3162</p>
        </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='w-[500px] rounded-3xl overflow-hidden border bg-gray-100 border-x-white p-6'>
          <img src={Hospital1} alt='Hospital'  className='rounded-lg'/>
          <h1 className="font-bold text-2xl mb-2 mt-3 px-1">Faiz Hospital</h1>
          <p className='text-gray-600 text-lg px-1'>123/77, Main Road, Basaveshwara Nagar, Bengaluru, Karnataka 560079</p>
          <div className="mt-4 border rounded-xl border-blue-800 text-black-600 p-4 flex ">
            <div className='bg-blue-700 rounded-lg w-14 h-14 flex items-center justify-center text-white p-4'>
            <FiPhone size={24} color="white" className='' />
            </div>
           <div className=' p-1 px-4'>
            <p className="font-semibold ">Book an Appointment</p>
            <p>+91 959 152 3162</p>
        </div>
          </div>
        </div>

        {/* You can add more cards here if needed */}
      </div>
    </div>
    
    )
}

export default HospitalLocation;