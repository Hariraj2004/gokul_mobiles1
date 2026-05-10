import { motion } from 'framer-motion';
import { BadgeCheck, Tag, Zap, HeartHandshake, Headphones, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Genuine Products",
      desc: "100% authentic mobile phones and accessories with brand warranty."
    },
    {
      icon: <Tag className="w-8 h-8" />,
      title: "Best Price",
      desc: "Competitive pricing and exclusive store offers you won't find online."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Latest Models",
      desc: "Be the first to get your hands on newly launched smartphones."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Friendly Support",
      desc: "Personalized assistance to help you choose the right device."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Accessories Available",
      desc: "Complete range of premium covers, glasses, and audio gear."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Service",
      desc: "Fast billing, immediate setup, and reliable after-sales support."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Choose <span className="text-electric-blue">Gokul Mobiles</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We don't just sell phones, we build relationships. Here is why our customers keep coming back.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-dark-gray/40 border border-gray-800 hover:bg-dark-gray/80 hover:border-electric-blue/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6 text-gray-400 group-hover:text-electric-blue group-hover:scale-110 transition-all border border-gray-800 group-hover:border-electric-blue/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
