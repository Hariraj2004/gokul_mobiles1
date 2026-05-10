import { motion } from 'framer-motion';
import { ShieldCheck, ThumbsUp, Wrench, IndianRupee } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-electric-blue" />,
      title: "Trusted Local Store",
      desc: "Serving our community with authentic products for years."
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-electric-blue" />,
      title: "Friendly Support",
      desc: "We guide you to choose the perfect device for your needs."
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-electric-blue" />,
      title: "Affordable Prices",
      desc: "Best market rates on all smartphones and accessories."
    },
    {
      icon: <Wrench className="w-8 h-8 text-electric-blue" />,
      title: "Quick Service",
      desc: "Reliable after-sales support and immediate assistance."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-electric-blue tracking-widest uppercase mb-3">
              About Our Shop
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Your Trusted Destination for <span className="text-gray-400">Premium Tech</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At Gokul Mobiles, we believe in providing more than just devices. We offer a curated experience where you can explore the latest smartphones, premium accessories, and expert advice. Our commitment to genuine products and exceptional customer service has made us the go-to local store for tech enthusiasts.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-dark-gray/30 border border-gray-800/50 hover:bg-dark-gray/50 transition-colors"
                >
                  <div className="flex-shrink-0 bg-black p-3 rounded-xl border border-gray-800">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Store View" 
                className="w-full h-64 object-cover rounded-3xl border border-gray-800"
              />
              <img 
                src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Accessories" 
                className="w-full h-48 object-cover rounded-3xl border border-gray-800"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Latest Devices" 
                className="w-full h-48 object-cover rounded-3xl border border-gray-800"
              />
              <img 
                src="https://images.unsplash.com/photo-1601784551446-20c9e07cd8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Customer Service" 
                className="w-full h-64 object-cover rounded-3xl border border-gray-800"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
