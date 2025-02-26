import "./App.css";

function App() {
  return (
    <div className="ParentFormContainer">
      <form>
        <label>First name:</label>
        <input type="text" />

        <label>Last name:</label>
        <input type="text" />

        <label>Contact Number</label>
        <input type="text" />

        <label>Email Address</label>
        <input type="text" />

        <label>Gender</label>
        <input type="radio" />
        <input type="radio" />

        <label>Your Best Subjects</label>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />

        <label>Upload Resume</label>
        <input type="file" />

        <label>Enter URL</label>
        <input type="text" />

        <label>Select Your Choice</label>
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>

        <label>About</label>
        <input type="textarea" />
        <input type="Submit" />
        <input type="Reset" />
      </form>
    </div>
  );
}

export default App;
