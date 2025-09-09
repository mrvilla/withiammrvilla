import { Award, CheckCircle, Calendar } from 'lucide-react';

const About = () => {
  const certifications = [
    {
      title: "EASA A1/A3, A2 Remote Pilot Certificate",
      issuer: "Luftfahrt-Bundesamt",
      date: "2023",
      verified: true
    },
    {
      title: "Commercial Drone Insurance",
      issuer: "Allianz",
      date: "Current",
      verified: true
    },
    // {
    //   title: "Advanced Cinematography Certification",
    //   issuer: "Drone Film Academy",
    //   date: "2023",
    //   verified: true
    // },
    // {
    //   title: "Safety Management Systems",
    //   issuer: "Professional Drone Pilots Association",
    //   date: "2024",
    //   verified: true
    // }
  ];

  // const stats = [
  //   { number: "10+", label: "Projects Completed" },
  //   { number: "3", label: "Years Experience" },
  //   { number: "5+", label: "Happy Clients" },
  //   { number: "6", label: "States Covered" }
  // ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Licensed & Certified
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With all necessary certifications and insurance 
            to operate safely and legally for commercial & private projects.
          </p>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#06B391] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-black rounded-xl p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#06B391]/20 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-[#06B391]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{cert.title}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                {cert.verified && (
                  <div className="flex items-center space-x-1 text-green-400">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;