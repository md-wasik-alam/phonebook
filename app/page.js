"use client"
import Image from 'next/image'
import PhonebookTable from './components/PhonebookTable'
import Insert from './components/Insert'
import { useState } from 'react'

export default async function Home() {
  let phonebookData = await fetch("http://127.0.0.1:3000/api/phonebook",{next:{revalidate:4}})
  phonebookData = await phonebookData.json()

  const handleDelete = async (id) => {
      let data = await fetch(`http://127.0.0.1:3000/api/phonebook/${id}`,{
        method:"DELETE",
        headers:{
          "content-type":"application/json"
        }
      })
      data = await data.json()
      console.log(data)
  }

  // const [refresh, setRefresh] = useState(true)

  return (
    <div className="container mt-10">
      <div className="flex px-12 gap-3">
        <div className="w-2/6">
          <Insert/>
        </div>
        <div className="w-4/6 p-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                 
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>

                </tr>
              </thead>
              <tbody>
                {
                  phonebookData.data.map((value, key) => (
                    <PhonebookTable value={value} key={key} handleDelete={handleDelete} />

                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
