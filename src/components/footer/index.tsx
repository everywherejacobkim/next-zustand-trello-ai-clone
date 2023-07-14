import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} PlanIt Board. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
