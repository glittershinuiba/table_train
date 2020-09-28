import React,{useState} from 'react';

import './App.css';
import Editor from './Editor';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    root: {
      borderBottom:"1px ridge",
      borderColor: "white", 
      
      '& > *': {
        color:"white",
        
      },
      
      '&:hover':{
        borderBottom:"1px solid",
        borderColor:"blue"
      }
    },
  }));

function Sub1(props) {

  const classes = useStyles();

  const Student=props.Student;
  const setStudent=props.setStudent;
  const table = document.getElementById('table1');

  
  const [isopen,setisopen] =useState("hidden");
  const [Item,setItem]=useState(0);
  
  const editor=(item)=>{
    setisopen("visible");
    setItem(item);
   
  }
  const showgrade = (id)=>{
      alert(`${id.grade}`);
     
      
      
  };
  const Del=(item,key)=>{
      let Newstudents=[...Student];
      Newstudents=Newstudents.filter(i=>i.id!=item.id);
      Newstudents.map((i,keys)=>{
        i.id=keys+1;
      })
      setStudent(Newstudents);
      setisopen("hidden");
  }

  const Sort_up = ()=>{
      let Newstudents=[...Student];
      for(var i=0;i<Newstudents.length;i++)
      {
        var min=i;
        var temp={};
        for(var j=i;j<Newstudents.length;j++){
          if(Newstudents[min].grade>Newstudents[j].grade){
              min=j;
          }
        }
        temp=Newstudents[i];
        Newstudents[i]=Newstudents[min];
        Newstudents[min]=temp;
      
      }

      Newstudents.map((i,keys)=>{
        i.id=keys+1;
      });
      setStudent(Newstudents);
  }
  const Sort_down = ()=>{
    let Newstudents=[...Student];
    for(var i=0;i<Newstudents.length;i++)
    {
      var min=i;
      var temp={};
      for(var j=i;j<Newstudents.length;j++){
        if(Newstudents[min].grade<Newstudents[j].grade){
            min=j;
        }
      }
      temp=Newstudents[i];
      Newstudents[i]=Newstudents[min];
      Newstudents[min]=temp;
    
    }

    Newstudents.map((i,keys)=>{
      i.id=keys+1;
    });
    setStudent(Newstudents);
}

const Sort_sex=()=>{
    let Newstudents=[...Student];
    let count=0;
    for(var i=0;i<Newstudents.length;i++){

      if(Student[i].sex=='man'){
        Newstudents[count]=Student[i];
        count++;
      }
    }
    for(var i=0;i<Newstudents.length;i++){

      if(Student[i].sex=='woman'){
        Newstudents[count]=Student[i];
        count++;
      }
    }
    Newstudents.map((i,keys)=>{
      i.id=keys+1;
    });
    setStudent(Newstudents);
}
const [filter_result,setfilter_result]=useState({});
const [filtername,setfiltername]=useState('');
const [count, setcount]=useState(0);
const filter=()=>{
  
    let Newstudents=[...Student];
    Newstudents.map(i=>{
    if(filtername == i.name){
      setfilter_result(i);
      
      setcount(1);
    }
    if(filtername==""){
      setfilter_result({})
    }
  })
  
}
  
  return (
    <div className="home">
      <h2>The table of Stuendents' grade</h2>

    <div className='table'>
  <p>教师姓名：{props.inputname}</p>

      <div className='filter'>
      
      <Input className={classes.root}label="Search name"  onChange={(e)=>{setfiltername(e.target.value)}} style= {{color:"white"}}  inputProps={{ style: { fontFamily: 'Arial', color: 'white',borderColor: "white"}}} />
       
        <Button color="primary" onClick={filter}>Filter</Button>
      </div>
      <div className="sort">
        <Button color="primary" onClick={Sort_sex}>按性别排序</Button>
        <Button color="primary" onClick={Sort_up}>分数升序</Button>
        <Button color="primary" onClick={Sort_down}>分数降序</Button>
      </div>
     <table id='table1' border='1'>
       <tr className="addStudent" >
         <td colspan='5'> 
         <Button color="primary" onClick={()=>editor(false)}>AddStudent</Button>
        </td>
       </tr>
       <tr id='tr' >
         <th>id</th>
         <th >name</th>
         <th>sex</th>
         <th>grade</th>
         <th></th>
       </tr>
       
      { filter_result.id  ? <tr>
      <td>{filter_result.id}</td>
      <td onClick={() => showgrade(filter_result)}>{filter_result.name}</td>
          <td>{filter_result.sex}</td>
          {filter_result.grade>=60?
            <td className="good">{filter_result.grade}</td>
        
          :
            <td className="bad">{filter_result.grade}</td>

        }
      <td><Button color="primary" onClick={()=>Del(filter_result,filter_result.id)} >Del</Button></td>
       
      </tr> :
       Student.map((i,key)=>(
         <tr id='tr' onClick={()=> editor(i)} >
          <td>{i.id}</td>
          <td onClick={() => showgrade(i)}>{i.name}</td>
          <td>{i.sex}</td>
          {i.grade>=60?
            <td className="good">{i.grade}</td>
        
          :
            <td className="bad">{i.grade}</td>

        }
        <td><Button color="primary" onClick={()=>Del(i,key)} >Del</Button></td>
       
       </tr >
        
      )) 
      }
    
     </table>

    </div>
     <Editor style={{visibility:isopen }}  Item={Item} Student={Student} setStudent ={setStudent} isopen={isopen} setisopen={setisopen} />
    </div>
  );
}

export default Sub1;
