import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2017-2021'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />} 
        >
          <h3 className='vertical-timeline-element-title'>
            ESTS "Nikola Tesla", Kraljevo
          </h3>
          <p>High School Diploma</p>
       </VerticalTimelineElement>

       <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2021'
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />} 
        >
          <h3 className='vertical-timeline-element-title'>
            3rd place on High School Hackathon
          </h3>
          <p>3rd place Diploma</p>
       </VerticalTimelineElement>

       <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='2021-present'
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />} 
          >
          <h3 className='vertical-timeline-element-title'>
            Faculty of Technical Science in Novi Sad
          </h3>
          <p>Engineer Diploma</p>
       </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience