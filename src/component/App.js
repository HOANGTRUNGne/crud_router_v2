import React from "react";
import {Route, Routes} from 'react-router-dom'
import ListMember from './Home/ListMember'
import Header from './Header'
import AddMember from './Create/AddMember'
import UpdateMember from './Update/EditMember'
import './App.css';

function App() {

    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={'/'}
                       element={<ListMember />}/>

                <Route path={'/addmember'}
                       element={<AddMember
                                           />}/>

                <Route path={'/updatemember/:id'}
                       element={<UpdateMember
                                           />}/>
            </Routes>
        </div>
    );
}

export default App;

// const listMember = [
//     {
//         id: 1,
//         name: 'hello',
//         mail: 'hello@gmail.com',
//         phone: 123456,
//     },
//     {
//         id: 2,
//         name: 'aplle',
//         mail: 'aplle@mail.com',
//         phone: 123456,
//     }
// ]