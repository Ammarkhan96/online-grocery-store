import Image from 'next/image';
import React from 'react';

function CategoryList({ categoryList }) {
  return (
    <div className='mt-5'>
      
      <div className="grid grid-cols-2 gap-4">
        {categoryList
          .filter((category) => category?.attributes?.icon?.data?.attributes?.url) 
          .map((category, index) => {
            const iconUrl = category.attributes.icon.data.attributes.url;

            return (
              <div key={index} className="flex items-center space-x-4">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${iconUrl}`}
                  width={50}
                  height={50}
                  alt={category.attributes.name} 
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CategoryList;
