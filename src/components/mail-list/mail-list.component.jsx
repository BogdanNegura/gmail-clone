import { IconButton } from '@material-ui/core'
import CheckBox from '@material-ui/core/Checkbox'
import React from 'react'
import "./mail-list.style.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import { Section } from '../section/section.component';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { EmailRow } from '../email-row/email-row.component';

const MailList = () => {
    return (
        <div className="mailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <CheckBox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73EB" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className="emailList__list">
                <EmailRow title="Twich" subject="Hei Salut" description="Test description" time="10pm"/>
                <EmailRow title="Twich" subject="Hei Salut" description="Test description" time="10pm"/>
                <EmailRow title="Twich" subject="Hei Salut" description="Test description" time="10pm"/>
            </div>
        </div>
    )
}

export { MailList } 

