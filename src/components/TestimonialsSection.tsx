import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Professional Bodybuilder",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      rating: 5,
      text: "The quality of equipment from BoldFit is exceptional. I've been using their dumbbells and resistance bands for 6 months now, and they're still in perfect condition."
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Fitness Enthusiast",
      image: "https://images.pexels.com/photos/1681011/pexels-photo-1681011.jpeg",
      rating: 5,
      text: "Amazing customer service and fast delivery! The yoga mat I ordered exceeded my expectations. Perfect grip and comfort for my daily practice."
    },
    {
      id: 3,
      name: "Arjun Singh",
      role: "Personal Trainer",
      image: "https://images.pexels.com/photos/1681012/pexels-photo-1681012.jpeg",
      rating: 5,
      text: "I recommend BoldFit to all my clients. Their equipment is professional-grade and perfect for both home and commercial gym setups."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-gray-600 mb-2">
            CUSTOMER REVIEWS
          </p>
          <h2 className="text-4xl font-black text-gray-900">
            WHAT OUR <span className="text-orange-500">ATHLETES</span> SAY
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;