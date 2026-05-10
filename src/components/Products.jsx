import { motion } from 'framer-motion';
import { Smartphone, Watch, Headphones, BatteryCharging, Shield, Speaker } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      title: "Latest Smartphones",
      desc: "Top flagship & budget models",
      icon: <Smartphone className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Smart Watches",
      desc: "Premium wearables",
      icon: <Watch className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Earbuds & Audio",
      desc: "Crystal clear sound",
      icon: <Headphones className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1606220588913-b3aecb4b2f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fast Chargers",
      desc: "Original adapters & cables",
      icon: <BatteryCharging className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Premium Protection",
      desc: "Tough cases & glasses",
      icon: <Shield className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1541892842429-0f4b301c22d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Bluetooth Speakers",
      desc: "Portable party starters",
      icon: <Speaker className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="products" className="py-24 bg-dark-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Explore Our <span className="text-electric-blue">Collection</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From the latest flagships to essential accessories, we have everything you need to stay connected and stylish.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-black border border-gray-800 hover:border-electric-blue/50 transition-colors"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 w-full p-6">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="p-2 bg-electric-blue/20 rounded-xl text-electric-blue backdrop-blur-sm border border-electric-blue/30">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-400 pl-14">{category.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
