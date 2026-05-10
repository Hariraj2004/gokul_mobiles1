import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Local Guide",
      content: "Best mobile shop in the area! I bought my iPhone here and got a free premium cover. The staff is very polite and helpful.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
      name: "Priya Patel",
      role: "Regular Customer",
      content: "Genuine products at very reasonable prices. They helped me transfer all my data to the new phone without any hassle. Highly recommended!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
      name: "Amit Kumar",
      role: "Tech Enthusiast",
      content: "Great collection of smartwatches and earbuds. I was looking for a specific model and they arranged it for me within a day. Excellent service.",
      rating: 4,
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-dark-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What Our <span className="text-electric-blue">Customers</span> Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Don't just take our word for it. Read reviews from our satisfied customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-black border border-gray-800 hover:border-gray-700 transition-colors shadow-xl"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-gray-800 opacity-50" />
              
              <div className="flex space-x-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 relative z-10 italic leading-relaxed">
                "{review.content}"
              </p>
              
              <div className="flex items-center space-x-4 relative z-10 border-t border-gray-800 pt-6">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-dark-gray"
                />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
