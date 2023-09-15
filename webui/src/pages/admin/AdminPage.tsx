import React from 'react'
import Navbar from '../../components/navbar'
import CreateNewProductForm from '../../components/forms/createNewProductForm'

function AdminPage() {
  return (
    <div className='w-full h-screen bg-gray-300'>
      <Navbar />
      <div className='flex'>
        <CreateNewProductForm />
      </div>
    </div>
  )
}

export default AdminPage