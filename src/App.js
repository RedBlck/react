import {useEffect, useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userService} from "./components/services/user.service";

function App() {
    const [users, setUsers] = useState([]);
    const [findUsers, setFindUsers] = useState([]);

    useEffect(()=>{
        userService.getAll()
            .then(value => {
                setUsers([...value])
                setFindUsers([...value])
            })
    },[])

    const getFilter = (data) => {
      let arr = [...users]

        if (data.name) {
            arr = arr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()));
        }
        if (data.username) {
            arr = arr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()));
        }
        if (data.email) {
            arr = arr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()));
        }
        setFindUsers(arr)
    }
  return (
    <div className="App">
        <Form getFilter={getFilter}/>
        <Users users={findUsers}/>
    </div>
  );
}

export default App;
