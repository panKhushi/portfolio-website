const Skills = () => {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Data Analysis', level: 92 },
    { name: 'SQL & DBMS', level: 88 },
    { name: 'Artificial Intelligence', level: 85 },
    { name: 'Excel', level: 90 },
    { name: 'Neural Networking', level: 82 },
    { name: 'Data Visualization', level: 88 },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold text-lg">{skill.name}</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animation: `slideIn 1.5s ease-out ${index * 0.1}s backwards`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes slideIn {
            from {
              width: 0%;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
