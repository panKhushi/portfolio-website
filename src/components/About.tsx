import myPhoto from "../assets/Data science.jpg";
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-xl">
                <img
                   src={myPhoto}  
                  alt="About Khushi Panwar"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-white space-y-6">
            <h3 className="text-3xl font-bold">Data Scientist & AI Specialist</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate Data Scientist with a strong foundation in statistical analysis,
              machine learning, and artificial intelligence. With expertise in transforming raw
              data into actionable insights, I help organizations make data-driven decisions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in data science has equipped me with comprehensive skills in Python
              programming, database management, advanced analytics, and cutting-edge AI technologies.
              I specialize in building predictive models, developing intelligent systems, and
              creating data visualizations that tell compelling stories.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether it's exploratory data analysis, implementing machine learning algorithms,
              or designing end-to-end data pipelines, I bring a detail-oriented approach and
              a commitment to excellence in every project.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-cyan-400/30">
                <p className="text-cyan-400 text-3xl font-bold mb-1">1+</p>
                <p className="text-gray-400">Year of Learning & Practice</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-cyan-400/30">
                <p className="text-cyan-400 text-3xl font-bold mb-1">10+</p>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
