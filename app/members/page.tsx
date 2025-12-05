import Card from '@/components/Card';
import Badge from '@/components/Badge';

export default function Members() {
  const executiveBoard = [
    {
      name: 'Arjun Sharma',
      role: 'President',
      department: 'AI/ML',
      image: '👨‍💼',
      bio: 'Leading innovation and fostering collaboration across all departments',
    },
    {
      name: 'Priya Patel',
      role: 'Vice President',
      department: 'Web Development',
      image: '👩‍💼',
      bio: 'Driving technical excellence and mentoring new members',
    },
    {
      name: 'Rahul Verma',
      role: 'Technical Lead',
      department: 'Cybersecurity',
      image: '👨‍💻',
      bio: 'Overseeing technical projects and ensuring quality standards',
    },
  ];

  const teamMembers = [
    { name: 'Ananya Gupta', role: 'Web Dev Lead', department: 'Web Development', image: '👩‍💻' },
    { name: 'Karan Singh', role: 'App Dev Lead', department: 'App Development', image: '👨‍💻' },
    { name: 'Sneha Reddy', role: 'AI/ML Lead', department: 'AI/ML', image: '👩‍🔬' },
    { name: 'Vikram Joshi', role: 'Cyber Lead', department: 'Cybersecurity', image: '👨‍💼' },
    { name: 'Neha Kapoor', role: 'Design Lead', department: 'Design', image: '👩‍🎨' },
    { name: 'Aditya Kumar', role: 'Content Lead', department: 'Content', image: '👨‍✍️' },
    { name: 'Riya Mehta', role: 'Events Head', department: 'Events', image: '👩‍💼' },
    { name: 'Siddharth Roy', role: 'Outreach Head', department: 'Outreach', image: '👨‍💼' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Our Team
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation at ProjectBeta
          </p>
        </div>

        {/* Executive Board */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Executive Board
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {executiveBoard.map((member, index) => (
              <Card key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {member.name}
                </h3>
                <Badge variant="primary" className="mb-3">
                  {member.role}
                </Badge>
                <Badge variant="secondary" className="mb-4">
                  {member.department}
                </Badge>
                <p className="text-slate-300 text-sm">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3 mt-4">
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Department Leads
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {member.name}
                </h3>
                <Badge variant="accent" className="text-xs mb-2">
                  {member.role}
                </Badge>
                <p className="text-slate-400 text-xs">
                  {member.department}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
