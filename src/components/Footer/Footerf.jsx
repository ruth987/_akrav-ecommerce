import React from 'react'
import { Footer } from 'flowbite-react'
import logo from '../../assets/images/logo.jpg'
const Footerf = () => {
  return (
    <div className='my-20'>
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src={logo}
            alt="AK-ecommerce Logo"
            name="akrav-ecommerce"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Licensing
            </Footer.Link>
            <Footer.Link href="#">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="akrav-ecommerce™"
          year={2023}
        />
      </div>
  </Footer>
    </div>
  )
}

export default Footerf
