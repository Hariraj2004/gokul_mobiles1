import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { mobilesData } from '../data/mobiles';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const BrandPage = () => {
  const { brandId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Filter logic: Only filter by brand
  const filteredProducts = mobilesData.filter(product => {
    // Brand match (case insensitive)
    return product.brand.toLowerCase() === brandId.toLowerCase();
  });

  // Dynamic SEO title
  useEffect(() => {
    const brandName = brandId.charAt(0).toUpperCase() + brandId.slice(1);
    document.title = `${brandName} Mobiles - Gokul Mobiles`;
    return () => document.title = 'Gokul Mobiles'; // Cleanup
  }, [brandId]);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="mb-8 border-b border-gray-900 pb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-electric-blue flex items-center transition-colors">
              <Home className="w-4 h-4 mr-1" /> Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white capitalize">{brandId} Mobiles</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-bold text-white capitalize mb-2"
              >
                {brandId} <span className="text-electric-blue">Collection</span>
              </motion.h1>
              <p className="text-gray-400">Showing {filteredProducts.length} devices</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          {filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={setSelectedProduct}
                />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-dark-gray/20 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-2">No devices found</h3>
              <p className="text-gray-400 mb-6">We currently don't have devices for this brand.</p>
            </div>
          )}
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default BrandPage;
