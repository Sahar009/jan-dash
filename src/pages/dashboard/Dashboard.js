<<<<<<< HEAD
import {useEffect,useState, useRef} from 'react';
import { IoIosSearch } from "react-icons/io";
import joc2 from '../../asset/joc2.png';
import { IoMdMail } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { PiArrowCircleUpRightFill } from "react-icons/pi";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import './dashboard.scss'
=======
import React, { useState } from 'react';
import './dashboard.scss';
import { PiDotsThreeBold } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoIosEye } from "react-icons/io";
import Apexchart from './Apexchart';
const notices = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1495329356033-eb76e0af9fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGludGVyc2Nob29sJTIwY29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D',
    title: 'Inter-school competition (sports/singing/drawing/drama)',
    date: '6th June, 2024',
    views: '7K',
    essay: `Inter-school competitions are a great way to bring students from different schools together to showcase their talents and skills. These events typically cover a wide range of activities, including sports, singing, drawing, and drama. 
    The competition helps students to build self-confidence, enhance their skills, and develop a sense of camaraderie with their peers. It also encourages healthy competition, which can motivate students to perform their best. 
    Additionally, these events provide a platform for students to receive recognition for their talents and hard work. The inter-school competition not only fosters a spirit of teamwork and cooperation but also promotes cultural exchange and understanding among students from diverse backgrounds. 
    Through these competitions, students learn important life skills such as teamwork, leadership, and resilience. They also get the opportunity to meet new people, make friends, and create memories that last a lifetime. Overall, inter-school competitions are an invaluable part of a student's educational experience, helping to shape well-rounded individuals who are prepared for the challenges of the future.`
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1663090278294-e557c9416aa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGRpc2NpcGxpbmFyeSUyMGFjdGlvbiUyMGluJTIwc2Nob29sfGVufDB8fDB8fHww',
    title: 'Disciplinary action if school discipline is not followed',
    date: '1st June, 2024',
    views: '7K',
    essay: `Discipline in schools is crucial for creating a safe and conducive learning environment. This essay discusses the importance of maintaining discipline and the consequences of failing to adhere to school rules. 
    Schools have established guidelines to ensure that students maintain proper behavior, respect their peers and teachers, and focus on their studies. When students do not follow these rules, it can lead to disruptions in the classroom, negatively affecting the learning experience for everyone. 
    Disciplinary actions are necessary to address and correct inappropriate behavior. These measures can include detention, suspension, or other consequences deemed appropriate by the school administration. 
    The goal is to help students understand the impact of their actions and encourage them to make better choices in the future. Maintaining discipline helps create a positive school environment where all students can thrive academically and socially. 
    Consistent enforcement of rules ensures fairness and respect among students. It also helps in building a sense of responsibility and self-discipline among students, preparing them for the professional and personal challenges they will face in life. In conclusion, school discipline is not just about enforcing rules; it's about fostering an environment where students can learn and grow to their fullest potential.`
  }
];
>>>>>>> 2a5b3a1aa26574c6d471035e39a2625e43a30974

const Dashboard = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [showEssay, setShowEssay] = useState(false);

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
    setShowEssay(true);
  };

  const handleBackClick = () => {
    setShowEssay(false);
    setSelectedNotice(null);
  };

  return (
    <div className='container'>
<<<<<<< HEAD
       <header>
        <nav>
          <h2>Dashboard</h2>
          <div className='search_bar'>
            <IoIosSearch />
          <input type='text' placeholder=' search'>
          </input>
          </div>
          <div className='headerIcons'>
         <p> <IoMdMail style={{color: 'black'}} size={20} /></p>
         <p className='notificationP'> <IoIosNotifications style={{color: 'black'}} size={20}/></p>
          </div>
          <div className='userImage-container'>
            <div className='userImage'>
              {/* admin profile picture will be rendered here  */}
            </div>
          <div className='userText'>
            <h1> PappyBoyisa</h1>
            <p> Admin </p>
          </div>
          
          </div>

        </nav>
      </header>
      <div className='FirstDiv-container'> {/* this is the students teachers parents and earnings container */}
        <div className='studentDiv'>
          <p>Students</p> <br/>
          <p className='studentNumber'> 1200</p>
          <a href='#' target='blank'><div className='arrowIcon'><PiArrowCircleUpRightFill /> </div></a>
        </div>
        <div className='teachersDiv'>
          <p>Teachers</p> <br/>
          <p className='teachersNumber'> 224</p>
          <a href='#' target='blank'><div className='arrowIcon'><PiArrowCircleUpRightFill /> </div></a>
        </div>
        <div className='parentsDiv'>
          <p>Parents</p> <br/>
          <p className='parentsNumber'> 224</p>
        <a href='#' target='blank'><div className='arrowIcon'><PiArrowCircleUpRightFill /> </div></a>
        </div>
        <div className='earningsDiv'>
          <p>Earnings</p> <br/>
          <p className='earningsNumber'> 224</p>
          <a href='./Piechart.js' target='blank'><div className='arrowIcon'><PiArrowCircleUpRightFill /> </div></a>
        </div>
      
      <div className='calendar'>
      <Calendar />
      </div>
      <div className='joinOurComunnity'>
        < joc2 />
      </div>
    
      </div>
    

     
    </div>
  )
}
export default Dashboard
=======
      <h2>DashBoard</h2>
        <Apexchart/>
      <div className='notice'>
        <h4>Notice Board</h4>
        <PiDotsThreeBold className='icond' />
      </div>
      <span className='create'>Create a notice or find a message for you!</span>
      {showEssay && selectedNotice ? (
        <div className='notice-details'>
          <button className='back-button' onClick={handleBackClick}>Back</button>
          <h3>{selectedNotice.title}</h3>
          <p>Date: {selectedNotice.date}</p>
          <p>Views: {selectedNotice.views}</p>
          <p>{selectedNotice.essay}</p>
          <img src={selectedNotice.image} alt={selectedNotice.title} className='details-image' />
        </div>
      ) : (
        notices.map((notice) => (
          <div key={notice.id} className='row' onClick={() => handleNoticeClick(notice)}>
            <img src={notice.image} alt={notice.title} />
            <span className='text'>{notice.title}</span>
            <span className='text'>{notice.date}</span>
            <div className='icons'>
              <IoLogoInstagram className='icon' />
              <IoLogoFacebook className='icon' />
              <AiOutlineWhatsApp className='icon' />
            </div>
            <div className='view'>
              <IoIosEye className='eye' />
              <span className='k'>{notice.views}</span>
            </div>
            <PiDotsThreeBold className='dot' />
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
>>>>>>> 2a5b3a1aa26574c6d471035e39a2625e43a30974
