import React, { useEffect, useState } from 'react';
import './student.scss';
import Student_render from './StudentRender';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { shortenText } from '../../utils/utility';
import ReactPaginate from 'react-paginate';

const Student = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(3); 

  useEffect(() => {
    const studentData = [
      { id: 324642, image: 'https://t3.ftcdn.net/jpg/01/25/82/12/240_F_125821215_yoIIsTPyiXFdnH9DA2GOeId3fv4b8FNw.jpg', FirstName: "Dayo", LastName: "kemisola", Gender: "male", age: 17, dob: "19/7/1991", email: "olajide2210@gmail.com", Address: "480, Estern Avenue, New York", Class: "jss2" },
      { id: 746474, image: 'https://media.istockphoto.com/id/1415994285/photo/back-to-school-cheerful-kid-in-beret-ready-to-study-smiling-child-with-book-teenage-student.jpg?s=612x612&w=0&k=20&c=llBdA9Y3PeZ5r94D3ywtXBY_Cdni6WYc-8bvCof7M-s=', FirstName: "Dayo", LastName: "kemisola", Gender: "female", age: 20, dob: "21/6/2001", email: "oyindamola@gmail.com", Address: "480, Estern Avenue, New York", Class: "ss1" },
      { id: 123456, image: 'https://t4.ftcdn.net/jpg/07/11/41/97/240_F_711419776_Lg8PnZXxrxs1Wuys6d5rT8HFb00XIirJ.jpg', FirstName: "Ologunagba", LastName: "Oyindamola", Gender: "female", age: 25, dob: "21/6/2001", email: "oyindamola@gmail.com", Address: "480, Estern Avenue, New York", Class: "ss1" },
      { id: 987654, image: 'https://t3.ftcdn.net/jpg/00/71/63/98/240_F_71639854_0LDSa6HiRcK14knhfoIPqlbuHHoz7Say.jpg', FirstName: "Dayo", LastName: "kemisola", Gender: "female", age: 21, dob: "21/6/2001", email: "oyindamola@gmail.com", Address: "480, Estern Avenue, New York", Class: "jss3" },
      { id: 456789, image: 'https://t4.ftcdn.net/jpg/01/25/81/99/240_F_125819936_tApB7Z7bviuNjyXbpT0x1UOkOPUHIEh1.jpg', FirstName: "Dayo", LastName: "kemisola", Gender: "female", age: 18, dob: "21/6/2001", email: "oyindamola@gmail.com", Address: "480, Estern Avenue, New York", Class: "ss1" }
    ];

    setData(studentData);
    setFilteredData(studentData);
  }, []);
  

  useEffect(() => {
    const results = data.filter(student =>
      student.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.LastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.Gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.Class.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredData(results);
  }, [searchTerm, data]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);

  return (
    <div className='studentDetails'>
      <div className='student_render'>
        <div className='header_input_div'>
          <h2>Student List</h2>
          <div className='search_input'>
            <CiSearch className='search_icon' />
            <input
              type='text'
              placeholder='search...'
              value={searchTerm}
              onInput={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <table className='details_header'>
          <thead>
            <tr className='header_detail_row'>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Class</th>
            </tr>
          </thead>
        </table>

        {/* student list mapping */}
        {currentPageData.map(({ id, image, FirstName, LastName, Gender, age, Class }) => (
          <Link to={`/Student_details/${id}`} key={id}>
            <Student_render
              id={id}
              image={image}
              FirstName={FirstName}
              LastName={shortenText(LastName, 1)}
              Gender={Gender}
              age={age}
              Class={Class}
            />
          </Link>
        ))}

        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(filteredData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default Student;
