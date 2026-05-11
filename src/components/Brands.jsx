import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Brands = () => {
  const brands = [
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Vivo', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Vivo_mobile_logo.png' },
    { name: 'Oppo', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/OPPO_LOGO_2019.svg' },
    { name: 'Redmi', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Redmi_Logo.png' },
    { name: 'Realme', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Realme_logo.png' },
    { name: 'Poco', logo: '' },
  ];

  return (
    <section className="py-20 border-y border-gray-900 bg-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 font-medium tracking-widest uppercase mb-12 text-sm">
          Authorized Retailer For
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Link 
                to={`/brand/${brand.name.toLowerCase()}`}
                className="relative w-32 h-16 flex items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 group block"
              >
                {/* Fallback to text if image fails to load/is SVG that needs invert in dark mode */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-bold text-gray-300 tracking-wider mix-blend-difference">{brand.name}</h4>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
