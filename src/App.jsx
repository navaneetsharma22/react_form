import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [forData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    comment: "false",
    candidates: "false",
    offers: "fasle",
    pushNotificatio:"",
    emailRadio:"",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("finaly printing the value of form Data:");
    console.log(FormData)

    



  }

  return (
    <>
      <div className="flex flex-col mt-2 items-center">
        <form onSubmit={submitHandler}>
          <label>First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter Your First_Name"
            value={forData.firstName}
            onChange={changeHandler}
            className="outline"
          />

          <br />

          <label>Last Name</label>
          <br />

          <input
            type="text"
            name="lastName"
            id="lastname"
            placeholder="Enter Your Last_Name"
            value={forData.lastName}
            onChange={changeHandler}
            className="outline"
          />
          <br />
          <label htmlFor="email">Email address</label>
          <br />

          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={forData.email}
            onChange={changeHandler}
            className="outline"
          />

          <br />
          <label>Country</label>
          <br />
          <select
            id="country"
            name="country"
            value={forData.country}
            onChange={changeHandler}
            className="outline"
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>

          <br />
          <label>Street Addres</label>
          <br />

          <input
            type="text"
            name="street"
            id="street"
            placeholder="Enter Your Addrees"
            value={forData.street}
            onChange={changeHandler}
            className="outline"
          />

          <br />
          <lable>City</lable>
          <br />
          <input
            type="text"
            name="city"
            id="city"
            value={forData.city}
            placeholder="Enter Your City_Name"
            onChange={changeHandler}
            className="outline"
          />

          <br />
          <lable>State/Province</lable>
          <br />
          <input
            type="text"
            name="state"
            id="state"
            value={forData.state}
            placeholder="Enter Your State/Province"
            onChange={changeHandler}
            className="outline"
          />

          <br />
          <lable>ZIP/Postal Code</lable>
          <br />
          <input
            type="text"
            name="PinCode"
            id="pinCode"
            value={forData.pinCode}
            placeholder="Enter Your ZIP/Postel_Code"
            onChange={changeHandler}
            className="outline"
          />

          <br />
          <fieldset>
            <legend>By Email</legend>
            <div className="flex ">
              <input
                name="comments"
                id="comments"
                type="checkbox"
                checked={forData.comment}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="comments">Comments</label>

                <br />
                <p>Fet notified when someones posts a comment on a posting</p>
              </div>
            </div>

            <div className="flex">
              <br />

              <input
                name="candidates"
                id="candidates"
                type="checkbox"
                checked={forData.comment}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="comments">Candidates</label>

                <br />
                <p>Fet notified when someones posts a comment on a posting</p>
              </div>
            </div>

            <div className="flex">
              <br />

              <input
                name="offers"
                id="offers"
                type="checkbox"
                checked={FormData.comment}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="comments">Offers</label>

                <br />
                <p>Fet notified when someones posts a comment on a posting</p>
              </div>
            </div>
          </fieldset>

          <br/>
          {/* //<br/> */}

          <fieldset>
            <legend>Push Notifications</legend>
            <p>These are delivered via SMS to your mobile phone.</p>
            <input
            type="radio"
            id="pushhEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}

            />
            <label htmlFor="pushEverything">Everything</label>
            <br/>

              <input
            type="radio"
            id="emailRadio"
            name="pushNotification"
            value="Same as email"
            onChange={changeHandler}

            />
            <label htmlFor="pushEverything">Same as email </label>

            <br/>
             <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No Push Notification"
            onChange={changeHandler}

            />
            <label htmlFor="pushEverything">No Push Notification </label>
          </fieldset>

           <button className="bg-blue-500 w-25 text-white font-bold rounded py-2 hover:outline cursor-pointer">Save</button>
        </form>
      </div>

      <br />
    </>
  );
}

export default App;
