import React, { useEffect, useState } from 'react';
import './StudentDetail.scss';
import { Link, useParams } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";

const Student_detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);




                                              //  student full details 

  useEffect(() => {
    const studentData = [
      { id: 324642, image: 'https://t3.ftcdn.net/jpg/01/25/82/12/240_F_125821215_yoIIsTPyiXFdnH9DA2GOeId3fv4b8FNw.jpg', FirstName: "Dayo", LastName: "kemisola", Gender: "male", age: 17, dob: "19/7/1991", email: "olajide2210@gmail.com", Address: "480, Estern Avenue, New York", Class: "jss2" },
      { id: 746474, image: 'https://media.istockphoto.com/id/1415994285/photo/back-to-school-cheerful-kid-in-beret-ready-to-study-smiling-child-with-book-teenage-student.jpg?s=612x612&w=0&k=20&c=llBdA9Y3PeZ5r94D3ywtXBY_Cdni6WYc-8bvCof7M-s=', FirstName: "Dayo", LastName: "kemisola", Gender: "female", age: 20, dob: "21/6/2001", email: "oyindamola@gmail.com", Address: "480, Estern Avenue, New York", Class: "ss1" },
      { id: 123456, image: 'https://t4.ftcdn.net/jpg/07/11/41/97/240_F_711419776_Lg8PnZXxrxs1Wuys6d5rT8HFb00XIirJ.jpg', FirstName: "Ologunagba", LastName: "Oyindamola", Gender: "female", age: 25, dob: "21/6/2001", email: "oyindamola@gmail.com", Address: "480, Estern Avenue, New York", Class: "ss1" },
      { id: 987654, image: 'https://t3.ftcdn.net/jpg/00/71/63/98/240_F_71639854_0LDSa6HiRcK14knhfoIPqlbuHHoz7Say.jpg', FirstName: "Dayo", LastName: "kemisola", Gender: "female", age: 21, dob: "21/6/2001", email: "oyindamola@gmail.com", Address: "480, Estern Avenue, New York", Class: "jss3" },
      { id: 456789, image: 'https://t4.ftcdn.net/jpg/01/25/81/99/240_F_125819936_tApB7Z7bviuNjyXbpT0x1UOkOPUHIEh1.jpg', FirstName: "Dayo", LastName: "kemisola", Gender: "female", age: 18, dob: "21/6/2001", email: "oyindamola@gmail.com", Address: "480, Estern Avenue, New York", Class: "ss1" }
    ];

    const selectedStudent = studentData.find(student => student.id === parseInt(id));
    setData(selectedStudent);
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className='details_container'>
      <div className='left_section'>
        <h2>Student Details</h2>
        <div className='Details_section'>
          <div className='details_header'>
            <h3>Profile</h3>
            <div className='back_div'>
            <Link to="/Students" className='back_btn'>   <TiArrowBack className='back_icon' />
              <div>Back</div></Link> 
            </div>
          </div>
          <div className='Sub_details_div'>
            <div className='Sub_details_image_div'><img src={data.image} alt='Profile' /></div>
            <div className='Bottom_Sub_details'>
              <div className='Student_image'>
                <img src={data.image} alt='Profile' />
              </div>
              <h4>{data.FirstName} {data.LastName}</h4>
            </div>
          </div>
          <div className='full_student_details'>
            <div className='left_full_student_details'>
              <div>
                <label>First Name:</label>
                <p>{data.FirstName}</p>
              </div>
              <div>
                <label>Last Name:</label>
                <p>{data.LastName}</p>
              </div>
              <div>
                <label>Email:</label>
                <p>{data.email}</p>
              </div>
              <div>
                <label>Class:</label>
                <p>{data.Class}</p>
              </div>
            </div>
            <div className='right_full_student_details'>
              <div>
                <label>Age:</label>
                <p>{data.age}</p>
              </div>
              <div>
                <label>Date Of Birth:</label>
                <p>{data.dob}</p>
              </div>
              <div>
                <label>Gender:</label>
                <p>{data.Gender}</p>
              </div>
              <div>
                <label>ID:</label>
                <p>{data.id}</p>
              </div>
              <div>
                <label>Address:</label>
                <p>{data.Address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Right'></div>
    </div>
  );
}

export default Student_detail;
