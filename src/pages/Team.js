// src/pages/Team.jsx
import React, { useEffect } from 'react';
import { teamMembers } from '../data/team';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-orange-600 to-red-600 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Meet Our <span className="text-yellow-400 drop-shadow-lg">Team</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-95 leading-relaxed">
                Dedicated professionals committed to transforming lives through education and empowerment
              </p>
              
            </div>
            
            {/* Hero Image */}
            <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="assets/newrise/placeholder-image.png" 
                alt="Our Team" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-orange-500/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative">
              Our Leadership Team
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-4"></div>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8">
              Meet the passionate individuals driving our mission forward with dedication, expertise, and unwavering commitment to our cause.
            </p>
          </div>

          {/* Team Grid */}
          <div className="space-y-16 sm:space-y-24">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex lg:items-center lg:gap-16`}
              >
                {/* Background Decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index % 2 === 0 
                    ? 'from-orange-50 to-red-50 lg:rounded-r-[100px]' 
                    : 'from-red-50 to-orange-50 lg:rounded-l-[100px]'
                } opacity-30 lg:opacity-50 -z-10 transform scale-95 group-hover:scale-100 transition-transform duration-500`}></div>
                
                {/* Image Container */}
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={member.image || 'assets/newrise/volunteer.jpeg'}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:w-1/2 mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0 ${
                  index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                } text-center`}>
                  <div className="max-w-lg mx-auto lg:mx-0">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-lg sm:text-xl font-semibold text-orange-600 mb-6 uppercase tracking-wider">
                      {member.position}
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                      {member.bio || "Dedicated to our mission of empowering vulnerable children and youth through education, healthcare advocacy, and sustainable community development programs that create lasting positive impact."}
                    </p>

                    {/* Specialties */}
                    {member.specialties && (
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Areas of Expertise</h4>
                        <div className={`flex flex-wrap gap-2 ${
                          index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                        } justify-center`}>
                          {member.specialties.map((specialty, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium border border-gray-300 hover:from-orange-100 hover:to-red-100 hover:border-orange-300 transition-all duration-300"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contact */}
                    {member.contact?.email && (
                      <div className="inline-flex items-center gap-3 text-orange-600 hover:text-red-600 transition-colors duration-300 group/contact">
                        <span className="text-xl">✉</span>
                        <a
                          href={`mailto:${member.contact.email}`}
                          className="font-medium hover:underline"
                        >
                          {member.contact.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Team;