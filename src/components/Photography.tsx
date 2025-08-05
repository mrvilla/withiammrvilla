import { useState } from 'react';
import { Camera, ZoomIn, Award, MapPin } from 'lucide-react';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photoCategories = [
    {
      title: "Real Estate",
      photos: [
        {
          id: 1,
          src: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Luxury Villa Exterior",
          location: "Malibu, CA"
        },
        {
          id: 2,
          src: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Modern Architecture",
          location: "Beverly Hills, CA"
        },
        {
          id: 3,
          src: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Waterfront Property",
          location: "Miami, FL"
        }
      ]
    },
    {
      title: "Landscapes & Tourism",
      photos: [
        {
          id: 4,
          src: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Coastal Sunset",
          location: "Big Sur, CA"
        },
        {
          id: 5,
          src: "https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Mountain Vista",
          location: "Colorado Rockies"
        },
        {
          id: 6,
          src: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Desert Resort",
          location: "Scottsdale, AZ"
        }
      ]
    },
    {
      title: "Commercial & Industrial",
      photos: [
        {
          id: 7,
          src: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Corporate Campus",
          location: "Silicon Valley, CA"
        },
        {
          id: 8,
          src: "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Industrial Complex",
          location: "Houston, TX"
        },
        {
          id: 9,
          src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Construction Progress",
          location: "New York, NY"
        }
      ]
    }
  ];

  const allPhotos = photoCategories.flatMap(category => category.photos);

  return (
    <section id="photography" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Aerial Photography
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capturing breathtaking aerial perspectives with professional-grade equipment 
            and artistic vision. Every shot tells a story from above.
          </p>
        </div>

        {/* Featured Photo */}
        <div className="mb-16">
          <div className="relative aspect-[21/9] bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Featured aerial photography"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-500/80 text-white text-sm px-3 py-1 rounded-full">
                  Featured Shot
                </div>
                <div className="bg-[#a47764]/80 text-white text-sm px-3 py-1 rounded-full">
                  Award Winner 2024
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Golden Hour Coastline</h3>
              <p className="text-gray-200 flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Pacific Coast Highway, California</span>
              </p>
            </div>
          </div>
        </div>

        {/* Photo Categories */}
        {photoCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
              <Camera className="h-6 w-6 text-[#a47764]" />
              <span>{category.title}</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {category.photos.map((photo) => (
                <div
                  key={photo.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <div className="relative aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden mb-4">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <ZoomIn className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-semibold mb-1">{photo.title}</h4>
                      <p className="text-gray-300 text-sm flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{photo.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Photography Stats */}
        <div className="bg-black rounded-2xl p-8 border border-gray-600">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#a47764] mb-2">2000+</div>
              <div className="text-gray-300">Photos Captured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#a47764] mb-2">50+</div>
              <div className="text-gray-300">Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#a47764] mb-2">4K</div>
              <div className="text-gray-300">Ultra HD Quality</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#a47764] mb-2">24hr</div>
              <div className="text-gray-300">Delivery Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photography;