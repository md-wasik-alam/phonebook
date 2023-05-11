"use client"
import React, { useState } from 'react'
import { redirect } from 'next/navigation';
import {  useRouter } from 'next/router';

const EditForm = ({data}) => {
    const init={
        name:data.name,
        contact:data.contact
    }
    const [phonebook,setPhonebook]=useState(init);

    const handleOnChange=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setPhonebook((p)=>({...p,[name]:value}))
          
    }

    const handleSubmit= async(e)=>{
        
        e.preventDefault();
        let Updatedata =await fetch(`http://127.0.0.1:3000/api/phonebook/${data._id}`,{
           method:"PUT",
           headers:{
            "content-type":"application/json"
           },
           body:JSON.stringify(phonebook)
        })
        Updatedata= await Updatedata.json()
    }

  return (
    <form method="post" onSubmit={handleSubmit}  className='flex flex-col gap-2 text-black'>
    <label htmlFor="">Name</label>
    <input type="text" name='name' onChange={handleOnChange} value={phonebook.name} className='border border-black py-2 px-3 rounded-lg' />
    <label htmlFor="">Contact</label>
    <input type="text" name='contact' onChange={handleOnChange} value={phonebook.contact} className='border border-black py-2 px-3 rounded-lg' />
   

    <input type="submit" value="Add News" className='bg-blue-500 hover:bg-blue-800 text-white rounded px-3 py-2' />
</form>
  )
}

export default EditForm
