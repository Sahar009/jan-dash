import { useState } from "react";
import './addstudent.css'


function AddStudent(props) {
    const [student, setStudent] = useState({

            //studentInfo
            refNo: 0,
            firstname:'',
            lastName: '',
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
            <div className="">
            First name: <input className=" firstName "type="text" name="firstname"
            value={student.firstname || ""} onChange={addStudentHandler}></input><br/>
            </div>
            <div>
            Last name: <input className=" lastName" type="text" name="lastname"
            value={student.lastname || ""} onChange={addStudentHandler}></input><br/>
            </div>
            <div>
            Address:  <input className=" Address" type="text" placeholder="Enter Address" name="address"
            value={student.address || ""} onChange={addStudentHandler}></input><br/>
            </div>
            <div>
            Age: <input className=" age" type="text" name="age" placeholder="Enter your age" maxlength="2" pattern="^[0-9]{2}$"
            required title="Enter numbers only"
            value={student.age || ""} onChange={addStudentHandler}></input><br/>
            </div>
            <div>
            Male: <input className="genderM" type="radio" id="male" name="gender"
            value="male" onChange={addStudentHandler}></input><span> </span>
            Female: <input className="genderF" type="radio" id="female" name="gender"
            value="female" onChange={addStudentHandler}></input><br/>
            </div>
            Dob:  <input className=" dob" type="text" name="dob"
            value={student.dob || ""} onChange={addStudentHandler}></input><br/>
            Class:  <input className=" class" type="text" name="class"
            value={student.class || ""} onChange={addStudentHandler}></input><br/>
        

           
           
            <button className="btn" onClick={() => props.addStudent(student)}>Add</button>
            </div>
            </section>
    );
}
export default AddStudent;