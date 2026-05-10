import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-black z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-electric-blue/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-dark-gray/50 border border-gray-800 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Premium Tech Showroom</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-purple-500">Smartphones</span> <br/>
              & Accessories
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Experience the best deals, trusted service, and 100% genuine products at your local premium mobile destination.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-white text-black rounded-full font-semibold transition-transform hover:scale-105"
              >
                Visit Store
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <a 
                href="https://wa.me/919876543210?text=Hello,%20I%20want%20to%20know%20about%20your%20mobile%20offers."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 bg-dark-gray text-white border border-gray-700 rounded-full font-semibold transition-all hover:bg-gray-800 hover:border-gray-600"
              >
                <MessageCircle className="mr-2 w-5 h-5 text-green-500" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] border border-gray-800 shadow-2xl shadow-electric-blue/10">
              {/* Replace with actual high-quality mobile phone image */}
              <img 
                src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Latest Smartphones" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-dark-gray/90 backdrop-blur-sm border border-gray-700 p-4 rounded-2xl shadow-xl"
            >
              <p className="text-electric-blue font-bold text-xl">100%</p>
              <p className="text-xs text-gray-400">Genuine</p>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-dark-gray/90 backdrop-blur-sm border border-gray-700 p-4 rounded-2xl shadow-xl"
            >
              <p className="text-white font-bold text-lg">Best Deals</p>
              <p className="text-xs text-gray-400">Guaranteed</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
