
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
import React from 'react';
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
    image: 'https://plus.unsplash.com/premium_photo-1678567671496-aa666d40af88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhhbWluYXRpb258ZW58MHx8MHx8fDA%3D',
    title: 'Reminder of the Upcoming Examiation',
    date: '6th June, 2024',
    views: '6K',
    essay: `Dear Students,
Please be informed that the upcoming examination period will commence on the 1st of July and will continue until the 15th of July.
The detailed examination timetable will be posted later this week. We encourage all students to begin their preparation early and to make sure they are well-prepared for each subject.
Best of luck in your studies!`
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1691963099413-4e93bdc40945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzbGltJTIwZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D',
    title: 'Ileya Festival Break',
    date: '4th June, 2024',
    views: '4K',
    essay: `Dear Students and Parents,We are pleased to inform you that in celebration of the Ileya Festival, there will be a school break on the 14th and 15th of June. During this period, students are not required to come to school.
The Ileya Festival, also known as Eid al-Adha, is a significant time for reflection, prayer, and celebration with family and friends. We encourage all students to take this opportunity to immerse themselves in the traditions and values of the festival, including acts of kindness, sharing, and togetherness.
School will resume on the 16th of June. We wish you all a joyful and blessed Ileya Festival.`
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1495329356033-eb76e0af9fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGludGVyc2Nob29sJTIwY29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D',
    title: 'Inter-school competition (sports/singing/drawing/drama)',
    date: '3rd June, 2024',
    views: '7K',
    essay: `Inter-school competitions are a great way to bring students from different schools together to showcase their talents and skills. These events typically cover a wide range of activities, including sports, singing, drawing, and drama. 
    The competition helps students to build self-confidence, enhance their skills, and develop a sense of camaraderie with their peers. It also encourages healthy competition, which can motivate students to perform their best. 
    Additionally, these events provide a platform for students to receive recognition for their talents and hard work. The inter-school competition not only fosters a spirit of teamwork and cooperation but also promotes cultural exchange and understanding among students from diverse backgrounds. 
    Through these competitions, students learn important life skills such as teamwork, leadership, and resilience. They also get the opportunity to meet new people, make friends, and create memories that last a lifetime. Overall, inter-school competitions are an invaluable part of a student's educational experience, helping to shape well-rounded individuals who are prepared for the challenges of the future.`
  },
  {
    id: 4,
    image: 'https://plus.unsplash.com/premium_photo-1663090278294-e557c9416aa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGRpc2NpcGxpbmFyeSUyMGFjdGlvbiUyMGluJTIwc2Nob29sfGVufDB8fDB8fHww',
    title: 'Disciplinary action if school discipline is not followed',
    date: '1st June, 2024',
    views: '9K',
    essay: `Discipline in schools is crucial for creating a safe and conducive learning environment. This essay discusses the importance of maintaining discipline and the consequences of failing to adhere to school rules. 
    Schools have established guidelines to ensure that students maintain proper behavior, respect their peers and teachers, and focus on their studies. When students do not follow these rules, it can lead to disruptions in the classroom, negatively affecting the learning experience for everyone. 
    Disciplinary actions are necessary to address and correct inappropriate behavior. These measures can include detention, suspension, or other consequences deemed appropriate by the school administration. 
    The goal is to help students understand the impact of their actions and encourage them to make better choices in the future. Maintaining discipline helps create a positive school environment where all students can thrive academically and socially. 
    Consistent enforcement of rules ensures fairness and respect among students. It also helps in building a sense of responsibility and self-discipline among students, preparing them for the professional and personal challenges they will face in life. In conclusion, school discipline is not just about enforcing rules; it's about fostering an environment where students can learn and grow to their fullest potential.`
  },
  {
    id: 5,
    image: 'https://media.istockphoto.com/id/1391725156/photo/shot-of-two-girls-playing-dress-up-in-class.webp?b=1&s=170667a&w=0&k=20&c=zbrQwZHBBPR2lZd7CrUi9ehejT1xQnQmy5aIeJdSu2k=',
    title: 'End of the year party',
    date: '31st May, 2024',
    views: '10K',
    essay: `As the school year draws to a close, students and teachers alike are eagerly anticipating the much-awaited End of the Year Party, scheduled for the 22nd of July, 2024. This event promises to be a joyous occasion filled with laughter, memories, and camaraderie, marking the culmination of a year of hard work, achievements, and growth.
The End of the Year Party is more than just a celebration; it is a tradition that brings the entire school community together. It is a time for students to unwind and celebrate their accomplishments, both academic and extracurricular. The event will be held in the school’s expansive sports hall, which will be transformed into a vibrant and festive venue, adorned with colorful decorations, twinkling lights, and themed decorations that reflect the spirit of celebration.
The evening will commence with a welcome address from the school principal, who will highlight the significant milestones and successes achieved over the past year. This will be followed by a series of performances by the school’s talented students, including musical acts, dance routines, and drama skits. These performances not only showcase the diverse talents of the students but also serve as a reminder of the collaborative and creative environment that the school fosters.`
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbGRyZW4lMjBkYXl8ZW58MHx8MHx8fDA%3D',
    title: 'Celebration of Children day',
    date: '27th May, 2024',
    views: '14K',
    essay: `Dear Students, Parents, and Staff, We are excited to announce the celebration of Children's Day on the 27th of June, 2024! This special day is dedicated to honoring the joy, innocence, and boundless potential of our beloved students. How We Will Celebrate: Morning Assembly: The day will begin with a special assembly featuring inspirational speeches and performances by our talented students. Fun Activities: After the assembly, various fun-filled activities and games will be organized on the school grounds. These will include face painting, sack races, and a bouncy castle. Talent Show: In the afternoon, students will have the opportunity to showcase their talents in a talent show. Whether it's singing, dancing, or a magic trick, we encourage everyone to participate and cheer for their peers. Refreshments: Delicious snacks and refreshments will be provided to ensure that everyone has the energy to enjoy the day's festivities. Gift Distribution: As a token of our appreciation and love for our students, small gifts will be distributed at the end of the day. We invite all parents to join us in celebrating this joyous occasion and make it a memorable day for our children. Let’s come together to celebrate the bright future that lies ahead for each and every child. Looking forward to a wonderful celebration!`
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlkdGVybSUyMGJyZWFrJTIwZm9yJTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D',
    title: 'Midterm Break',
    date: '21st May, 2024',
    views: '18K',
    essay: `Dear Students, Parents, and Staff, We would like to inform you that there will be a midterm break on the 22nd and 23rd of May, 2024. During these two days, school will be closed to allow our students and staff to rest and recharge. Classes will resume on Monday, the 26th of May, 2024. We encourage everyone to use this time to relax, spend time with family, and prepare for the remainder of the term. Have a wonderful break!`
  },
  {
    id: 8,
    image: 'https://media.istockphoto.com/id/1164519664/photo/teenage-friends-visiting-london-on-tower-bridge.jpg?s=612x612&w=0&k=20&c=UINb2iCF_pMCuq5TXiTkrUQXvvq2mAH9pyl0Ce1IdEE=',
    title: 'School Excursion',
    date: '15th May, 2024',
    views: '20K',
    essay: `Dear Students and Parents,

We are excited to announce an excursion to Olumo Rock in Abeokuta on the 17th of May, 2024. This trip is a wonderful opportunity for our students to learn about the history and culture of our region, as well as to enjoy a day of exploration and adventure.

Details of the excursion:

Date: 17th May, 2024
Departure Time: 8:00 AM
Return Time: 5:00 PM
Meeting Point: School main gate
Please ensure that students come prepared with comfortable clothing, a hat, sunscreen, and a packed lunch. Permission slips must be signed and returned by the 10th of May, 2024. We look forward to a fun and educational trip!`
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1598981457915-aea220950616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbCUyMGZlZXMlMjBwYXltZW50fGVufDB8fDB8fHww',
    title: 'Reminder for Payment of school fees',
    date: '10th May, 2024',
    views: '20.2K',
    essay: `Dear Parents and Guardians,
This is a gentle reminder that the payment of school fees for the current term is due. Timely payment is essential for the smooth operation of our school and to ensure that we can continue to provide the best educational experience for your children.
Payment Deadline: [1st June,2024]
Please make sure to complete the payment by the above date to avoid any late fees or disruptions in your child's education. For your convenience, payments can be made via bank transfer, cheque, or directly at the school office.
Thank you for your prompt attention to this matter.`
  },
  {
    id: 10,
    image: 'https://plus.unsplash.com/premium_photo-1661919869207-2d313d06f8ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cnVsZXMlMjBhbmQlMjByZWd1bGF0aW9ucyUyMGZvciUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D',
    title: 'New Rules and Regulations',
    date: '4th May, 2024',
    views: '22K',
    essay: `Dear Students,
Please be informed that the school has implemented new rules and regulations to ensure a safe and productive learning environment for everyone.
Key changes include:
Attendance: Punctuality is mandatory. Late arrivals will face disciplinary action.
Dress Code: Students must adhere to the updated dress code. Uniforms should be worn neatly and appropriately.
Behavior: Respectful behavior towards peers and staff is expected at all times. Bullying or any form of harassment will not be tolerated.
Electronic Devices: The use of mobile phones and other electronic devices is prohibited during school hours unless permitted by a teacher for educational purposes.
Cleanliness: Maintain cleanliness in classrooms and around the school premises. Dispose of litter in the designated bins.
Please review the detailed document sent to your email and posted on the school website. These rules are effective immediately.`
  }

];


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

      {/*dayo code inserted into stanley"s code*/}
    
      </div>
    
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

