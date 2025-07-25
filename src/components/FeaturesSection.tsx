import React from 'react';
import { Truck, Shield, Headphones, RotateCcw } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "FREE SHIPPING",
      description: "On orders above ₹999",
      color: "text-blue-600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "QUALITY GUARANTEE", 
      description: "Premium gym equipment",
      color: "text-green-600"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 SUPPORT",
      description: "Expert fitness guidance", 
      color: "text-purple-600"
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: "EASY RETURNS",
      description: "30-day return policy",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer p-4"
            >
              <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300 ${feature.color}`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;