import React, { useState } from 'react'
import './course.css'
import CourseDetail from  '../../course-data'
import IndividualService from '../IndividualService/IndividualService'

const recommended = CourseDetail.filter((item)=>{
    
    return item.Recommended === true
}).slice(0,4);

const Course = ({innerref}) => {
    const [highlightTopic, setHighlightTopic] =useState('Recommended');
    const [courseData, setCourseData] = useState(recommended);


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

    const changeMenu = (type)=>{
        if(type === 'Recommended')
        {
            setHighlightTopic('Recommended');
            setCourseData(recommended);
        }
        else{

            setHighlightTopic('Trending');
            const trending = CourseDetail.filter((item)=>{
    
                return item.Trending === true
            }).slice(0,4);
            setCourseData(trending);
        }
    }

    return (
        <div className='course-container' ref={innerref}>
            <div className="course-title">
                <h1>Courses</h1>
            </div>
            <div className='course-selection'>
                <span onClick={() =>changeMenu('Recommended')} style={{color : highlightTopic === 'Recommended' ? '#f7c744' : '#505050'}}>Recommended</span>
                <span onClick={() =>changeMenu('Trending')}  style={{color : highlightTopic === 'Trending' ? '#f7c744' : '#505050'}}>Now Trending</span>
            </div>
            <div className="course-details">
              {
                courseData.map((courseitem, index)=>{
                    const {id, name, img} = courseitem;
                    return(
                        <>
                        {console.log(id, index)}
                            <IndividualService key = {id} img={img} title={name} info={'We are accessible anywhere anytime through remote services.'} variant={opacityVariant}/>
                        </>
                    )
                })
              }
            </div>
            <div className="aura-effect effect-pos1"></div>
            <div className="aura-effect effect-pos2"></div>


        </div>
    )
}

export default Course