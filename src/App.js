import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { UserList } from "./users";
import Dashboard from "./Dashboard.js"
import authProvider from './authProvider';
import { PostCreate, PostEdit, PostList } from "./posts";

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (

  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    {/* 'ReferenceField' in the PostList component creates RecordContext and displays recordRepresentation (children)  */}
    {/* this is how to link/use the foreign key provided in 'referene' prop */}
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>

);


export default App;
