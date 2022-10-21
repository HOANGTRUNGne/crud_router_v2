import React, {useEffect, useState} from 'react';
import '../Create/AddMembe.css'
import {useParams} from "react-router-dom";
import {create, get} from "../../apiService";

const EditMember = () => {
    const listMember = get("memberList")
    const {id} = useParams()
    const [editmember, setEditmember] = useState(listMember.find(member => member.id === +id))

    const initialValues = {name: "", mail: ""}

    const editOnChange = (e) => {
        const {name, value} = e.target  //
        setEditmember({...editmember, [name]: value})
    }
    const editOnSubmit = (e) => {
        e.preventDefault()

        const data = listMember.map(member => {
            console.log(member.id)
            if (member.id ===  +id ) {
                return {...member, name: editmember.name, mail: editmember.mail}
            }
            return member;
        });

        create('memberList', data)
        setEditmember(initialValues)
    }


    return (<>
            <h1>Update Member</h1>
            <div className={'form-add'}>
                <form id="update-form" className="login-form" onSubmit={editOnSubmit}>
                    <div>
                        <label className="label-name">
                            <input type="text" className="text" name="name" placeholder="Your Name..."
                                   value={editmember.name} onChange={editOnChange}/>
                            <span className="required">Name</span>
                        </label>
                    </div>

                    <div>
                        <label className="label-email">
                            <input type="email" className="text" name="mail" placeholder="Email" value={editmember.mail}
                                   onChange={editOnChange}/>
                            <span className="required">Email</span>
                        </label>
                    </div>

                    <button>Update Member</button>
                </form>
            </div>
        </>

    );
};

export default EditMember;