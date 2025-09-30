export default function ServicesListing() {
  const services = [
    {
      id: 1,
      image: "/assets/web-development-icon.png",
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies. From corporate sites to complex web applications."
    },
    {
      id: 2,
      image: "/assets/app-development-icon.png",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices."
    },
    {
      id: 3,
      image: "/assets/seo-digitalmarketing-icon.png",
      title: "SEO & Digital Marketing",
      description: "Boost your online presence with our comprehensive SEO strategies and digital marketing campaigns."
    },
    {
      id: 4,
      image: "/assets/cloud-and-server-icon.png",
      title: "Cloud & Server Solutions",
      description: "Scalable cloud infrastructure and server management solutions for businesses of all sizes."
    },
    {
      id: 5,
      image: "/assets/eicon.png",
      title: "IT Consulting",
      description: "Scalable cloud infrastructure and server management solutions for businesses of all sizes."
    },
    {
      id: 6,
      image: "/assets/ui-ux-icon.png",
      title: "UI/UX Design",
      description: "Scalable cloud infrastructure and server management solutions for businesses of all sizes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8 font-satoshi text-[#484a5e]">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 lg:gap-x-16 lg:gap-y-12">
          {services.map((service) => (
            <div key={service.id} className="space-y-4 bg-[#e9ebf7] rounded-2xl p-5">
              {/* Image and Title Row */}
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                  {service.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}