import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FbPost from './components/FbPost'

import FbImageLibrary from 'react-fb-image-grid'


const App = () => {
  let endpoints = [

  ];
  for (let index = 0; index < 31; index++) {
    endpoints.push(`https://dummyjson.com/products/${index}`)
    
  }
  console.log(endpoints)
  const [postsbucket, setpostsbucket] = useState([])
  const getfbposts=async()=>{
  // ( axios.all(endpoints.map(async(endpoint) =>await axios.get(endpoint))));

    const response = await (await ( axios.get('https://dummyjson.com/products'))).data
 setpostsbucket(response.products)
 console.log("object")
 console.log(postsbucket)


  }
  useEffect(() => {
    getfbposts()
  
    
  }, [])
  if (!postsbucket.length) {
    return <div> LOADING </div>
  }
  console.log(postsbucket[0].title)
  return (
    <div>
<div className='parentdiv overflow-scroll absolute rounded-xl left-2/4 top-2/4 p-7 translate-x-[-50%] translate-y-[-50%] w-[40rem] h-[60rem] border-black border-2 border-solid  '>

{postsbucket.map((elem)=>{
 return  <FbPost heading={elem.title} subheading={elem.category} thumbnail={elem.thumbnail} desc={elem.description} price={elem.price} rating={elem.rating} discount={elem.discountPercentage} images={elem.images} />

})}
</div>

 {/* <FbPost heading={elem.title} subheading={postsbucket[0].category} thumbnail={postsbucket[0].thumbnail} desc={postsbucket[0].description} price={postsbucket[0].price} rating={postsbucket[0].rating} discount={postsbucket[0].discountPercentage} images={postsbucket[0].images} /> */}

    </div>
  )
}

export default App