
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Home from '@/app/page';

async function Details({params}) {
  params = await params;
  let response= await fetch("https://dummyjson.com/recipes/" + params.id);
  let recipe =await response.json();
  return (
    <div className='bg-white min-h-screen text-black px-[20px] py-1'>
        <div className='bg-white w-full'>
          <Image src={recipe.image} alt='Food Image' width={500} height={100} className='w-[100%] h-[350px]'/>
          <div className='flex justify-between py-5'>
            <h3 className='text-3xl mt-2.5'>{recipe.name}</h3>
            <Link href='/'   className='bg-green-600 text-white px-[20px] py-[5px] rounded-4xl text-2xl hover:bg-green-900'>Back</Link>
          </div>
          <h5 className='text-2xl text-gray-700 mt-3'>Ingredient:</h5>
          <ul className='pt-5 pl-15 list-disc'>
            {recipe.ingredients?.map((item,index) => (
              <li key={index}>{item}</li>
            ) )}
          </ul>
          <h5 className='text-2xl text-gray-700 mt-3'>Ingredient:</h5>
          <ul className='pl-15 pt-5 list-disc'>
            {recipe.ingredients?.map((step,index) => (
              <li key={index}>{step}</li>
            ) )}
          </ul>
        </div>
    </div>
  )
}

export default Details