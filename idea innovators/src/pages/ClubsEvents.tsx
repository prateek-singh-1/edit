import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { Users, Calendar, MapPin, Shirt } from "lucide-react";

const ClubsEvents = () => {
  const { isDark } = useTheme();
  const [openClub, setOpenClub] = useState<number | null>(null);

  const clubs = [
    {
      name: "Tech Club",
      members: 150,
      focus: "Technology & Innovation",
      subclubs: ["Codex", "Cyberhunter", "GDG"],
    },
    {
      name: "Cultural Society",
      members: 200,
      focus: "Arts & Culture",
      subclubs: ["Music", "Theatre", "Dance"],
    },
    {
      name: "Social Clubs",
      members: 180,
      focus: "Community Work",
      subclubs: ["Pahal", "NSS"],
    },
    {
      name: "Sports Club",
      members: 180,
      focus: "Sports & Fitness",
      subclubs: [],
    },
    {
      name: "Debate Society",
      members: 90,
      focus: "Public Speaking",
      subclubs: [],
    },
    {
      name: "Music Club",
      members: 120,
      focus: "Musical Arts",
      subclubs: [],
    },
    {
      name: "Photography Club",
      members: 100,
      focus: "Visual Arts",
      subclubs: [],
    },
    {
      name: "Deepro",
      members: 120,
      focus: "Campus Activities",
      subclubs: [],
    },
    {
      name: "CRC",
      members: 100,
      focus: "Career Development",
      subclubs: [],
    },
  ];

  const events = [
    {
      id: 1,
      name: "Tech Fest 2025",
      date: "2025-01-20",
      time: "10:00 AM",
      venue: "Main Auditorium",
      description:
        "Annual technology festival featuring hackathons, workshops, and tech talks.",
    },
    {
      id: 2,
      name: "Cultural Night",
      date: "2025-01-25",
      time: "6:00 PM",
      venue: "Open Air Theatre",
      description:
        "Celebration of diverse cultures with performances, food, and exhibitions.",
    },
    {
      id: 3,
      name: "Sports Meet",
      date: "2025-02-01",
      time: "8:00 AM",
      venue: "Sports Complex",
      description:
        "Inter-departmental sports competition across multiple categories.",
    },
    {
      id: 4,
      name: "Hackathon 2025",
      date: "2025-02-05",
      time: "9:00 AM",
      venue: "Computer Lab",
      description:
        "24-hour coding marathon with exciting prizes and mentorship.",
    },
  ];

  const merchandise = [
    { item: "CampusConnect T-Shirt", sizes: "S, M, L, XL", price: "₹499" },
    { item: "CampusConnect Sweatshirt", sizes: "S, M, L, XL", price: "₹999" },
    { item: "Club T-Shirts", sizes: "S, M, L, XL", price: "₹399" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-black pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Users className="text-pink-500" size={36} />
            <h1 className="text-pink-500 drop-shadow-[0_0_8px_#ff4d94] font-extrabold text-4xl">
              Clubs & Events
            </h1>
          </div>
          <p
            className={`${isDark ? "text-gray-300" : "text-gray-200"} text-lg`}
          >
            Join clubs and participate in campus events
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Clubs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2
              className={`${
                isDark ? "text-white" : "text-gray-200"
              } text-3xl font-bold mb-6`}
            >
              Campus Clubs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${
                    isDark ? "bg-gray-900" : "bg-white"
                  } rounded-xl shadow-2xl p-6 hover:scale-105 transition-transform cursor-pointer`}
                  onClick={() =>
                    setOpenClub(openClub === index ? null : index)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
                        <Users className="text-white" size={24} />
                      </div>
                      <h3
                        className={`${
                          isDark ? "text-white" : "text-gray-900"
                        } text-xl font-bold`}
                      >
                        {club.name}
                      </h3>
                    </div>
                    <span
                      className={`${
                        isDark ? "text-pink-400" : "text-pink-600"
                      } text-2xl`}
                    >
                      {openClub === index ? "-" : "+"}
                    </span>
                  </div>

                  <p
                    className={`${
                      isDark ? "text-gray-400" : "text-gray-600"
                    } text-sm mb-3`}
                  >
                    {club.focus}
                  </p>

                  <div
                    className={`${
                      isDark ? "text-pink-500" : "text-pink-600"
                    } font-semibold mb-2`}
                  >
                    {club.members} Members
                  </div>

                  {openClub === index && club.subclubs.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 pl-4 border-l-2 border-pink-500 space-y-2"
                    >
                      {club.subclubs.map((sub, i) => (
                        <p
                          key={i}
                          className={`${
                            isDark ? "text-gray-300" : "text-gray-700"
                          } text-sm`}
                        >
                          • {sub}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2
              className={`${
                isDark ? "text-white" : "text-gray-200"
              } text-3xl font-bold mb-6`}
            >
              Upcoming Events
            </h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.index}
                  initial={{ opacity: 0, x: -20 }}
                  animate
