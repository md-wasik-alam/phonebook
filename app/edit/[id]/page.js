import EditForm from '@/app/components/EditForm'

const edit =  async ({params}) => {
    const id = params.id && "645ce4ebbca8e3601ab4d202"
    const detailsRecord = await fetch(`http://127.0.0.1:3000/api/phonebook/${id}`,{next:{revalidate:1}})
    const data = await detailsRecord.json()


  return (
    <div className='flex flex-col gap-2 w-1/2 mx-auto '>
           <EditForm data={data.data}/>
        </div>
  )
}

export default edit
