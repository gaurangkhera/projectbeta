import Card from '@/components/Card';

export default function Departments() {
  const departments = [
    {
      name: 'Web Development',
      icon: '🌐',
      description: 'Build stunning websites and web applications using modern frameworks like React, Next.js, and more.',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'App Development',
      icon: '📱',
      description: 'Create powerful mobile applications for iOS and Android using Flutter, React Native, and native technologies.',
      skills: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'AI/ML',
      icon: '🤖',
      description: 'Explore artificial intelligence and machine learning to build intelligent systems and predictive models.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science', 'Neural Networks'],
      color: 'from-green-500 to-teal-500',
    },
    {
      name: 'Cybersecurity',
      icon: '🔒',
      description: 'Learn to protect systems and networks, conduct ethical hacking, and understand security protocols.',
      skills: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Penetration Testing', 'Security Audits'],
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'Design (UI/UX)',
      icon: '🎨',
      description: 'Design beautiful and intuitive user interfaces and experiences that delight users.',
      skills: ['Figma', 'Adobe XD', 'UI Design', 'UX Research', 'Prototyping'],
      color: 'from-yellow-500 to-amber-500',
    },
    {
      name: 'Content & Media',
      icon: '📸',
      description: 'Create engaging content, manage social media, produce videos, and tell compelling stories.',
      skills: ['Content Writing', 'Video Editing', 'Social Media', 'Photography', 'Marketing'],
      color: 'from-indigo-500 to-violet-500',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Our Departments
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore diverse fields of technology and find your passion
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${dept.color} p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{dept.icon}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">
                {dept.name}
              </h3>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {dept.description}
              </p>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">
                  Key Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {dept.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full glass border border-slate-600/30 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Find Your Path
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Not sure which department suits you? Join us and explore! 
              You&apos;ll have the opportunity to work across different departments 
              and discover where your interests truly lie.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
