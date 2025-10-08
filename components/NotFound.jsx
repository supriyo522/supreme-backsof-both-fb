'use client';
import Button from './Button';

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="flex flex-col items-center text-center space-y-6">
        <h2 className="text-9xl text-red-500 m-0">404</h2>
        <p className="text-lg text-gray-700">The page you have requested doesn’t exist.</p>
        <Button
          text="Go to Homepage"
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => {
            window.location.href = '/';
          }}
        />
      </div>
    </div>
  );
}
