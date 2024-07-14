import './addstudent.css';




const AddStudent=()=> {
  return (
    <section>
      <div className="card">
        <h1>Add New Student</h1>

        <div className="inputfield">
          <p>First name:</p>
          <input type="text" placeholder='Enter your Firstname' /><br />
        </div>

        <div className="inputfield">
          <p>Last name:</p>
          <input type="text" placeholder='Enter your Lastname' /><br />
        </div>

        <div className="inputfield">
          <p>Address:</p>
          <input type="text" placeholder="Enter Address" name="address" /><br />
        </div>

        <div className="inputfield">
          <p>Date Of Birth:</p>
          <input className="dob field" type="date" name="dob" /><br />
        </div>

        <div className="inputfield">
          <p>Age:</p>
          <input className="age field" type="number" placeholder="Enter your age" maxLength="2" pattern="^[0-9]{2}$" required title="Enter numbers only" /><br />
        </div>

        <div className="inputfield">
          <label htmlFor="gender"><p>Gender:</p></label>
          <select className="options">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="inputfield">
          <label htmlFor="class"><p>Class:</p></label>
          <select className="options">
            <option value="">Select class</option>
            <option value="JSS1">JSS1</option>
            <option value="JSS2">JSS2</option>
            <option value="JSS3">JSS3</option>
            <option value="SSS1">SSS1</option>
            <option value="SSS2">SSS2</option>
            <option value="SSS3">SSS3</option>
          </select>
          <div className='fileinput'>
          <label htmlFor="file"><p>Choose to add jpeg, png file</p></label>
          <input type="file" id="file" />
          </div>
        </div>
        

        <button className="btn" onClick={""}>Add New Student</button>
      </div>
    </section>
  );
}

export default AddStudent;
