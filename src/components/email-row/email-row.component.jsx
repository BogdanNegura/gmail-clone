import { CheckBox } from '@material-ui/icons'
import React from 'react'
import "./email-row.style.css"
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { IconButton } from '@material-ui/core';

const EmailRow = ({ id, title, subject, description, time }) => {
    return (
        <div className="emailRow">
            <div className="emailRow__option">
                <CheckBox/>
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <div className="emailRow__title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow__message">
                <h4>{subject}{" "}</h4>
                <span className="emailRow__description">{description}</span>
            </div>
            <p className="emailRow__time">{time}</p>
        </div>
    )
}

export { EmailRow }
