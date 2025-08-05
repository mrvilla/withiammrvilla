import React, { useState } from 'react';
import { Play, Camera, Film, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      type: 'video',
      title: "Luxury Real Estate Showcase",
      thumbnail: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2:45",
      category: "Real Estate"
    },
    {
      id: 2,
      type: 'photo',
      title: "Coastal Sunset Aerial",
      thumbnail: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Tourism"
    },
    {
      id: 3,
      type: 'video',
      title: "Film Production BTS",
      thumbnail: "https://images.pexels.com/photos/1834386/pexels-photo-1834386.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4:15",
      category: "Film"
    },
    {
      id: 4,
      type: 'photo',
      title: "Urban Architecture",
      thumbnail: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Commercial"
    },
    {
      id: 5,
      type: 'video',
      title: "Wedding Ceremony Aerial",
      thumbnail: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3:30",
      category: "Wedding"
    },
    {
      id: 6,
      type: 'photo',
      title: "Mountain Landscape",
      thumbnail: "https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Tourism"
    },
    {
      id: 7,
      type: 'photo',
      title: "Industrial Complex",
      thumbnail: "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Commercial"
    },
    {
      id: 8,
      type: 'video',
      title: "Resort Marketing Video",
      thumbnail: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2:15",
      category: "Tourism"
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our complete collection of aerial videography and photography work, 
            showcasing stunning perspectives across various industries and creative projects.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#a47764] text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All Work
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                activeTab === 'video'
                  ? 'bg-[#a47764] text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Film className="h-4 w-4" />
              <span>Videos</span>
            </button>
            <button
              onClick={() => setActiveTab('photo')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                activeTab === 'photo'
                  ? 'bg-[#a47764] text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Camera className="h-4 w-4" />
              <span>Photos</span>
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-square bg-gray-900 rounded-xl overflow-hidden mb-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                
                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Play className="h-6 w-6 text-white ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Photo Icon */}
                {item.type === 'photo' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}

                {/* Duration for videos */}
                {item.type === 'video' && item.duration && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/60 text-white text-sm px-2 py-1 rounded">
                      {item.duration}
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[#a47764]/80 text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-white text-xs px-2 py-1 rounded ${
                    item.type === 'video' ? 'bg-[#c49882]/80' : 'bg-[#a47764]/80'
                  }`}>
                    {item.type === 'video' ? 'Video' : 'Photo'}
                  </span>
                </div>
              </div>
              <h4 className="text-white font-semibold group-hover:text-[#a47764] transition-colors">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 text-[#a47764] hover:text-[#c49882] transition-colors font-semibold">
            <span>View Complete Portfolio</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;