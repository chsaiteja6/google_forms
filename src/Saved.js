import React, { useEffect, useState } from 'react';
import File from './File.js';

export default function Saved() {
  const [items, setItems] = useState([]); // Correct way to use useState

  useEffect(() => {
    try {
      const savedItems = JSON.parse(localStorage.getItem('formData'));
      if (savedItems) {
        setItems(savedItems);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
        <h3 style={{textAlign:"center"}}>Saved Forms</h3>
      {items.length ? (
        items.map((item, index) => (
          <File key={index} name={item.name} email={item.email} message={item.message} cv={item.cv[0]} filename={item.filename[0]}/>
        ))
      ) : (
        <p >Oops, no saved files</p>
      )}
    </div>
  );
}
