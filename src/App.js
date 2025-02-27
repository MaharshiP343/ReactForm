import "./App.css";

function App() {
  return (
    <div className="container">
      <h2>Form in React</h2>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="Enter First Name" />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Enter Last Name" />
        </div>

        <div className="form-group">
          <label>Enter Email</label>
          <input type="email" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Contact</label>
          <input type="text" placeholder="Enter Mobile number" />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className="form-group">
          <label>Your best Subject</label>
          <div className="checkbox-group">
            <input type="checkbox" id="english" />
            <label htmlFor="english">English</label>
            <input type="checkbox" id="maths" />
            <label htmlFor="maths">Maths</label>
            <input type="checkbox" id="physics" />
            <label htmlFor="physics">Physics</label>
          </div>
        </div>

        <div className="form-group">
          <label>Upload Resume</label>
          <input type="file" />
        </div>

        <div className="form-group">
          <label>Enter URL</label>
          <input type="text" placeholder="Enter URL" />
        </div>

        <div className="form-group">
          <label>Select your choice</label>
          <select>
            <option>Select your Ans</option>
            <option>Option 1</option>
            <option>Option 2</option>
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
