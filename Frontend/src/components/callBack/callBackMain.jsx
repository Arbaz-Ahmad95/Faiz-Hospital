import React from 'react';
import saif2 from '../../assets/saif1.jpeg';
import calldoctorrr from '../../assets/calldoctorrr.jpg';
import calldoctorr from '../../assets/calldoctorr.jpg';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"

const CallBackMain = () => {
  return (
    <div className="w-full py-12 px-4 flex flex-col lg:flex-row gap-8 justify-center items-center">

      {/* Left Image + Call Box */}
      <div className="relative w-full max-w-md lg:max-w-lg h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-md">
        <img src={calldoctorrr} alt="hospital" className="w-full h-full object-cover" />

        <div className="absolute bottom-6 left-4 right-4 bg-blue-600 text-white rounded-2xl p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-1">Call us now</h2>
          <p className="text-sm mb-4">24/7 Emergency Care Available – Call us anytime.</p>

          <div className="bg-white text-blue-800 p-3 rounded-xl font-semibold text-sm md:text-base">
            <p>📞 Emergency Helpline (<strong>Faiz</strong>)</p>
            <p className="text-sm">080 4901 1200</p>
          </div>
        </div>
      </div>

      {/* Right Callback Form */}
      <div className="w-full max-w-md lg:max-w-lg rounded-3xl border shadow-md p-4 md:p-6 bg-white flex flex-col gap-6">
        <h1 className="text-blue-900 text-2xl md:text-3xl font-bold">Request a callback</h1>

        <form className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Your name *" className="w-full p-2 border rounded bg-gray-100" />
            <input type="text" placeholder="Your contact number *" className="w-full p-2 border rounded bg-gray-100" />
          </div>

          <Select>
            <SelectTrigger className="w-full p-2 border rounded bg-gray-100">
              <SelectValue placeholder="Select department *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ortho">Orthopaedics & Spine Care</SelectItem>
              <SelectItem value="ent">ENT</SelectItem>
              <SelectItem value="derma">Dermatology</SelectItem>
              <SelectItem value="uro">Urology</SelectItem>
              <SelectItem value="foot">Footcare</SelectItem>
            </SelectContent>
          </Select>

          {/* Hospital Options */}
          <div className="space-y-4">
            <label className="block">
              <input type="radio" name="hospital" className="mr-2" />
              <strong>Faiz Hospital</strong><br />
              <span className="text-sm text-gray-600">No. 6, 3rd D Cross Rd, Block 2, Basaveshwar Nagar</span>
            </label>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1">Message</label>
            <textarea placeholder="Write your message..." className="w-full p-2 border rounded h-20 bg-gray-100" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white py-2 rounded text-lg mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallBackMain;
