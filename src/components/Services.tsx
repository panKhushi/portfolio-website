import { BarChart3, Database, Table, Code, Brain, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 size={40} />,
      title: 'Data Analysis',
      description: 'Transform complex datasets into meaningful insights using statistical methods and analytical techniques to drive business decisions.',
    },
    {
      icon: <Table size={40} />,
      title: 'Excel Analytics',
      description: 'Advanced Excel solutions including pivot tables, macros, dashboards, and automated reporting for efficient data management.',
    },
    {
      icon: <Database size={40} />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management using SQL, PostgreSQL, and other DBMS technologies.',
    },
    {
      icon: <Code size={40} />,
      title: 'Python Development',
      description: 'Custom Python solutions for data processing, automation, web scraping, and building scalable data applications.',
    },
    {
      icon: <Brain size={40} />,
      title: 'Machine Learning',
      description: 'Develop predictive models, classification systems, and recommendation engines using state-of-the-art ML algorithms.',
    },
    {
      icon: <Cpu size={40} />,
      title: 'Artificial Intelligence',
      description: 'Implement AI solutions including natural language processing, computer vision, and deep learning applications.',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 hover:-translate-y-2"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
