import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [forData ,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    street:"",
    city:"",
    state:"",
    pinCode:"",
    comment:""



  })

  function changeHandler(event) {
    const {name,value,checked,type} = event.target;
    setFormData((prev) => ({...prev, [name]: type === "checkbox" ? checked:value} ) );

  }


  return (
    <>

        <div className='flex flex-col mt-2 items-center'>
        <form>

        <label>First Name</label>
        <br/>
        <input 
          type="text"
          name="firstName"
          id="firstName"
          placeholder='Enter Your First_Name'
          value={FormData.firstName}
          onChange={changeHandler}
          className='outline'
        />

        <br/>

        <label>Last Name</label>
        <br/>
        
        <input 
          type="text"
          name='lastName'
          id='lastname'
          placeholder='Enter Your Last_Name'
          value={FormData.lastName}
          onChange={changeHandler}
          className='outline'

        />
        <br/>
          <label htmlFor='email'>Email address</label>
        <br/>
        
        <input 
          type="text"
          name='email'
          id='email'
          placeholder='Enter Your Email'
          value={FormData.email}
          onChange={changeHandler}
          className='outline'

        />

        <br/>
        <label>Country</label>
        <br/>
        <select
        id='country'
          name='country'
          value={forData.country}
          onChange={changeHandler}
          className='outline'
          >

          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>

        </select>

        <br/>
        <label>Street Addres</label>
        <br/>

         <input 
          type="text"
          name='street'
          id='street'
          placeholder='Enter Your Addrees'
          value={FormData.street}
          onChange={changeHandler}
          className='outline'

        />

        <br/>
        <lable>City</lable>
        <br/>
        <input
          type="text"
          name='city'
          id='city'
          value={FormData.city}
          placeholder='Enter Your City_Name'
          onChange={changeHandler}
          className='outline'
        />

        <br/>
        <lable>State/Province</lable>
        <br/>
         <input
          type="text"
          name='state'
          id='state'
          value={FormData.state}
          placeholder='Enter Your State/Province'
          onChange={changeHandler}
          className='outline'
        />

        
        <br/>
        <lable>ZIP/Postal Code</lable>
        <br/>
         <input
          type="text"
          name='PinCode'
          id='pinCode'
          value={FormData.pinCode}
          placeholder='Enter Your ZIP/Postel_Code'
          onChange={changeHandler}
          className='outline'
        />

        <br/>
        <fieldset>
        <legend>By Email</legend>
        <div className='flex '>
        <input
          name='comments'
          id='comments'
          type='checkbox'
          checked={FormData.comment}
          onChange={changeHandler}

        />
        <div>
           <label htmlFor='comments'>Comments</label>
         
      
        <br/>
         <p>Fet notified when someones posts a comment on a posting</p>
        </div>
      
      
      </div>

      <div className='flex'>

         <br/>

        <input
          name='candidates'
          id='candidates'
          type='checkbox'
          checked={FormData.comment}
          onChange={changeHandler}

        />
        <div>
           <label htmlFor='comments'>Comments</label>
         
      
        <br/>
         <p>Fet notified when someones posts a comment on a posting</p>
        </div>

      </div>


        </fieldset>


     





        </form>
        </div>
      





      

    </>
  )
}

export default App
