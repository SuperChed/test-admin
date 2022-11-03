
import * as React from 'react';
import { Datagrid, EmailField, List, TextField, SimpleList, UrlField } from 'react-admin';
import { useMediaQuery } from '@mui/material';
import MyUrlField from './MyUrlField';

export const UserList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    // MUI BREAKPOINT GUIDE     https://mui.com/material-ui/customization/breakpoints/
    
    return (
        <List>
            {/* using ternary statement to render simple or grid list based on screen size */}
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.username}
                    tertiaryText={record => record.email}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    {/* <UrlField source="website" /> */}
                    {/* USING CUSTOM COMPONENT AS FIELD TYPE */}
                    <MyUrlField source="website" />
                    <TextField source="company.name" />
                </Datagrid>
            )}
        </List>
    );
};


