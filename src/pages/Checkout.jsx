import React from 'react'
import { TextInput, Label, Button } from 'flowbite-react';
import { useSelector } from 'react-redux';

const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <div className="flex">
    <div className='w-1/2 ml-10 mt-5'>
        <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="small"
              value="Small input"
            />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
          />
        </div>
        </div>
        <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="small"
              value="Name"
            />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
          />
        </div>
        </div>
        <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="small"
              value="Email"
            />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
          />
        </div>
        </div>
        <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="small"
              value="Phone Number"
            />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
          />
        </div>
        </div>
        <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="small"
              value="Street Address"
            />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
          />
        </div>
        </div>
        <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="small"
              value="City"
            />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
          />
        </div>
        </div>
        <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="small"
              value="Postal Code"
            />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="small"
              value="Country"
            />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
          />
        </div>
        </div>
      </div>
      <div className='w-80 h-60 ml-20 mt-10 bg-gray-200 item-center'>
        <h6 className='text-xl bg-blue-400'>Order Summary</h6>
        <h6>Total Quantity : {totalQty} </h6>
        <h6>Subtotal : ${totalAmount}</h6>
        <h6>Shipping : $0</h6>
        <h6>Total cost : ${totalAmount}</h6>
        <div className='my-10'>
        <Button
          outline={true}
          gradientDuoTone="greenToBlue"
        >
        Proceed to checkout
        </Button>
      </div>
      </div>
      </div>
  )
}

export default Checkout;