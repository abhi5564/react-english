import React from 'react'

function Card({username="predefined value", post="Default Post", image="https://images.unsplash.com/photo-1547721064-da6cfb341d50", myarr=[1,2,3]}) {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src={image} alt="Modern building architecture" />
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{username}</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{post}</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
      {/* Render myarr values */}
      <div class="mt-4">
        {myarr.length > 0 && (
          <ul class="list-disc pl-5 text-slate-700">
            {myarr.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
</div>
  )
}

export default Card