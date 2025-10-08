'use client';
import List from './List';
import Constants from '../constants';

export default function Footer() {
  return (
    <footer className="bg-white-to-blue-gradient text-gray-700 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between">
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
              alt="logo"
              width="144"
              height="44"
            />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <List data={Constants} />
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-600">
        <p>©2024. All Rights Reserved.</p>
        <p className="hidden md:block">
          Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
        </p>
      </div>
    </footer>
  );
}
