import React, { useState } from 'react';

const SizeDropdown = ({ selectedSize, handleSizeChange, sizes }) => {
  return (
    <div className="flex my-4 items-center space-x-4">
      <label htmlFor="size" className="text-sm font-medium text-gray-600">
        Size:
      </label>
      <select
        id="size"
        name="size"
        value={selectedSize}
        onChange={handleSizeChange}
        className="px-3 py-2 border rounded-md outline-none cursor-pointer focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="" disabled className='text-sm'>
          Select Size
        </option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeDropdown;
