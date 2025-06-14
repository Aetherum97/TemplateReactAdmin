import {
  DateInput,
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const exampleEdit = () => (
  <Edit title="Edit Example">
    <SimpleForm>
      <TextInput
        source="exampleName"
        label="Example Name"
        validate={required()}
      />
      <NumberInput
        source="exampleNumber"
        label="Example Number"
        validate={required()}
      />
      <DateInput
        source="exampleDate"
        label="Example Date"
        validate={required()}
      />
      <ReferenceInput
        source="exampleReferenceId"
        reference="exampleReferences"
        label="Example Reference"
      />
    </SimpleForm>
  </Edit>
);
