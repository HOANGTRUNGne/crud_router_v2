import React from 'react';
import eyeImg from "../images/eye.svg";
import editImg from "../images/edit.svg";
import deleteImg from "../images/delete.svg";
import {get} from "../../apiService";
import {Link} from "react-router-dom";


const Member = (props) => {
    const {id, name, mail} = props.member


    return (
        <tr>
            <td>{props.index}</td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{mail}</td>
            <td>
                <div className={'actions'}>
                    <button className={'blue'}><img src={eyeImg} alt={eyeImg}/></button>
                    <Link to={`/updatemember/${id}`}>
                        <button className={'green'}><img src={editImg} alt={editImg}/></button>
                    </Link>
                    <button className={'red'} onClick={props.handleDelete} ><img src={deleteImg} alt={deleteImg}/></button>
                </div>
            </td>
        </tr>
    );
};

export default Member;