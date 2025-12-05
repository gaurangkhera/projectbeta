import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  const stats = [
    { value: '100+', label: 'Members' },
    { value: '5+', label: 'Departments' },
    { value: '20+', label: 'Events/Year' },
    { value: '3+', label: 'Years' },
  ];

  const highlights = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology and creative solutions',
    },
    {
      title: 'Collaboration',
      description: 'Working together to build amazing projects and learn from each other',
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do',
    },
  ];

  return (
    <div className="pt-20">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">ProjectBeta</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-4 animate-slide-up">
            Where Innovation Meets Passion
          </p>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Sanskriti School&apos;s premier technology club - fostering creativity, innovation, and technical excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/register">
              <Button variant="primary" className="w-full sm:w-auto">
                Join ProjectBeta 9.0
              </Button>
            </Link>
            <Link href="/departments">
              <Button variant="outline" className="w-full sm:w-auto">
                Explore Departments
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300 text-sm md:text-base">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Our Mission
          </h2>
          <Card className="text-center">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              At ProjectBeta, we believe in empowering students through technology. 
              We provide a platform for passionate individuals to explore, learn, and create 
              innovative solutions while building a strong community of tech enthusiasts. 
              From web development to artificial intelligence, we cover it all.
            </p>
          </Card>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          What We Stand For
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {highlight.title}
              </h3>
              <p className="text-slate-300">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Registration for ProjectBeta 9.0 is now open! 
            Be part of something extraordinary and unleash your potential.
          </p>
          <Link href="/register">
            <Button variant="primary" className="text-lg px-8 py-4">
              Register Now
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
}
