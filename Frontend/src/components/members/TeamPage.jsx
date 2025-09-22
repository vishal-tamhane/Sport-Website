import React from 'react';
import MemberCard from './MemberCard';

const facultyMembers = [
  {
    name: 'Dr. Jane Doe',
    position: 'Professor',
    image_url: 'https://via.placeholder.com/180',
    instagram_url: 'https://www.instagram.com/janedoe',
    email: 'jane.doe@example.edu',
  },
  {
    name: 'Dr. John Smith',
    position: 'Associate Professor',
    image_url: 'https://via.placeholder.com/180',
    instagram_url: 'https://www.instagram.com/johnsmith',
    email: 'john.smith@example.edu',
  },
];

const coreMembers = [
  {
    name: 'Alice Williams',
    position: 'Team Lead',
    image_url: 'https://via.placeholder.com/180',
    instagram_url: 'https://www.instagram.com/alicew',
    email: 'alice.w@example.com',
  },
  {
    name: 'Bob Johnson',
    position: 'Project Manager',
    image_url: 'https://via.placeholder.com/180',
    instagram_url: 'https://www.instagram.com/bobj',
    email: 'bob.j@example.com',
  },
];

const teamMembers = [
  {
    name: 'Charlie Brown',
    position: 'Member',
    image_url: 'https://via.placeholder.com/180',
    instagram_url: 'https://www.instagram.com/charlieb',
    email: 'charlie.b@example.com',
  },
  {
    name: 'Diana Prince',
    position: 'Member',
    image_url: 'https://via.placeholder.com/180',
    instagram_url: null,
    email: 'diana.p@example.com',
  },
];

const TeamPage = () => {
  return (
    <div className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-blue-500 my-8">Faculty Members</h2>
        <div className="flex flex-wrap justify-center">
          {facultyMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        <h2 className="text-center text-4xl font-bold text-blue-500 my-8">Core Members</h2>
        <div className="flex flex-wrap justify-center">
          {coreMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        <h2 className="text-center text-4xl font-bold text-blue-500 my-8">All Team Members</h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;