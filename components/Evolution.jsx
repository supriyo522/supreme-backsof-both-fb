'use client';
import { useState, useRef, useEffect } from 'react';
import { PlayArrow, Pause } from '@mui/icons-material';

const videoSources = {
  'Passenger vehicles': {
    'Complete body': '/assets/Passenger Alpha.bc06b347f5b526ad9a60.mp4',
    Front: '/assets/Front.8f5fda304d3095ab6b02.mp4',
    Cabin: '/assets/Cabin.3260d3e4f52b3804dae5.mp4',
    Trunk: '/assets/Trunk.54bfaa734c0395172c08.mp4',
    Exterior: '/assets/Exterior.a127ebb308e655c7e32c.mp4',
  },
  'Commercial vehicles': {
    'Complete body': '/assets/Commercial Alpha.92c92d40f9116c837d1d.mp4',
    Engine: '/assets/Commercial-Engine.d8957f7c027ca396858e4.mp4',
    Cabin: '/assets/Commercial-Cabin.69adf15a8021267cbe8c.mp4',
  },
};

const vehicleCategories = [
  { name: 'Passenger vehicles', description: 'Revving up innovation from interior to exterior.' },
  { name: 'Commercial vehicles', description: 'Advancing engineering for heavy-duty vehicles.' },
];

const vehicleParts = [
  {
    name: 'Passenger vehicles',
    categories: [
      { label: 'Complete body', icon: '/assets/Cabin 1.png' },
      { label: 'Front', icon: '/assets/Cabin 1 (2).png' },
      { label: 'Cabin', icon: '/assets/Cabin 1.png' },
      { label: 'Trunk', icon: '/assets/Cabin 1 (3).png' },
      { label: 'Exterior', icon: '/assets/Cabin 1 (4).png' },
    ],
  },
  {
    name: 'Commercial vehicles',
    categories: [
      { label: 'Complete body', icon: '/assets/Cabin 1.png' },
      { label: 'Engine', icon: '/assets/Cabin 1 (2).png' },
      { label: 'Cabin', icon: '/assets/Cabin 1.png' },
    ],
  },
];

export default function Evolution() {
  const [selectedCategory, setSelectedCategory] = useState('Passenger vehicles');
  const [selectedPart, setSelectedPart] = useState('Complete body');
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const triggerHeight = containerRef.current.offsetHeight / 2;

      if (scrollY > triggerHeight) {
        if (selectedCategory !== 'Commercial vehicles') {
          setSelectedCategory('Commercial vehicles');
          setSelectedPart('Complete body');
        }
      } else {
        if (selectedCategory !== 'Passenger vehicles') {
          setSelectedCategory('Passenger vehicles');
          setSelectedPart('Complete body');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedCategory]);

  return (
    <div className="w-full bg-black text-white flex flex-col items-center py-12 px-4 md:px-8" ref={containerRef}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl">
          Evolving the drive with <span className="font-bold">360‑degree</span>
          <br /> comprehensive solutions
        </h2>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        <div className="md:w-1/3 flex flex-col space-y-4">
          {vehicleCategories.map((category) => (
            <div
              key={category.name}
              className={`cursor-pointer p-4 transition-opacity ${
                selectedCategory === category.name ? 'opacity-100 border-l-4 border-white' : 'opacity-40'
              }`}
              onClick={() => {
                setSelectedCategory(category.name);
                const partList = vehicleParts.find((p) => p.name === category.name)?.categories;
                if (partList && !partList.find((p) => p.label === selectedPart)) {
                  setSelectedPart(partList[0].label);
                }
              }}
            >
              <h3 className="text-xl">{category.name}</h3>
              <p className="text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="md:w-2/3 flex justify-center items-center">
          <video
            ref={videoRef}
            src={videoSources[selectedCategory][selectedPart]}
            className="w-full h-auto"
            autoPlay
            muted
            loop
          />
        </div>
      </div>

      <div className="w-full mt-8 flex justify-center items-center relative">
        <div className="flex space-x-8">
          {vehicleParts
            .find((p) => p.name === selectedCategory)
            ?.categories.map((item) => (
              <div
                key={item.label}
                className={`flex flex-col items-center cursor-pointer transition-opacity ${
                  selectedPart === item.label ? 'opacity-100' : 'opacity-50'
                }`}
                onClick={() => setSelectedPart(item.label)}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`w-16 h-auto transition-filter ${
                    selectedPart === item.label ? 'filter brightness-200' : 'filter brightness-70'
                  }`}
                />
                <p className="mt-2 text-sm">{item.label}</p>
              </div>
            ))}
        </div>

        <button
          className="absolute right-8 bg-transparent border-2 border-white rounded-full p-3 flex items-center justify-center"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <PlayArrow className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
