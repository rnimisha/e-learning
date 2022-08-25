import React, { useState } from 'react'
import './course.css'
import CourseDetail from  '../../course-data'
import IndividualService from '../IndividualService/IndividualService'


const Course = () => {
    const [highlightTopic, setHighlightTopic] =useState('Recommended');
    const [courseData, setCourseData] = useState(CourseDetail);

    const opacityVariant ={
        whileInView:{
            y :[200,0],
            opacity : [0,1],
            transition: {
                duration : 0.5,
                ease : 'anticipate'
            }
        }
    }

    return (
        <div className='course-container'>
            <div className="course-title">
                <h1>Courses</h1>
            </div>
            <div className='course-selection'>
                <span style={{color : highlightTopic === 'Recommended' ? '#f7c744' : '#505050'}}>Recommended</span>
                <span style={{color : highlightTopic === 'Trending' ? '#f7c744' : '#505050'}}>Now Trending</span>
            </div>
            <div className="service-details">
              {
                courseData.map((courseitem)=>{
                    const {id, name, img} = courseitem;
                    return(
                        <>
                            <IndividualService img={img} title={name} info={'We are accessible anywhere anytime through remote services.'} variant={opacityVariant} key={id}/>
                        </>
                    )
                })
              }
            </div>


        </div>
    )
}

export default Course