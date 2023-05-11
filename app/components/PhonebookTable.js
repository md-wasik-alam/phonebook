"use client"
import Link from 'next/link'
import React from 'react'

const PhonebookTable = ({value,key, handleDelete}) => {
    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
           
            <td className="px-6 py-4">
                {value.name}
            </td>
            <td className="px-6 py-4">
                {value.contact}
            </td>
            <td className="px-6 py-4 space-x-3">
                <button className='bg-yellow-400 hover:bg-yellow-600 px-2 py-1 text-white rounded-md' >Edit</button>
                <Link href={`/view/${value._id}`} className='bg-green-400 hover:bg-yellow-600 px-2 py-1 text-white rounded-md' >View Record</Link>
                <button onClick={() => handleDelete(value._id)} className='bg-red-600 hover:bg-red-700 px-2 py-1 text-white rounded-md' >Del</button>
            </td>
          
        </tr>

    )
}

export default PhonebookTable
