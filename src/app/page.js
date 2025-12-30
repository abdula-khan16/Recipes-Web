import RecipeCard from '@/component/card'
import React from 'react'


async function Home() {
  let response= await fetch("https://dummyjson.com/recipes");
  let data = await response.json();
  return (
    <div className='bg-white p-[10px] min-h-screen '>
      <div className='text-black flex gap-[10px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {data.recipes.map((r)=>{
          return(
            <RecipeCard  
            key={r.id}
            id={r.id}
            name={r.name}
            image={r.image}
            />
          );
        })

        }
        </div>
    </div>
  )
}

export default Home