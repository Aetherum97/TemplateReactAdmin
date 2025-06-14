import {
  BooleanField,
  DateField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const exampleShow = () => (
  <Show>
    <SimpleShowLayout>
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
    </SimpleShowLayout>
  </Show>
);
