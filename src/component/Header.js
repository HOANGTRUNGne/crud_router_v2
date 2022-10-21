import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            <Link className="active" to="/">Home</Link>
            <Link to="/addmember">Add Member</Link>
        </div>
    );
};

export default Header;