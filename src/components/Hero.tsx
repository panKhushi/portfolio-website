import { Github, Linkedin, Mail, Send } from 'lucide-react';
import myPhoto from "../assets/Profile.jpg";
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-xl md:text-2xl text-cyan-400">Hello, It's Me</h2>
            <h1 className="text-4xl md:text-6xl font-bold">
              Khushi Panwar
            </h1>
            <h3 className="text-2xl md:text-3xl">
              And I'm a <span className="text-cyan-400">Data Scientist</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              I'm a Data Science enthusiast with hands-on academic experience in data analysis and machine learning, and I'm excited to bring my skills into real-world projects as a fresher.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com/panKhushi"
                className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-panwar-5b6b1b276/"
                className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
              href="https://web.telegram.org/k/"
              className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Send size={20} />
              </a>

              <a
                href="mailto:panwarkhushi888@gmail.com@gmail.com"
                className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>

            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-full hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-400/50"
            >
              More About Me
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-400/50">
                <img
                  src={myPhoto}
                  alt="Khushi Panwar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
