import { useState } from "react";
import './addstudent.css'


function AddStudent(props) {
    const [student, setStudent] = useState({

            //studentInfo
            refNo: 0,
            firstname:'',
            lastname: '',
            age: 0,
            dob: '',
            gender: 'male',
            image: '',
            class: '',
            address:''

        },
        {
            //parentInfo
            firstname:'',
            lastName: '',
            gender: 'male',
            phonenumber: ''
           
        }
    );

    const addStudentHandler = (e) => {
        var addStudent = {...student};
        addStudent[e.target.name] = e.target.value;
        setStudent(addStudent);
    }


    return(
        <section>
        <div className="container">
                <h1>Add New Student</h1>
                {/* Photo: <input className=" StudentPhoto" type="text" name="image"
            value={student.image || ""} onChange={addStudentHandler}></input><br/> */}
            <div className="content">
              First name: <input className=" firstName field"type="text" name="firstname"
              value={student.firstname || ""} onChange={addStudentHandler}></input><br/>
            </div>
            <div className="content">
              Last name: <input className=" lastName field" type="text" name="lastname"
              value={student.lastname || ""} onChange={addStudentHandler}></input><br/>
            </div>
            <div className="content">
              Address:  <input className=" Address field" type="text" placeholder="Enter Address" name="address"
              value={student.address || ""} onChange={addStudentHandler}></input><br/>
            </div>
            <div className="content">
              Age: <input className=" age field" type="text" name="age" placeholder="Enter your age" maxlength="2" pattern="^[0-9]{2}$"
              required title="Enter numbers only"
            value={student.age || ""} onChange={addStudentHandler}></input><br/>
            </div>
            <div className="content">
              Male: <input className="genderM field" type="radio" id="male" name="gender"
              value="male" onChange={addStudentHandler}></input><span> </span>
              Female: <input className="genderF field" type="radio" id="female" name="gender"
              value="female" onChange={addStudentHandler}></input><br/>
            </div>
            <div className="content">
              Dob:  <input className=" dob field" type="text" name="dob"
              value={student.dob || ""} onChange={addStudentHandler}></input><br/>
            </div>
            <div className="content">
            Class:  <input className=" class field" type="text" name="class" 
            value={student.class || ""} onChange={addStudentHandler}></input><br/>
            </div>
        

           
           
            <button className="btn" onClick={() => props.addStudent(student)}>Add</button>
            </div>
            </section>
    );
}
export default AddStudent;