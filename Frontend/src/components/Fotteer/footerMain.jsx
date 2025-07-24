import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#06346c] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-5 gap-8">
        {/* Logo & Useful Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">FAIZ <span className="text-sm font-normal">HOSPITAL</span></h2>
          <div className="space-y-2">
            <p className="font-semibold">Useful Links</p>
            <p>Home</p>
            <p>About</p>
            <p>Our Doctors</p>
            <p>Our Team</p>
            <p>Book an Appointment</p>
          </div>
        </div>

        {/* Specialities 1 */}
        <div>
          <p className="font-semibold mb-2">Specialities</p>
          <p>Emergency Care</p>
          <p>Orthopaedics & Spine</p>
          <p>Obstetrics & Gynaecology</p>
          <p>General & Laparoscopic Surgery</p>
          <p>General Medicine</p>
          <p>Paediatrics & Paediatric Surgery</p>
        </div>

        {/* Specialities 2 */}
        <div>
          <p className="font-semibold mb-2">Specialities</p>
          <p>ENT</p>
          <p>Dermatology</p>
          <p>Urology</p>
          <p>Footcare</p>
          <p>Cardiology</p>
          <p>Plastic Surgery</p>
          <p>Dental Care</p>
        </div>

        {/* Resources */}
        <div>
          <p className="font-semibold mb-2">Resources</p>
          <p>Blogs</p>
          <p>FAQs</p>
          <p>Testimonials</p>
          <p>Careers</p>
        </div>

        {/* Contact Info */}
        <div>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Faiz Hospital</p>
              <p>123 Main Rd, 1st Block, City Center, Bengaluru, Karnataka 560010</p>
              <p className="flex items-center gap-2 mt-2"><FaPhoneAlt /> +91 9525703538</p>
              <p className="flex items-center gap-2"><FaEnvelope /> info@faizhospital.in</p>
            </div>
           
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 mt-4 py-4 px-4 text-xs flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Faiz Hospital. All rights reserved. Enabled by <b>Arbaz Ahmad</b></p>
        <div className="flex gap-6 items-center mt-2 md:mt-0">
          <a href="#"><FaInstagram /> Instagram</a>
          <a href="#"><FaFacebook /> Facebook</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
