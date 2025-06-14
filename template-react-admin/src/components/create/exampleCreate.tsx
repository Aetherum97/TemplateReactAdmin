/* eslint-disable react-hooks/rules-of-hooks */
import {
  BooleanInput,
  Create,
  DateInput,
  NumberInput,
  ReferenceArrayInput,
  ReferenceInput,
  required,
  SaveButton,
  SaveContextProvider,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  Toolbar,
  useDataProvider,
  useNotify,
  useRedirect,
} from "react-admin";
import Example from "../../interfaces/example";

export const exampleCreate = () => {
  const notify = useNotify();
  const dataProvider = useDataProvider();
  const redirect = useRedirect();

  const handleSave = async (values: Example) => {
    try {
      await dataProvider.create("example", {
        data: { values },
      });
      notify("Example created successfully", { type: "success" });
      redirect("/example");
    } catch (error) {
      console.error("Error creating example:", error);
      notify("Error creating example", { type: "error" });
    }
  };
  return (
    <Create>
      <SaveContextProvider value={{ save: handleSave }}>
        <SimpleForm
          toolbar={
            <Toolbar>
              <SaveButton />
            </Toolbar>
          }
        >
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
          <BooleanInput label="deleted" source="is_deleted" />
          <ReferenceArrayInput
            label="exampleArray"
            source="exampleArray"
            reference="ExampleArrayReference"
          >
            <SelectArrayInput optionText="name" />
          </ReferenceArrayInput>
        </SimpleForm>
      </SaveContextProvider>
    </Create>
  );
};
