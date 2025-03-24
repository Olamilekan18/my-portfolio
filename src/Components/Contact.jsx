import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaXTwitter, FaEnvelope, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="Contact" className="w-full bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Get in Touch</h2>

      {/* Contact Details */}
      <div className="flex flex-col items-center space-y-4">
        <a href="mailto:olamilekankareem717@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
          <FaEnvelope className="text-xl" /> Olamilekankareem717@gmail.com
        </a>

        <a href="tel:+2349035095897" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
          <FaPhone className="text-xl" /> +2349035095897
        </a>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4">
          <a href="https://github.com/Olamilekan18" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://web.facebook.com/ayomide.olamilekan.353803" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/olamilekan-kareem-aa883433b/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://x.com/Olamilekan_js" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
            <FaXTwitter className="text-2xl" />
          </a>
          <a href="https://wa.me/2349035095897" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-500 transition">
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
