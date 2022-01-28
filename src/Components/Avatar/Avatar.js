import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import React from 'react'

export const AvatarLogo = ({nickname = ""}) =>{

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        const nameArr = name.split("")

        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: name.length > 0 && `${nameArr[0].toUpperCase()}${nameArr[name.length-1].toUpperCase()}`,
        };
    }

    return(
        <Avatar {...stringAvatar(nickname)} />
    )

}