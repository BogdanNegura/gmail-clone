import CheckBox from '@material-ui/core/Checkbox'
import React from 'react'
import "./email-row.style.css"
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const EmailRow = ({ id, title, subject, description, time }) => {

    const history = useHistory()

    return (
        <div onClick={() => history.push("/mail")} className="emailRow">
            <div className="emailRow__option">
                <CheckBox/>
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">{title}</h3>

            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">{description}</span>
                </h4>
                
            </div>
            <p className="emailRow__time">{time}</p>
        </div>
    )
}

export { EmailRow }
