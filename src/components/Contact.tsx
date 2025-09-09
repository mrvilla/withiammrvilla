// import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   projectType: '',
  //   timeline: '',
  //   budget: '',
  //   message: ''
  // });
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   setIsSubmitted(true);
  //   setTimeout(() => setIsSubmitted(false), 3000);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to capture your project from a new perspective? Get in touch to discuss 
            your aerial videography needs and receive a custom quote.
          </p>
        </div>

        <div className="grid gap-2 align-items-center">
          {/* Contact Info */}
          <div className="">
            <div>
              {/* <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3> */}
              <div className="flex justify-center align-items-center space-x-4">
                <div className="flex items-center align-items-center space-x-4">
                  <div className="bg-[#06B391]/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#06B391]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">fly@iammrvilla.com</p>
                  </div>
                </div>
                <div className="flex items-center align-items-center space-x-4">
                  <div className="bg-[#08908D]/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#06B391]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Coverage Area</p>
                    <p className="text-gray-400">Nationwide (Travel Available)</p>
                  </div>
                </div>
                <div className="flex items-center align-items-center space-x-4">
                  <div className="bg-[#08908D]/20 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-[#06B391]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Response Time</p>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Services */}
            {/* <div className="bg-black rounded-xl p-6 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">Quick Services</h4>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-black hover:bg-[#06B391] border border-gray-600 text-white p-3 rounded-lg transition-colors text-sm">
                  Real Estate Package
                </button>
                <button className="bg-black hover:bg-[#06B391] border border-gray-600 text-white p-3 rounded-lg transition-colors text-sm">
                  Wedding Coverage
                </button>
                <button className="bg-black hover:bg-[#06B391] border border-gray-600 text-white p-3 rounded-lg transition-colors text-sm">
                  Commercial Shoot
                </button>
                <button className="bg-black hover:bg-[#06B391] border border-gray-600 text-white p-3 rounded-lg transition-colors text-sm">
                  Emergency Service
                </button>
              </div>
            </div>*/}
          </div> 

          {/* Contact Form */}
          {/* <div className="bg-black rounded-2xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#a47764] focus:ring-1 focus:ring-[#a47764]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#a47764] focus:ring-1 focus:ring-[#a47764]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#a47764] focus:ring-1 focus:ring-[#a47764]"
                    placeholder="+49 (170) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a47764] focus:ring-1 focus:ring-[#a47764]"
                  >
                    <option value="">Select project type</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="film-production">Film & TV Production</option>
                    <option value="tourism">Tourism & Events</option>
                    <option value="commercial">Commercial & Industrial</option>
                    <option value="wedding">Wedding & Special Events</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a47764] focus:ring-1 focus:ring-[#a47764]"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush)</option>
                    <option value="1-week">Within 1 week</option>
                    <option value="2-4-weeks">2-4 weeks</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a47764] focus:ring-1 focus:ring-[#a47764]"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="over-5000">Over $5,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#a47764] focus:ring-1 focus:ring-[#a47764] resize-none"
                  placeholder="Tell us about your project, location, specific requirements, and any other details that would help us provide an accurate quote..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#06B391] hover:bg-[#08908D] text-white py-4 px-6 rounded-lg transition-all font-semibold text-lg flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;