import React from 'react'
import './student.scss'

const Student_render = ({id,image,age,Gender,dob,email,FirstName, LastName,Address,Class}) => {



  return (
    <tr className='student_row'>
     <td>{id}</td>
      <td >
        <div className='student_img'>
        <img src={image} alt='student_image'/>
        </div>
      </td>
      {FirstName && LastName ? <td>{`${FirstName} ${LastName}`}</td> : ""}
      
     <td>{age}</td>
     <td>{Gender}</td>
     <td>{Class}</td>
     
    </tr>
  )
}

export default Student_render