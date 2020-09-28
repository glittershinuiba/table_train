
import  './Editor.css';
import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

function Editor(props){

    const Student=props.Student;
    const setStudent=props.setStudent;
    
    const Item=props.Item;
    const isopen=props.isopen;
    const setisopen=props.setisopen;
    const [name1, setname]=useState('');
    const [sex1,setsex]=useState('');
    const [grade1, setgrade]=useState(0);
    
    
    
    const Save = ()=>{
        var id;
        const newStudents = [...Student];

        if(!Item.id){
            id=Student.length;
            setStudent([...Student,
                {
                id:id+1,
                name:name1,
                sex: sex1,
                grade: grade1,
            }]);
        }
        else{
            id=Item.id-1;
            newStudents[id].name=name1;
            newStudents[id].sex=sex1;
            newStudents[id].grade=grade1;

            setStudent(newStudents);

        }
        
       
        setisopen("hidden")
        

    }
    const close=()=>{
        setisopen("hidden")
    }


    return(
        <dialog style={{visibility:isopen }} className="editor" >
            
            <table border='1' >
            <tr>
                <td>姓名</td>
                <td>
                <Input type='text' onChange={(e)=>{setname(e.target.value)}} ></Input>
                </td>

            </tr>
            <tr>
                <td>性别</td>
                <td>
                <Input type='text' onChange={(e)=>{setsex(e.target.value)}}  ></Input>
                </td>
            </tr>
            <tr>
                <td>分数</td>
                <td>
                <Input type='number' onChange={(e)=>{setgrade(e.target.value)}}  ></Input>
                </td>
            </tr>
            
            </table>
            <div className='button'>
            <Button onClick={close} className="close">取消</Button>
            <Button onClick={Save} className="save">保存</Button>
        </div>
        </dialog>
    );
};

export default  Editor;