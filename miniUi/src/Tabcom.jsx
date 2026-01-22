 import React from 'react'
 import { useState,useEffect,useMemo } from 'react';

 //step 1= fetch data from api
 //step 2 =display data in tab format

 const apiData= "https://api.restful-api.dev/objects";

export default function Tabcom() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterColor, setFilterColor] = useState('');
  const [filterCapacity, setFilterCapacity] = useState('');

  const dataApi= async() =>{
    const response = await fetch(apiData);
    const jsonData = await response.json();
    console.log("",jsonData);
    setData(jsonData);
  }
  console.log("apiData", data);
  console.log("apiData length", data.length);

  useEffect(() => {
    dataApi();
    console.log("inside useEffect", data);
  }, []);

  const filterProcessedData = useMemo(()=> {
    return data.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterColor ? item.color?.name === filterColor : true) &&
        (filterCapacity ? item.capacity === filterCapacity : true)
      );
    });
  }, [data, searchTerm, filterColor, filterCapacity]);

  const colors = [...new Set(data.map(item => item.color))];
  const capacities = [...new Set(data.map(item => item.capacity))];
 
 
  return (
     <>
     <div>
      <input type="text" placeholder='Search by name' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='border p-2 rounded'/>
      <select className='border p-2 rounded ml-4' value={filterColor} onChange={(e) => setFilterColor(e.target.value)}>
        <option value="">Filter by color</option>
        {colors.map((c) => (<option key={c} value={c}>{c}</option>
        ))}
      </select>

       <select className='border p-2 rounded ml-4' value={filterCapacity} onChange={(e) => setFilterCapacity(e.target.value)}>
        <option value="">Filter by capacity</option>
        {capacities.map((cap) => (<option key={cap} value={cap}>{cap}</option>
        ))}
      </select>
      <button className='bg-blue-500 text-white p-2 rounded ml-4'>
        Download
      </button>
      
     </div>

     <div>
        <table className='min-w-full text--sm'>
          <thead className='bg-gray-100' >
            <tr>
              <th className='p-3 text-left'>ID</th>
              <th  className='p-3 text-left'>Name</th>
              <th  className='p-3 text-left'>Color</th>
              <th  className='p-3 text-left'>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {filterProcessedData.length === 0 &&  (
              <tr> No data found</tr>
            )}
            {filterProcessedData.map((item) => (
              <tr key={item.id} className='border-t'>
                <td className='p-3'>{item.id}</td>
                <td className='p-3'>{item.name}</td>
                <td className='p-3'>{item.data?.color}</td>
                <td>{item.capacity}</td>
              </tr>
            ))}
          </tbody>
           
        </table>

     </div>
     </>
  );
}