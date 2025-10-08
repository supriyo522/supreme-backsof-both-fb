/*evolution.jsx*/
'use client';
import { useState, useRef, useEffect } from 'react';
import { PlayArrow, Pause } from '@mui/icons-material';
import styles from '../styles/Evolution.module.css';

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
    <div className={styles['evolution-container']} ref={containerRef}>
      <div className={styles['evolution-header']}>
        <h2>
          Evolving the drive with <span className={styles.highlight}>360‑degree</span>
          <br /> comprehensive solutions
        </h2>
      </div>

      <div className={styles['evolution-main']}>
        <div className={styles['evolution-categories']}>
          {vehicleCategories.map((category) => (
            <div
              key={category.name}
              className={`${styles['category-item']} ${
                selectedCategory === category.name ? styles.selected : ''
              }`}
              onClick={() => {
                setSelectedCategory(category.name);
                const partList = vehicleParts.find((p) => p.name === category.name)?.categories;
                if (partList && !partList.find((p) => p.label === selectedPart)) {
                  setSelectedPart(partList[0].label);
                }
              }}
            >
              <h3>{category.name}</h3>
              <p className={styles['category-description']}>{category.description}</p>
            </div>
          ))}
        </div>

        <div className={styles['evolution-video']}>
          <video
            ref={videoRef}
            src={videoSources[selectedCategory][selectedPart]}
            className={styles['video-player']}
            autoPlay
            muted
            loop
          />
        </div>
      </div>

      <div className={styles['evolution-parts']}>
        <div className={styles['parts-selection']}>
          {vehicleParts
            .find((p) => p.name === selectedCategory)
            ?.categories.map((item) => (
              <div
                key={item.label}
                className={`${styles['part-icon']} ${
                  selectedPart === item.label ? styles.selected : ''
                }`}
                onClick={() => setSelectedPart(item.label)}
              >
                <img src={item.icon} alt={item.label} className={styles['part-image']} />
                <p>{item.label}</p>
              </div>
            ))}
        </div>

        <button className={styles['play-pause-btn']} onClick={togglePlayPause}>
          {isPlaying ? <Pause sx={{ width: 24, height: 24 }} /> : <PlayArrow sx={{ width: 24, height: 24 }} />}
        </button>
      </div>
    </div>
  );
}
