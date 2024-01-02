import React, { useState } from 'react'
import { AiOutlineLike,AiFillLike  } from "react-icons/ai";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { BiSolidShocked } from "react-icons/bi";
import { FaBacon, FaCommentAlt, FaShare} from "react-icons/fa";
import { FaRegLaughSquint,FaHeart  } from "react-icons/fa";
import { TbMoodSuprised } from "react-icons/tb";
import FbImageLibrary from 'react-fb-image-grid'
import { IconContext } from 'react-icons';

{/* <FbImageLibrary images={[]}/> */}
const FbPost = (props) => {
    const [color, setcolor] = useState("")
    const [display, setdisplay] = useState("invisible")
    const [isactive, setisactive] = useState(false)
    const [emoji, setemoji] = useState("like")
    return (
        <>
        <div className='flex gap-5 flex-col'>
            <div className='flex  items-center gap-3'>

                <div>

                <img src={props.thumbnail}  alt="" className={`bg-cover w-12 rounded-[50%] h-12 bg-[url('${props.thumbnail}')] bg-center`} />
                </div>
                <div className='flex flex-col '>

                    <h1 className='mb-1 capitalize text-xl font-semibold text-[#144283]'>{props.heading}</h1>
                    <h2 className=' text-sm text-[#C2C5C8] capitalize'>{props.subheading}</h2>
                </div>
                

            </div>
            <div className='inline-block'> 
                <p>{props.desc}</p>
                <p>price before discount : ${props.price}</p>
                <p>price after discount:${Math.floor(props.price-(props.price*(props.discount/100)))}</p>
                <p>rating:{props.rating}/5</p>

            </div>
      <FbImageLibrary images={props.images} countFrom={3} overlayBackgroundColor='black'  />
                <div className={`${display} flex gap-7 border-2 border-solid border-black w-[150px] p-5  rounded-lg`} onMouseOver={()=>{ setdisplay('visible')}} onMouseOut={()=>{ setdisplay('invisible')}} >
                    <BsEmojiLaughingFill  size="20px" color='#FFDA76' onClick={()=>setemoji("laugh")} />
                    <FaHeart size="20px"  color='red' onClick={()=>setemoji("heart")} />
                    <BiSolidShocked size="20px" color='#FFDA76' onClick={()=>setemoji("shock")} />
                    <AiOutlineLike size="20px" color='blue' onClick={()=>setemoji("like")} />
                </div>
               
                <hr /> 
            <div className=' flex justify-between mb-10 mt-5'>
            <IconContext.Provider value={{ color: "blue"}}>

                <button  
                className='flex items-center gap-5'> 
               Like {emoji==="like" && <AiOutlineLike size="20px"  onClick={()=>{setisactive(true)}} onMouseOver={()=>{ setdisplay('visible') }}/>}
                {emoji==="laugh" && <BsEmojiLaughingFill size="20px" color='#FFDA76' onMouseOver={()=>{ setdisplay('visible') }}/>}
                {emoji==="heart" && <FaHeart color='red' size="20px" onMouseOver={()=>{ setdisplay('visible') }}/>}
                {emoji==="shock" && <BiSolidShocked size="20px" color='#FFDA76' onMouseOver={()=>{ setdisplay('visible') }}/>}
                {/* Like {!isactive?<AiOutlineLike size="20px"  onClick={()=>{setisactive(true)} } onMouseOver={()=>{ setdisplay('visible') }} /> :<AiFillLike size="20px"  onClick={()=>{setisactive(false)}}/>} */}
                </button>
            </IconContext.Provider>
                <button className='flex items-center gap-5'>Comment <FaCommentAlt size="20px" /></button>
                <button className='flex items-center gap-5'>Share <FaShare size="20px" /></button>
            </div>
           

        </div> 
        
    </>
    )
   
}

export default FbPost