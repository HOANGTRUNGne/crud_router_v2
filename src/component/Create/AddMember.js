import React, {useState, useEffect} from 'react';
import './AddMembe.css'
import {create, get} from "../../apiService";
import {Link} from "react-router-dom";

const AddMember = () => {
    const initialValues = {name: "", mail: ""}
    const [member, setMember] = useState(initialValues)

    const addOnChange = (e) => {
        const {name, value} = e.target  // name, value la thuoc tinh cua input
        setMember({...member, [name]: value})
    }
    const prevList = get("memberList")
    // console.log(prevList)
    const addOnSubmit = (e) => {
        e.preventDefault()

        if (prevList) {
            const newList = [...prevList, {id: Date.now(), ...member}]
            create("memberList", newList)
        } else {
            const newList = [{id: Date.now(), ...member}]
            create("memberList", newList)
        }

        setMember(initialValues)
    }


    useEffect(() => {
        const listMember = get("memberList")
        console.log(listMember)
    }, [])


    return (
        <>
            <h1>Add Member</h1>
            {/*<h1>{localStorage.getItem('memberList')}</h1>*/}

            <div className={'form-add'}>
                <form id="login-form" className="login-form" onSubmit=
                    {addOnSubmit}>
                    <div>
                        <label className="label-name">
                            <input type="text" className="text" name="name" placeholder="Your Name..."
                                   value={member.name} onChange={addOnChange}/>
                            <span className="required">Name</span>
                        </label>
                    </div>

                    <div>
                        <label className="label-email">
                            <input type="email" className="text" name="mail" placeholder="Email" value={member.mail}
                                   onChange={addOnChange}/>
                            <span className="required">Email</span>
                        </label>
                    </div>


                    <button>Add Member</button>

                    <figure aria-hidden="true">
                        <div className="person-body"></div>
                        <div className="neck skin"></div>
                        <div className="head skin">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                        <div className="hair"></div>
                        <div className="ears"></div>
                        <div className="shirt-1"></div>
                        <div className="shirt-2"></div>
                    </figure>
                </form>
            </div>

            <Link to="/">
                <button style={{width: '350px', height: '50px',}}>List Member</button>
            </Link>

        </>
    );
};

export default AddMember;