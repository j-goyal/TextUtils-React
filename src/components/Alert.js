import React from 'react'

export default function Alert(props) {

    const captitalize = (word) => {
        const lowerWord = word.toLowerCase();
        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);      
    }

    let myStyle = {
        height: '40px',
        padding: '7px 17px',
    }

    return (
        <div style={{height: '30px'}}>
        {props.alert && <div style={myStyle} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{captitalize(props.alert.type)} : </strong>{props.alert.msg}
        </div>}
        </div>
    )
}
