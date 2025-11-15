import { useState } from "react";
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Shirt } from 'lucide-react';

const ClubsEvents = () => {
  const { isDark } = useTheme();

  // STATE FOR OPEN CLUB
  const [openClub, setOpenClub] = useState<number | null>(null);

  // CLUBS WITH SUB-CLUBS
  const clubs = [
    {
      name: 'Tech Club',
      members: 150,
      focus: 'Codex, Cyber Hunter, GDG, MLSA',
      subclubs: ['Codex', 'Cyber Hunter', 'GDG', 'MLSA']
    },
    {
      name: 'Cultural Club',
      members: 200,
      focus: 'Theatre, Music, Dance, Art Society',
      subclubs: ['Theatre', 'Music Society', 'Dance Crew']
    },
    {
      name: 'Sports Club',
      members: 180,
      focus: 'Cricket, Football, Badminton, Athletics',
      subclubs: ['Cricket Team', 'Football Team', 'Badminton Team']
    },
    {
      name: 'Literary Club',
      members: 120,
      focus: 'Debate, Poetry, Writing Society',
      subclubs: ['Debate Society', 'Poetry Wing', 'Writers Club']
    },
    {
      name: 'Social Club',
      members: 140,
      focus: 'Pahal, Anti-Ragging Cell, NSS',
      subclubs: ['Pahal', 'NSS']
    },
    {
      name: 'Music & Dance Club',
      members: 160,
      focus: 'Music Crew, Dance Crew, Band',
      subclubs: ['Music Crew', 'Dance Crew', 'Band']
    },
  ];

  const events = [
    {
      id: 1,
      name: 'Tech Fest 2025',
      date: '2025-01-20',
      time: '10:00 AM',
      venue: 'Main Auditorium',
      description: 'Annual technology festival featuring hackathons, workshops, and tech talks.',
    },
    {
      id: 2,
      name: 'Cultural Night',
      date: '2025-01-25',
      time: '6:00 PM',
      venue: 'Open Air Theatre',
      description: 'Celebration of diverse cultures with performances, food, and exhibitions.',
    },
    {
      id: 3,
      name: 'Sports Meet',
      date: '2025-02-01',
      time: '8:00 AM',
      venue: 'Sports Complex',
      description: 'Inter-departmental sports competition across multiple categories.',
    },
    {
      id: 4,
      name: 'Hackathon 2025',
      date: '2025-02-05',
      time: '9:00 AM',
      venue: 'Computer Lab',
      description: '24-hour coding marathon with exciting prizes and mentorship.',
    },
  ];

  const merchandise = [
    { item: 'CampusConnect T-Shirt', sizes: 'S, M, L, XL', price: '₹499' },
    { item: 'CampusConnect Sweatshirt', sizes: 'S, M, L, XL', price: '₹999' },
    { item: 'Club T-Shirts', sizes: 'S, M, L, XL', price: '₹399' },
  ];

  const toggleClub = (index: number) => {
    setOpenClub(openClub === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-black pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
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
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-200'} text-lg`}>
            Join clubs and participate in campus events
          </p>
        </motion.div>

        {/* CLUBS WITH SUBCLUBS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className={`${isDark ? 'text-white' : 'text-gray-200'} text-3xl font-bold mb-6`}>
            Campus Clubs
          </h2>

          <div className="space-y-4">
            {clubs.map((club, index) => (
              <div
                key={index}
                className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-xl p-6`}
              >
                {/* Club Header */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleClub(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-xl font-bold`}>
                        {club.name}
                      </h3>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        {club.focus}
                      </p>
                    </div>
                  </div>

                  <span className="text-pink-500 font-bold">{club.members} Members</span>
                </div>

                {/* Subclubs Expandable */}
                {openClub === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 ml-4 space-y-2"
                  >
                    {club.subclubs.map((sub, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg ${
                          isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {sub}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* EVENTS (unchanged) */}
        {/* MERCH (unchanged) */}

      </div>
    </div>
  );
};

export default ClubsEvents;
import { useState } from "react";
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Shirt } from 'lucide-react';

const ClubsEvents = () => {
  const { isDark } = useTheme();

  // STATE FOR OPEN CLUB
  const [openClub, setOpenClub] = useState<number | null>(null);

  // CLUBS WITH SUB-CLUBS
  const clubs = [
    {
      name: 'Tech Club',
      members: 150,
      focus: 'Codex, Cyber Hunter, GDG, MLSA',
      subclubs: ['Codex', 'Cyber Hunter', 'GDG', 'MLSA']
    },
    {
      name: 'Cultural Club',
      members: 200,
      focus: 'Theatre, Music, Dance, Art Society',
      subclubs: ['Theatre', 'Music Society', 'Dance Crew']
    },
    {
      name: 'Sports Club',
      members: 180,
      focus: 'Cricket, Football, Badminton, Athletics',
      subclubs: ['Cricket Team', 'Football Team', 'Badminton Team']
    },
    {
      name: 'Literary Club',
      members: 120,
      focus: 'Debate, Poetry, Writing Society',
      subclubs: ['Debate Society', 'Poetry Wing', 'Writers Club']
    },
    {
      name: 'Social Club',
      members: 140,
      focus: 'Pahal, Anti-Ragging Cell, NSS',
      subclubs: ['Pahal', 'NSS']
    },
    {
      name: 'Music & Dance Club',
      members: 160,
      focus: 'Music Crew, Dance Crew, Band',
      subclubs: ['Music Crew', 'Dance Crew', 'Band']
    },
  ];

  const events = [
    {
      id: 1,
      name: 'Tech Fest 2025',
      date: '2025-01-20',
      time: '10:00 AM',
      venue: 'Main Auditorium',
      description: 'Annual technology festival featuring hackathons, workshops, and tech talks.',
    },
    {
      id: 2,
      name: 'Cultural Night',
      date: '2025-01-25',
      time: '6:00 PM',
      venue: 'Open Air Theatre',
      description: 'Celebration of diverse cultures with performances, food, and exhibitions.',
    },
    {
      id: 3,
      name: 'Sports Meet',
      date: '2025-02-01',
      time: '8:00 AM',
      venue: 'Sports Complex',
      description: 'Inter-departmental sports competition across multiple categories.',
    },
    {
      id: 4,
      name: 'Hackathon 2025',
      date: '2025-02-05',
      time: '9:00 AM',
      venue: 'Computer Lab',
      description: '24-hour coding marathon with exciting prizes and mentorship.',
    },
  ];

  const merchandise = [
    { item: 'CampusConnect T-Shirt', sizes: 'S, M, L, XL', price: '₹499' },
    { item: 'CampusConnect Sweatshirt', sizes: 'S, M, L, XL', price: '₹999' },
    { item: 'Club T-Shirts', sizes: 'S, M, L, XL', price: '₹399' },
  ];

  const toggleClub = (index: number) => {
    setOpenClub(openClub === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-black pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
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
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-200'} text-lg`}>
            Join clubs and participate in campus events
          </p>
        </motion.div>

        {/* CLUBS WITH SUBCLUBS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className={`${isDark ? 'text-white' : 'text-gray-200'} text-3xl font-bold mb-6`}>
            Campus Clubs
          </h2>

          <div className="space-y-4">
            {clubs.map((club, index) => (
              <div
                key={index}
                className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-xl p-6`}
              >
                {/* Club Header */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleClub(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-xl font-bold`}>
                        {club.name}
                      </h3>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        {club.focus}
                      </p>
                    </div>
                  </div>

                  <span className="text-pink-500 font-bold">{club.members} Members</span>
                </div>

                {/* Subclubs Expandable */}
                {openClub === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 ml-4 space-y-2"
                  >
                    {club.subclubs.map((sub, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg ${
                          isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {sub}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* EVENTS (unchanged) */}
        {/* MERCH (unchanged) */}

      </div>
    </div>
  );
};

export default ClubsEvents;
