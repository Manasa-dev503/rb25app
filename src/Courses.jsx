import React from 'react';
function Courses(){
    var [courses,setcourses] = React.useState(["Mongodb","ReactJS","Angular","Nodejs","ExpressJS"])
    return (
        <div className='mybox'>
            <ul>
            {
                courses.map((course)=>{
                    return <li>{course}</li>
                })
            }
            </ul>
        </div>
    )
}
export default Courses;