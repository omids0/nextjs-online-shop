import React from 'react'
import AddNewProductForm from '../../components/adminpage/AddNewProductForm'
import AppLayout from '../../components/AppLayout'

export default function newproduct() {
  return (
    <AppLayout>
    <h3 className="page-title">افزودن محصول جدید</h3>
      <AddNewProductForm />
    </AppLayout>
  )
}
