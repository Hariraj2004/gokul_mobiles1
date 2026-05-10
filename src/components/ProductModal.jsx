import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Cpu, Camera, Battery, Smartphone, HardDrive, Palette } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const handleWhatsApp = () => {
    const phoneNumber = "919876543210";
    const message = `Hello, I want details about ${product.brand} ${product.model}.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-gray border border-gray-800 rounded-3xl z-[70] shadow-2xl flex flex-col md:flex-row hide-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black text-gray-300 hover:text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Section */}
            <div className="w-full md:w-2/5 bg-black p-8 flex items-center justify-center relative min-h-[300px]">
              <div className="absolute top-4 left-4 flex gap-2">
                 {product.is5G && (
                  <span className="bg-electric-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                    5G
                  </span>
                )}
                <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.year}
                </span>
              </div>
              <img 
                src={product.image} 
                alt={product.model} 
                className="w-full max-h-[400px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-3/5 p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-electric-blue font-medium mb-1">{product.brand}</p>
                <h2 className="text-3xl font-bold text-white mb-2">{product.model}</h2>
                <p className="text-2xl text-gray-300 font-semibold">{product.priceRange}</p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/50 p-4 rounded-xl border border-gray-800">
                  <div className="flex items-center text-gray-400 mb-1">
                    <HardDrive className="w-4 h-4 mr-2" />
                    <span className="text-xs uppercase tracking-wider">Storage & RAM</span>
                  </div>
                  <p className="text-white text-sm font-medium">{product.storage}</p>
                  <p className="text-gray-400 text-xs">{product.ram} RAM</p>
                </div>
                
                <div className="bg-black/50 p-4 rounded-xl border border-gray-800">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Cpu className="w-4 h-4 mr-2" />
                    <span className="text-xs uppercase tracking-wider">Processor</span>
                  </div>
                  <p className="text-white text-sm font-medium">{product.processor}</p>
                </div>

                <div className="bg-black/50 p-4 rounded-xl border border-gray-800">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Camera className="w-4 h-4 mr-2" />
                    <span className="text-xs uppercase tracking-wider">Cameras</span>
                  </div>
                  <p className="text-white text-sm font-medium">{product.camera}</p>
                </div>

                <div className="bg-black/50 p-4 rounded-xl border border-gray-800">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Battery className="w-4 h-4 mr-2" />
                    <span className="text-xs uppercase tracking-wider">Battery</span>
                  </div>
                  <p className="text-white text-sm font-medium">{product.battery}</p>
                </div>

                <div className="bg-black/50 p-4 rounded-xl border border-gray-800 col-span-2">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Smartphone className="w-4 h-4 mr-2" />
                    <span className="text-xs uppercase tracking-wider">Display</span>
                  </div>
                  <p className="text-white text-sm font-medium">{product.display}</p>
                </div>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <div className="flex items-center text-gray-400 mb-3">
                  <Palette className="w-4 h-4 mr-2" />
                  <span className="text-xs uppercase tracking-wider">Available Colors</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, idx) => (
                    <span key={idx} className="bg-black border border-gray-700 px-3 py-1.5 rounded-lg text-sm text-gray-300">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-6 border-t border-gray-800 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-colors flex justify-center items-center group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Ask on WhatsApp
                </button>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
