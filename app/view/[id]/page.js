"use client"
import Link from 'next/link'
import React from 'react'





const view =  async ({params}) => {
 const id = params.id
 const detailsRecord = await fetch(`http://127.0.0.1:3000/api/phonebook/${id}`)
 const data = await detailsRecord.json()

  return (
    <div className='flex justify-center'>
        <div className='w-1/2'>
                <div className='bg-slate-300 border rounded shadow-lg p-5'>
                    <h1 className='text-lg font-semibold'>
                        {data.data.name}
                    </h1>
                    <p>Phone no: {data.data.contact}</p>

                <div className='flex gap-5 mt-5'>
                    <button className='bg-blue-500 text-white px-4 py-3 rounded'>Edit</button>
                    <Link href="../" className='bg-green-500 text-white px-4 py-3 rounded'>Go Back</Link>
                </div>
                </div>
        </div>
    </div>
  )
}

export default view
