 import { useState } from "react";

const items = [
  { id: 1, title: "XYZ 1", description: "Description for item 1" },
  { id: 2, title: "XYZ 2", description: "Description for item 2" },
  { id: 3, title: "XYZ 3", description: "Description for item 3" },
];

export default function Accord() {
  const [openId, setOpenId] = useState(null);
  
  const handleToggle = (id) => {
    setOpenId(openId === id ? id : null);
  };

  return (
  <>
    <div className="max-w-xl mx-auto mt-10 space-y-4 bg-gray-100 p-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-4 bg-white shadow"
        >
          {/* Title */}
          <button
            onClick={() => handleToggle(item.id)}
            className="w-full text-left font-semibold text-lg flex justify-between"
          >
            {item.title}
            <span>{openId === item.id ? "▲" : "▼"}</span>
          </button>
          {/* Description Toggle */}
          {openId === item.id && (
            <p className="mt-2 text-gray-700">
              {item.description}       
            </p>
          )}
        </div>
      ))}
    </div>
  </>
  );
}
