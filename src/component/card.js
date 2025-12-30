import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function RecipeCard({key, id, name, image}) {
  return (
    <Link href={"/details/" + id} >
        <div className='bg-white border-2 flex flex-col items-center justify-center border-gray-300 h-[200px] rounded-2xl shadow-md'>
          <Image src={image} alt='head' width={500} height={500} className='w-[50%] h-[80%] object-cover rounded-[100%] ' />
          <h5 className='text-2xl'>{name}</h5>
    </div>
    </Link>
  )
}

export default RecipeCard