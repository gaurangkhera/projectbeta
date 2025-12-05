'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    department: '',
    why: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const departments = [
    'Web Development',
    'App Development',
    'AI/ML',
    'Cybersecurity',
    'Design (UI/UX)',
    'Content & Media',
  ];

  const classes = ['9', '10', '11', '12'];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.class) newErrors.class = 'Class is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.why.trim()) newErrors.why = 'This field is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="animate-fade-in">
              <div className="w-24 h-24 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center animate-glow">
                <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 gradient-text">
                Registration Successful! 🎉
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Welcome to ProjectBeta 9.0! We&apos;re excited to have you on board.
                Check your email for further details.
              </p>
              <Button onClick={() => window.location.href = '/'}>
                Return to Home
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 gradient-text">
              Join ProjectBeta 9.0
            </h1>
            <p className="text-lg text-slate-300">
              Take the first step towards innovation and excellence
            </p>
          </div>

          <Card className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="1234567890"
                  required
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  School Class
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg glass border border-slate-600/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-white"
                  required
                >
                  <option value="">Select your class</option>
                  {classes.map((cls) => (
                    <option key={cls} value={cls} className="bg-slate-900-light">
                      Class {cls}
                    </option>
                  ))}
                </select>
                {errors.class && (
                  <p className="text-red-400 text-sm mt-1">{errors.class}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Department Preference
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg glass border border-slate-600/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-white"
                  required
                >
                  <option value="">Select a department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept} className="bg-slate-900-light">
                      {dept}
                    </option>
                  ))}
                </select>
                {errors.department && (
                  <p className="text-red-400 text-sm mt-1">{errors.department}</p>
                )}
              </div>

              <div>
                <TextArea
                  label="Why do you want to join ProjectBeta?"
                  name="why"
                  value={formData.why}
                  onChange={handleChange}
                  placeholder="Tell us about your passion for technology and what you hope to achieve..."
                  rows={4}
                  required
                />
                {errors.why && (
                  <p className="text-red-400 text-sm mt-1">{errors.why}</p>
                )}
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full text-lg py-4">
                  Submit Registration
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
