import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Attendance Tracker',
      description: 'Python-based attendance tracking system that records, updates, and analyzes student attendance with automated percentage calculation.',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'CSV/Excel', 'Data Processing'],
      github: 'https://github.com/panKhushi/Attendance-Tracker',
    },
    {
      title: 'Library Inventory System',
      description: 'A Python-based system to manage books, track inventory, update records, and streamline the borrowing and returning process.',
      image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'Inventory Management', 'Data Handling'],
      github: 'https://github.com/panKhushi/-Library-Inventory-System',
    },
    {
      title: 'Contact Manager',
      description: 'A Python-based contact management system that stores, updates, and organizes contact details with easy search and edit features.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'File Handling', 'Data Management'],
      github: 'https://github.com/panKhushi/Contact_manager',
    },
    {
      title: 'API Management',
      description: 'A system designed to create, manage, and monitor APIs efficiently with organized endpoints and smooth data communication between services.',
      image: 'https://images.pexels.com/photos/6693654/pexels-photo-6693654.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['API', 'Python', 'Backend'],
      github: 'https://github.com/panKhushi/Api.Assignment',
    },
    {
      title: 'Customer Churn Prediction',
      description: 'A machine learning model that analyzes customer behavior and predicts churn using classification algorithms to help businesses improve retention.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Machine Learning', 'Python', 'Data Analysis'],
      github: 'https://github.com/panKhushi/Customer-Churn-Prediction',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.github} target="_blank"
                    className="w-10 h-10 bg-slate-900/80 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.github} target="_blank"
                    className="w-10 h-10 bg-slate-900/80 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                  
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
