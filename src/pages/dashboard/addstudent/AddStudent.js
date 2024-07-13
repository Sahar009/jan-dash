
import './addstudent.css'


function AddStudent() {


    return(
        <section>
        <div className="card">
                <h1>Add New Student</h1>
                {/* Photo: <input className=" StudentPhoto" type="text" name="image"
            value={student.image || ""} onChange={}></input><br/> */}
            <div className="inputfield ">
              <p>First name:</p> <input type="text" placeholder='Enter your Firstname'
               ></input><br/>
            </div>
            <div className="inputfield ">
             <p>Last name:</p>  <input type="text" placeholder='Enter your Lastname'></input><br/>
            </div>
            <div className="inputfield ">
              <p>Address:</p>  <input type="text" placeholder="Enter Address" name="address"
              ></input><br/>
            </div>
            <div className="inputfield ">
              <p>Age:</p> <input className=" age field" type="number" placeholder="Enter your age" maxlength="2" pattern="^[0-9]{2}$"
              required title="Enter numbers only"></input><br/>
            </div>
            <div class="inputfield">
        <label for="gender"><p>Gender:</p> </label>
        <select id="gender" name="gender">
            <option value="" disabled selected>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        </div>
            
            <div className="inputfield ">
            <label for="gender"><p>Class:</p> </label>
        <select id="gender" name="gender">
            <option value="" disabled selected>Select class</option>
            <option value="male">JSS1</option>
            <option value="female">JSS2</option>
            <option value="other">JSS3</option>
            <option value="other">SSS1</option>
            <option value="other">SSS2</option>
            <option value="other">SSS3</option>

        </select>
            </div>
            <div className="inputfield ">
            <p>Date Of Birth:</p> <input className=" dob field" type="date" name="dob"
              value></input><br/>
            </div>
        

           
           
            <button className="btn" onClick={""}>Add New Student</button>
        </div>
            </section>
    );
}
export default AddStudent;