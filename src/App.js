import { useState } from "react";
import "./App.css";

function App() {
  // const[var name, set var name using] = react hook ["initial value"]
  // obj
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    sub: [],
    url: "",
    choice: "",
  });

  const handleChange = (e) => {
    console.log(e.target.checked);
    console.log(e.target.value);

    if (e.target.checked) {
      setFormData((curr) => {
        return {
          ...curr,
          //sub( e.target.value),

          sub: [...curr.sub, e.target.value],
        };
      });
    } else {
      setFormData((curr) => {
        return {
          ...curr,
          sub: curr.sub.filter((item) => item !== e.target.value),
        };
      });
    }
  };
  // useState is a function which returns ...
  console.log("FormData:", formData);

  return (
    <div className="container">
      <h2>Form in React</h2>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={(e) => {
              console.log("event:", e.target.value);
              setFormData((curr) => {
                return {
                  ...curr,
                  firstName: e.target.value,
                };
              }); //set obj value for fname
            }}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={(e) => {
              console.log("event:", e.target.value);
              setFormData((curr) => {
                return {
                  ...curr,
                  lastName: e.target.value,
                };
              }); //set obj value for fname
            }}
            // onChange={(e) => {
            //   // console.log("event:", e.target.value);
            //   setLname(e.target.value); //set value for fname
            // }}
          />
        </div>

        <div className="form-group">
          <label>Enter Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => {
              console.log("event:", e.target.value);
              setFormData((curr) => {
                return {
                  ...curr,
                  email: e.target.value,
                };
              }); //set obj value for fname
            }}
          />
        </div>

        <div className="form-group">
          <label>Contact</label>
          <input
            type="text"
            placeholder="Enter Mobile number"
            value={formData.contact}
            onChange={(e) => {
              console.log("event:", e.target.value);
              setFormData((curr) => {
                return {
                  ...curr,
                  contact: e.target.value,
                };
              }); //set obj value for fname
            }}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              // value={formData.gender}
              onChange={(e) => {
                console.log("event:", e.target.value);
                setFormData((curr) => {
                  return {
                    ...curr,
                    gender: e.target.value,
                  };
                }); //set obj value for fname
              }}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              //  value={formData.gender}
              value="female"
              onChange={(e) => {
                console.log("event:", e.target.value);
                setFormData((curr) => {
                  return {
                    ...curr,
                    gender: e.target.value,
                  };
                }); //set obj value for fname
              }}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              // value={formData.gender}
              value="others"
              onChange={(e) => {
                console.log("event:", e.target.value);
                setFormData((curr) => {
                  return {
                    ...curr,
                    gender: e.target.value,
                  };
                }); //set obj value for fname
              }}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className="form-group">
          <label>Your best Subject</label>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="english"
              value="English"
              onChange={handleChange}
            />
            <label htmlFor="english">English</label>
            <input
              type="checkbox"
              id="maths"
              value="Maths"
              onChange={handleChange}
            />
            <label htmlFor="maths">Maths</label>
            <input
              type="checkbox"
              id="physics"
              value="Physics"
              onChange={handleChange}
            />
            <label htmlFor="physics">Physics</label>
          </div>
        </div>

        <div className="form-group">
          <label>Upload Resume</label>
          <input type="file" />
        </div>

        <div className="form-group">
          <label>Enter URL</label>
          <input
            type="text"
            placeholder="Enter URL"
            value={formData.url}
            onChange={(e) => {
              console.log("event:", e.target.value);
              setFormData((curr) => {
                return {
                  ...curr,
                  url: e.target.value,
                };
              }); //set obj value for url
            }}
          />
        </div>

        <div className="form-group">
          <label>Select your choice</label>
          <select
            value={formData.choice}
            onChange={(e) => {
              console.log("event:", e.target.value);
              setFormData((curr) => {
                return {
                  ...curr,
                  choice: e.target.value,
                };
              }); //set obj value for fname
            }}
          >
            <option value="Option 0 ">Select your Ans</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
          </select>
        </div>

        <div className="form-group">
          <label>About</label>
          <textarea placeholder="About yourself"></textarea>
        </div>

        <div className="button-group">
          <button type="reset" className="reset-btn">
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
