const Header =()=>{
    return(



        <div>

             <div  className='flex flex-col items-center justify-center  mt-32'>
          <h1 className='text-blue-900 text-6xl'>Expert Care Made </h1>
          <h1 className='font-bold text-blue-900 text-7xl'>Quick And Accessible</h1>
          <div className='mt-10 items-center justify-center text-center'>
          <p className='text-gray-700 text-lg mt-4 px-4'>Committed to a better way of healthcare, we aim to provide quality medical services to the</p>
          <p className='text-gray-700 text-lg mt-4 px-4'>highest level of satisfaction of our patients.</p>

           <button className="bg-blue-600 hover:bg-blue-700 text-white text-2xl px-5 py-2 rounded-full  items-center space-x-1 justify-center mt-6">
            <span>📅</span>
            <span>Book an Appointment</span>
          </button>

          </div>

      </div>
        </div>
    )
}

export default Header;