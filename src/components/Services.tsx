import { Home, Film, MapPin, Building, Camera, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Real Estate",
      description: "Stunning aerial photography and video tours that showcase properties from unique perspectives.",
      features: ["Exterior & Interior Tours", "Neighborhood Overviews", "Luxury Property Showcases", "Commercial Listings"],
      price: "From $299",
      popular: false
    },
    {
      icon: Film,
      title: "Film & TV Production",
      description: "Professional aerial cinematography for movies, commercials, music videos, and documentaries.",
      features: ["4K/8K Video Capture", "Coordinated Multi-Drone Shots", "On-Set Collaboration", "Post-Production Support"],
      price: "From $899",
      popular: true
    },
    {
      icon: MapPin,
      title: "Tourism & Events",
      description: "Capture the beauty of destinations and the energy of events with breathtaking aerial footage.",
      features: ["Destination Marketing", "Event Coverage", "Festival Documentation", "Tourism Campaigns"],
      price: "From $499",
      popular: false
    },
    {
      icon: Building,
      title: "Commercial & Industrial",
      description: "Document construction progress, inspect infrastructure, and create compelling corporate content.",
      features: ["Progress Documentation", "Infrastructure Inspection", "Corporate Videos", "Site Surveys"],
      price: "From $599",
      popular: false
    },
    {
      icon: Camera,
      title: "Wedding & Special Events",
      description: "Preserve life's most precious moments with cinematic aerial coverage of your special day.",
      features: ["Ceremony Coverage", "Reception Aerials", "Venue Showcases", "Same-Day Highlights"],
      price: "From $799",
      popular: false
    },
    {
      icon: Zap,
      title: "Emergency & Custom",
      description: "Rapid response services for urgent projects and fully customized aerial solutions.",
      features: ["24/48 Hour Turnaround", "Emergency Response", "Custom Shot Lists", "Specialized Equipment"],
      price: "Quote Based",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From real estate showcases to film production, we provide professional drone videography 
            services tailored to your specific needs and industry requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`relative bg-black rounded-2xl p-8 border ${
                  service.popular 
                    ? 'border-[#a47764] shadow-lg shadow-[#a47764]/20' 
                    : 'border-gray-700'
                } transition-all hover:border-[#a47764] hover:shadow-lg hover:shadow-[#a47764]/10 group`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#a47764] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="bg-[#a47764]/20 p-3 rounded-xl inline-flex mb-4 group-hover:bg-[#a47764]/30 transition-colors">
                    <IconComponent className="h-8 w-8 text-[#a47764]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#a47764] rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center justify-center">
                    {/* <div>
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      {service.price !== "Quote Based" && (
                        <span className="text-gray-400 text-sm ml-1">per project</span>
                      )}
                    </div> */}
                    <button className="bg-[#a47764] hover:bg-[#8d6854] text-white px-4 py-2 rounded-lg transition-colors font-semibold">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-black rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Every project is unique. We work closely with clients to create tailored aerial solutions 
              that meet your specific requirements, timeline, and budget.
            </p>
            <button className="bg-[#c49882] hover:bg-[#a47764] text-white px-8 py-3 rounded-lg transition-colors font-semibold">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;