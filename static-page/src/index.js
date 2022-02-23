import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
- The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
- You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

const page = (
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

ReactDOM.render(page, document.querySelector("#root"));

