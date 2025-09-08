import React from 'react';

const UpdatesPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Club Updates</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">New Sports Equipment Arriving Soon</h2>
          <p className="text-gray-600 mb-4">Posted on: September 5, 2025</p>
          <p className="mb-4">
            We're excited to announce that new sports equipment for our cricket, football, and basketball
            teams will be arriving next week! This upgrade includes professional-grade gear that will
            enhance training and competition performance.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Upcoming Tournament Registration Open</h2>
          <p className="text-gray-600 mb-4">Posted on: August 28, 2025</p>
          <p className="mb-4">
            Registration for the annual inter-department tournament is now open! All students interested
            in participating should register through their department sports representatives by September 15th.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">New Coach Appointment</h2>
          <p className="text-gray-600 mb-4">Posted on: August 15, 2025</p>
          <p className="mb-4">
            We're pleased to welcome Mr. Rajesh Sharma as our new basketball coach. Coach Sharma brings
            over 15 years of experience and has previously worked with several national-level teams.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;
