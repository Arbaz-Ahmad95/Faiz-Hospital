import React from 'react';
import Saif2 from '../assets/saif2.jpeg';
const ImageBanner=()=>{
    return(
        <div>
             <div className='max-w-[800px]  w-full mx-auto mb-8 mt-10'>
              <img 
                src={Saif2} 
                alt="Saif" 
                className="w-full h-[70vh] object-cover rounded-3xl" 
              />
            
              <h1 className="text-center text-blue-900 text-4xl font-semibold mt-6">
                A legacy of trust
              </h1>
                <p className="text-center text-gray-700 text-lg mt-4 px-4">
                Ananya Hospital and Shanbhag Hospital are two units of Ananya Hospital Pvt. Ltd., 
                a name carrying 50+ years of collective experience and trust. Managed by a dedicated 
                team of doctors, both units are patient care focused with an emphasis on fast, 
                efficient, personalised care.
              </p>
            </div>
        </div>
    )
}
export default ImageBanner;