import Card from '@/components/Card';
import Badge from '@/components/Badge';

export default function Events() {
  const upcomingEvents = [
    {
      title: 'Web Dev Workshop',
      date: 'December 15, 2025',
      time: '2:00 PM - 5:00 PM',
      venue: 'Computer Lab',
      type: 'Workshop',
      description: 'Learn the fundamentals of modern web development with hands-on coding sessions.',
    },
    {
      title: 'HackBeta 2025',
      date: 'January 20-21, 2026',
      time: '24 Hours',
      venue: 'School Auditorium',
      type: 'Hackathon',
      description: 'Our annual flagship hackathon - build innovative solutions and win exciting prizes!',
    },
    {
      title: 'AI/ML Guest Lecture',
      date: 'February 5, 2026',
      time: '4:00 PM - 5:30 PM',
      venue: 'Conference Room',
      type: 'Talk',
      description: 'Industry expert shares insights on the future of artificial intelligence.',
    },
  ];

  const pastEvents = [
    {
      title: 'CodeQuest 2024',
      date: 'November 2024',
      type: 'Competition',
      description: 'A competitive programming challenge with 50+ participants.',
      participants: 50,
    },
    {
      title: 'Design Thinking Workshop',
      date: 'October 2024',
      type: 'Workshop',
      description: 'Interactive workshop on UX/UI principles and prototyping.',
      participants: 30,
    },
    {
      title: 'Tech Talk Series',
      date: 'September 2024',
      type: 'Talk',
      description: 'Monthly series featuring talks from alumni in tech industry.',
      participants: 40,
    },
    {
      title: 'App Dev Bootcamp',
      date: 'August 2024',
      type: 'Workshop',
      description: 'Intensive 3-day bootcamp on Flutter app development.',
      participants: 25,
    },
  ];

  const eventTypeColors: Record<string, string> = {
    Workshop: 'primary',
    Hackathon: 'secondary',
    Talk: 'accent',
    Competition: 'primary',
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Events
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join us for workshops, hackathons, and tech talks throughout the year
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index} 
                className="animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={eventTypeColors[event.type] as 'primary' | 'secondary' | 'accent'}>
                    {event.type}
                  </Badge>
                  <span className="text-xs text-slate-400">{event.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-300">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.venue}
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm">
                  {event.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white">
            Past Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <Card 
                key={index} 
                className="animate-slide-up" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Badge variant={eventTypeColors[event.type] as 'primary' | 'secondary' | 'accent'} className="mb-3">
                  {event.type}
                </Badge>
                
                <h3 className="text-xl font-bold mb-2 text-white">
                  {event.title}
                </h3>
                
                <p className="text-xs text-slate-400 mb-3">
                  {event.date}
                </p>
                
                <p className="text-slate-300 text-sm mb-3">
                  {event.description}
                </p>
                
                <div className="flex items-center text-sm text-slate-400">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {event.participants} participants
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
