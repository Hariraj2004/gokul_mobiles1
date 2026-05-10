import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-electric-blue">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Have a question about a product or need support? We're here to help you out. Drop by our store or send us a message.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-dark-gray/50 rounded-2xl border border-gray-800 text-electric-blue">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-dark-gray/50 rounded-2xl border border-gray-800 text-electric-blue">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Address</h4>
                  <p className="text-gray-400">hello@gokulmobiles.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-dark-gray/50 rounded-2xl border border-gray-800 text-electric-blue">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Store Address</h4>
                  <p className="text-gray-400">123 Main Street, City Center,<br />State 123456</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-dark-gray/50 rounded-2xl border border-gray-800 text-electric-blue">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Working Hours</h4>
                  <p className="text-gray-400">Monday - Sunday<br />10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-gray/30 p-8 md:p-10 rounded-3xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-electric-blue hover:bg-sky-400 text-white font-semibold py-4 rounded-xl transition-colors flex justify-center items-center">
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
