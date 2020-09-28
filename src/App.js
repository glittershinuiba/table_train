import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sub1 from './Sub1';
import TheStudent from './TheStudent';
import './App.css';

import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function App() {
  const classes = useStyles();
  const [Student, setStudent] = useState(
    [{
      id: 1,
      name: 'zhou',
      sex: 'man',
      grade: 76,
    },
    {
      id: 2,
      name: 'wu',
      sex: 'man',
      grade: 54,

    },
    {
      id: 3,
      name: 'zheng',
      sex: 'woman',
      grade: 89,

    },
    {
      id: 4,
      name: 'wang',
      sex: 'man',
      grade: 79,

    },
    {
      id: 5,
      name: 'zhao',
      sex: 'woman',
      grade: 56,

    },
    {
      id: 6,
      name: 'qian',
      sex: 'man',
      grade: 57,

    }
    ])

  const [inputValue, setinputValue] = useState('');
  const [name, setname] = useState('');
  const [open, setopen] = useState(false);

  const close = () => {
    setopen(false);

  }
  return (
    <div className="App">
      <Router>
        <div className="App-header" >
          <image url="./logo.svg" />
          <ul>
            <li>
              <p onClick={() => setopen(true)}>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>login</Link>
              </p>
              <dialog open={open} className="submit">
                <p>职位</p>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">position</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inputValue}
                    onChange={(e) => { setinputValue(e.target.value) }}
                  >
                    <MenuItem value={"teacher"}>teacher</MenuItem>
                    <MenuItem value={"student"}>student</MenuItem></Select>

                </FormControl>
                <p>姓名</p>
                <Input onChange={(e) => { setname(e.target.value) }} />
                <Link to={`/${inputValue}`}>

                  <Button onClick={close}>submit</Button>
                </Link>
                
              </dialog>
            </li>

          </ul>



        </div>


        <Switch>
          <Route exact path="/teacher">
            <Sub1 inputname={name} Student={Student} setStudent={setStudent} />
          </Route>

          <Route exact path="/Student">
            <TheStudent student={Student} inputname={name} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;