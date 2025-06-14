import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const exampleList = () => (
  <List>
    <Datagrid>
      <TextField source="exampleName" label="Example Name" />
      <NumberField source="exampleNumber" label="Example Number" />
      <DateField source="exampleDate" label="Example Date" />
      <ReferenceField
        source="exampleReferenceId"
        reference="exampleReferences"
        label="Example Reference"
      >
        <TextField source="referenceName" />
      </ReferenceField>
      <BooleanField source="exampleBoolean" label="Example Boolean" />
    </Datagrid>
  </List>
);
