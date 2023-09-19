import CreateNewProductForm from '@components/forms/createNewProductForm'

function AdminPage() {
  return (
    <div className='w-full h-screen bg-gray-300'>
      <div className='flex'>
        <CreateNewProductForm />
      </div>
    </div>
  )
}

export default AdminPage