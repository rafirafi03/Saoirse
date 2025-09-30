import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

export default function LeadershipTeam() {
  const [showAll, setShowAll] = useState(false);

  const teamMembers = [
    { id: 1, name: "Samuel Victor Micheal", role: "(MD)", image: "" },
    { id: 2, name: "Ashwath K", role: "(Director)", image: "" },
    { id: 3, name: "Muhammed Bilal V S", role: "(CEO)" },
    { id: 4, name: "Reynold sunny", role: "(COO)" },
    { id: 5, name: "Atherin Saju", role: "(HR)" },
    { id: 6, name: "Abdul kader", role: "(Creative Head)" },
  ];

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-200 pb-16 pt-6 px-4 sm:px-6 lg:px-8 font-satoshi text-[#484a5e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-center mb-12 lg:mb-16">
          Team Members
        </h1>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {displayedMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              {/* Card with Avatar */}
              <div className="w-full bg-gray-300 rounded-tr-3xl pt-8 pb-6 flex justify-center items-start">
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-blue-600 rounded-full overflow-hidden flex items-center justify-center">
                  {member?.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserAlt className="text-white w-12 h-12" />
                  )}
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center mt-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        {teamMembers.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gray-800 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
