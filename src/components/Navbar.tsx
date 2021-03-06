import { faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const style = {
    link: {
        color: '#555',
        textDecoration: 'none',
    },
    navbar: {
        borderBottom: 'solid 1px #aaa',
        padding: '10px 15px',
    }
}
export default class Navbar extends Component {
    render() {
        return (
            <div style={style.navbar}>
                <Link style={style.link} to='/app/newsfeed'><FontAwesomeIcon icon={faNewspaper} /> Instacool</Link>
                <div style={{ float: 'right' }}>
                    <Link style={style.link} to='/app/newsfeed'><FontAwesomeIcon icon={faUser} /> Profile</Link>
                </div>
            </div>
        )
    }
}
