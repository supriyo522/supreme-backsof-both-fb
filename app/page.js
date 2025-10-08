/*page.js*/
'use client';

import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const MainContainer = dynamic(() => import('../components/MainContainer'), { ssr: false });
const Evolution = dynamic(() => import('../components/Evolution'), { ssr: false });
const GetInTouch = dynamic(() => import('../components/GetInTouch'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export default function HomePage() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Navbar />
      <MainContainer />
      <Evolution />
      <GetInTouch />
      <Footer />
      <ToastContainer position="bottom-center" />
    </div>
  );
}
