import { motion } from "framer-motion";


export default function InternshipCard({ internship, setIsOpen }) {
  return (
    <motion.div
      layout
      initial={{ transform: "scale(.8)" }}
      animate={{ transform: "scale(1)" }}
      transition={{ type: "spring", duration: 1.2, stiffness: 70 }}
      className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 hover:shadow-xl transition"
    >
        
    {/* Logo + Company */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <img
            src={`http://localhost:1337${internship.logo.url}`}
            alt={internship.companyName}
            className="w-12 h-12 object-contain"
          />
          <button className="text-secondary text-xs sm:text-sm border-secondary border-[2px] px-2 py-1 rounded-sm">
            <span>{internship.type}</span>
          </button>
        </div>
        <div>
          <h3 className="text-base sm:text-lg text-textp font-semibold">
            {internship.title}
          </h3>
          <p className="text-sm text-gray-500">{internship.companyName}</p>
        </div>
      </div>

      {/* Location + Duration */}
      <div className="flex flex-col text-sm text-gray-600">
        <span>
          <span className="font-bold">Location: </span>
          {internship.location}
        </span>
        <span className="mb-3">
          <span className="font-bold">Duration: </span>
          {internship.duration} months
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm">{internship.describtion}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {internship.skills &&
          internship.skills.split(",").map((skill, index) => (
            <span
              key={index}
              className="bg-blue-50 text-secondary px-3 py-1 rounded-full text-xs"
            >
              {skill.trim()}
            </span>
          ))}
      </div>

      <div>
        <button
          onClick={() => setIsOpen(internship)}
          className="text-bgp font-bold bg-secondary mt-3 text-xs sm:text-[18px] hover:bg-blue-500 cursor-pointer border-[2px] px-3 py-2 rounded-sm self-start sm:self-center"
        >
          Apply Now
        </button>
      </div>
    </motion.div>
  );
}