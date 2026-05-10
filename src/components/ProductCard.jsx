import { motion } from 'framer-motion';
import { Wifi, Cpu, Camera, Battery, Maximize } from 'lucide-react';

const ProductCard = ({ product, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      layout
      whileHover={{ y: -5 }}
      onClick={() => onClick(product)}
      className="group relative bg-dark-gray/20 border border-gray-800 hover:border-electric-blue/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
        {product.is5G && (
          <span className="bg-electric-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            5G Ready
          </span>
        )}
        {product.trending && (
          <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Trending
          </span>
        )}
      </div>

      <div className="absolute top-4 right-4 z-10">
        <span className="bg-black/80 backdrop-blur-md text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-700">
          {product.year}
        </span>
      </div>

      {/* Image Container */}
      <div className="h-64 overflow-hidden relative bg-black/40 flex items-center justify-center p-6">
        <img 
          src={product.image} 
          alt={product.model} 
          className="max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-electric-blue text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Maximize className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric-blue transition-colors">
          {product.model}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{product.storage} • {product.ram} RAM</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center text-xs text-gray-500">
            <Cpu className="w-3 h-3 mr-1.5 text-gray-400" />
            <span className="truncate">{product.processor}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Camera className="w-3 h-3 mr-1.5 text-gray-400" />
            <span className="truncate">Advanced Camera</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Battery className="w-3 h-3 mr-1.5 text-gray-400" />
            <span className="truncate">{product.battery}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Wifi className="w-3 h-3 mr-1.5 text-gray-400" />
            <span>{product.is5G ? '5G' : '4G LTE'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Price Range</p>
            <p className="text-white font-semibold">{product.priceRange}</p>
          </div>
          {product.inStore ? (
            <span className="text-green-400 text-xs font-medium bg-green-400/10 px-2 py-1 rounded-md border border-green-400/20">
              In Store
            </span>
          ) : (
            <span className="text-yellow-400 text-xs font-medium bg-yellow-400/10 px-2 py-1 rounded-md border border-yellow-400/20">
              Pre-order
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
