import React from "react";

function Student(props) {
    return(
        <div>
            <h4>Student name is {props.StudentName} and roll no is {props.RollNo}</h4>
        </div>
    )
}

export default Student;
