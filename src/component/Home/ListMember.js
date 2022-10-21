import React, {useState, useEffect} from 'react';
import './Home.css';
import {create, get} from "../../apiService";
import Member from "../Member/Member";


const ListMember = (props) => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        const listMember = get("memberList")
        setMembers(listMember)
    }, [])

    const handleDelete = id => {
        const data = members.filter(member => member.id !== id);
        setMembers(data)
        create('memberList', data)
    }

    return (
        <div style={{margin: '30px 0'}}>
            <h1>List Management Member</h1>
            {
                members !== null && members.length > 0
                    ?
                    (<table className={'main'}>
                        <tbody>
                        <tr>
                            <td>No.</td>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        {members.map((member, index) => {
                            return (
                                <Member index={index + 1} member={member} handleDelete={() => handleDelete(member.id)} key={member.id}/>
                            )
                        })}
                        </tbody>
                    </table>)
                    :
                    (<h3 style={{textAlign: 'center', fontSize: '35px'}}>No Member</h3>)
            }
        </div>
    );
};

export default ListMember;