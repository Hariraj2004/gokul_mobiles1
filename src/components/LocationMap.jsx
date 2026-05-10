import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="py-24 bg-dark-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
          <div className="lg:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Find Us <span className="text-electric-blue">Here</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-xl text-lg mb-6"
            >
              Visit our premium showroom to experience the latest devices hands-on.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            <div className="flex items-start space-x-3 text-gray-300">
              <MapPin className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
              <p>Gokul Mobiles, Main Street, City Center, State 123456</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/BMJEiv58i4WAD7LK9?g_st=aw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-electric-blue hover:bg-sky-400 text-white font-semibold py-4 px-6 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/20"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden h-[500px] border border-gray-800 shadow-2xl relative bg-black"
        >
          {/* Fallback styling while map loads */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 animate-pulse">
            Loading Map...
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.076898934529!2d77.62534571871231!3d9.721473130635397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06db0067ff2505%3A0xc3ab5dd0ffdb356a!2sGokul%20Mobiles!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="relative z-10 grayscale invert hue-rotate-180 opacity-90 hover:grayscale-0 hover:invert-0 hover:hue-rotate-0 hover:opacity-100 transition-all duration-700"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default LocationMap;
