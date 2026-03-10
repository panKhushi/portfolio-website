
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

const response = await fetch("https://formspree.io/f/xeeragbj", {
  method: "POST",
  headers: {
    "Accept": "application/json"
  },
  body: formData
});

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Something went wrong.");
  }
};


  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-400/30">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">panwarkhushi888@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-400/30">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-semibold">+91 98714 33438</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-400/30">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">India</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            ></textarea>

            <button
              type="submit"
              onClick={(e) => handleSubmit(e as any)}
              className="w-full px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-400/50 flex items-center justify-center space-x-2 group"
            >
              <span>Send Message</span>
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
