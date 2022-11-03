
import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    useRecordContext,
} from 'react-admin';


// create search function component via filter array related to input components.
const PostFilters = [
    // first basic search bar always shows. users can add "user" filter with auto-added button next to Create and Export buttons.
    <TextInput source="q" label="Search or add a filter" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = props => (
    <List filters={PostFilters}>
        <Datagrid>
            <TextField source="id" />
            {/* here 'reference' acts like a foreign-key that ra finds via ListGuesser */}
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

// using a custom component to display the post title in double quotes if there is one.
// alternative - use  recordRepresentation="title"  when declaring posts Resource in App.js.
const PostTitle = () => {
    const record = useRecordContext();
    // good idea to use this ternary statement incase user goes straight to edit page and record has not been properly set.
    return <span>Post {record ? `"${record.title}"` : '' }</span>;
}

export const PostEdit = props => (
    <Edit title={<PostTitle />} >
        <SimpleForm>
            <TextInput disabled source="id" />
            {/* ReferenceInput works like ReferenceField and creates an autofill list */}
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* ReferenceInput works like ReferenceField and creates an autofill list */}
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);





