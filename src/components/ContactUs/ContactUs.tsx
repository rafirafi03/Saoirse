import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }),
  });

  if (response.ok) {
    alert("Form submitted successfully!");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  } else {
    alert("Failed to submit form.");
  }
};


  return (
    <div className="min-h-screen bg-gray-200 pb-12 pt-32 px-4 sm:px-6 lg:px-8 font-satoshi text-[#484a5e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <p className="text-sm sm:text-base tracking-wider mb-2">CONTACT US</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Let's Create Something Amazing Together
          </h1>
        </div>

        {/* Blue Container */}
        <div className="bg-[#4b6eff] rounded-none p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6 lg:mb-8">
                Get a Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First Name */}
                <div>
                  <label className="block text-white text-sm mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-white text-sm mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                  type="submit"
                    className="bg-white text-blue-600 px-12 py-2 rounded-full text-lg font-medium hover:bg-gray-100 transition-transform duration-200 ease-in-out cursor-pointer transform hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Location Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6 lg:mb-8">
                Our Locations
              </h2>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-white text-lg">
                    <span className="font-semibold">Email:</span>
                    info@saoirseitsolution.com
                  </p>
                </div>

                <div>
                  <p className="text-white text-lg">
                    <span className="font-semibold">Phone:</span>+91 9946502769
                  </p>
                </div>

                <div>
                  <p className="text-white text-lg">
                    <span className="font-semibold">Address:</span>Kannur,
                    Kerala, India
                  </p>
                </div>
              </div>

              {/* Map Image */}
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.5572284348536!2d75.36408997453096!3d11.86623533814869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba42395a9434b9f%3A0x56f068cf7cb6b073!2sSaoirse%20IT%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1759174579003!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  className="rounded w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
