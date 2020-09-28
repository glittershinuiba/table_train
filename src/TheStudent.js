import React from 'react';
import './App.css';
import './Editor.css'



function TheStudent(props){
    const student=props.student;
    return(
        <div className="home">
           
            
           {
            student.map(
                   (i)=>{
                       if(i.name==props.inputname){ return(
                           <div className="table">
                                Student Name : {props.inputname}  |  {i.sex}
                                <table >
                                    <tr>
                                        <th>name</th>
                                        <th>grade</th>
                                    </tr>
                                    <tr>
                                        <td>{i.name}</td>
                                        <td>{i.grade}</td>
                                    </tr>
                                </table>
                           </div>)
                       }
                   }
               )
           }
        </div>
    )
}

export default TheStudent;