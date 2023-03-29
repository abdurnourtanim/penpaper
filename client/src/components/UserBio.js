import React from "react";

const UserBio = ({ user }) => {
  const { name, address, collage, company } = user;
  return (
    <div className="text-center mt-12">
      <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
        {name}
      </h3>
      <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
        <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>
        {`${address.city},${address.country}`}
      </div>
      <div className="mb-2 text-gray-700 mt-10">
        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
        {`${company.position},${company.name}`}
      </div>
      <div className="mb-2 text-gray-700">
        <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
        {collage}
      </div>
    </div>
  );
};

export default UserBio;
