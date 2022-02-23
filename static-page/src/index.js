import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/

function Page() {
  return (
    <div className='flex flex-col gap-4 m-10'>
      <img src='./logo192.png' alt='react-logo' className='w-20' />
      <h1 className='font-bold text-4xl'>Fun Facts about React</h1>
        <ul className='flex flex-col gap-4 list-disc list-inside'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));