'use client';

const Button = ({ text, className = '', onClick }) => {
  return (
    <div
      className={`inline-block px-6 py-2 rounded-full border border-transparent transition transform hover:scale-105 hover:bg-gray-100 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span className="text-base font-medium">{text}</span>
    </div>
  );
};

export default Button;
