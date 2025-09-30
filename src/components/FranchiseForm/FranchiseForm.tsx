import { useState } from "react";

export default function FranchiseForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    watsapp: "",
    district: "",
    state: "",
    franchiseOption: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        watsapp: formData.watsapp,
        district: formData.district,
        state: formData.state,
        franchiseOption: formData.franchiseOption,
        location: formData.location,
        message: formData.message,
      }),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        watsapp: "",
        district: "",
        state: "",
        franchiseOption: "",
        location: "",
        message: "",
      });
    } else {
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 pb-12 pt-32 px-4 sm:px-6 lg:px-8 font-satoshi text-[#484a5e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <p className="text-sm sm:text-base tracking-wider mb-2">JOIN NOW</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Partner With Us, Build Freedom Together
          </h1>
        </div>

        {/* Blue Container */}
        <div className="bg-[#4b6eff] rounded-none p-6 sm:p-8 lg:p-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6 lg:mb-8 text-center">
              Apply for a Franchise
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
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
                <label className="block text-white text-sm mb-2">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200"
                />
              </div>

              {/* Phone */}
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

              {/* Phone Number */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Watsapp Number*
                </label>
                <input
                  type="tel"
                  name="watsapp"
                  value={formData.watsapp}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200"
                />
              </div>

              {/* district */}
              <div>
                <label className="block text-white text-sm mb-2">
                  District*
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200"
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-white text-sm mb-2">State*</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Franchise Option (panchayat/corporation/taluk/district/state)*
                </label>
                <select
                  name="franchiseOption"
                  value={formData.franchiseOption}
                  onChange={handleChange}
                  className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200"
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option className="text-blue-500" value="panchayat">Panchayat</option>
                  <option className="text-blue-500" value="corporation">Corporation</option>
                  <option className="text-blue-500" value="taluk">Taluk</option>
                  <option className="text-blue-500" value="district">District</option>
                  <option className="text-blue-500" value="state">State</option>
                </select>
              </div>

              {/* State */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Location of new Franchise*
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200"
                  required
                />
              </div>

              {/* Message - Full Width */}
              <div className="md:col-span-2">
                <label className="block text-white text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-2 border-white text-white px-4 py-3 focus:outline-none focus:border-white placeholder-blue-200 resize-none"
                ></textarea>
              </div>

              {/* Submit Button - Full Width */}
              <div className="md:col-span-2 flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-12 py-2 rounded-full text-lg font-medium hover:bg-gray-100 transition-transform duration-200 ease-in-out cursor-pointer transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
