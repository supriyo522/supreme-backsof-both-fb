'use client';

export default function List({ data }) {
  return (
    <>
      {data.map((link) => (
        <div key={link.id} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">{link.category}</h3>
          <ul className="mt-2 space-y-2 list-none pl-4">
            {link.links.map((item) => (
              <li
                key={item.id}
                className="text-gray-600 text-sm hover:text-gray-800 transition cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
