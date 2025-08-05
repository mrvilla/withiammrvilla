import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const VideoReel = () => {
  const videos = [
    {
      id: 1,
      title: "Luxury Real Estate Showcase",
      thumbnail: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2:45",
      category: "Real Estate"
    },
    {
      id: 2,
      title: "Coastal Tourism Campaign",
      thumbnail: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3:20",
      category: "Tourism"
    },
    {
      id: 3,
      title: "Film Production BTS",
      thumbnail: "https://images.pexels.com/photos/1834386/pexels-photo-1834386.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4:15",
      category: "Film"
    },
    {
      id: 4,
      title: "Corporate Event Coverage",
      thumbnail: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2:30",
      category: "Commercial"
    }
  ];

  return (
    <section id="reel" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Video Reel
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch our latest drone videography projects showcasing cinematic aerial perspectives
            and professional production quality across various industries.
          </p>
        </div>

        {/* Main Featured Video */}
        <div className="mb-12">
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Featured drone video"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-all transform group-hover:scale-110">
                <Play className="h-12 w-12 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">Demo Reel 2024</h3>
              <p className="text-gray-200">A compilation of our best aerial cinematography work</p>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Play className="h-6 w-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-black/60 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[#a47764]/80 text-white text-xs px-2 py-1 rounded">
                    {video.category}
                  </span>
                </div>
              </div>
              <h4 className="text-white font-semibold group-hover:text-[#a47764] transition-colors">
                {video.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 text-[#a47764] hover:text-[#c49882] transition-colors font-semibold">
            <span>View Full Portfolio</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoReel;