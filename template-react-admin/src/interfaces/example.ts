export default interface Example {
  id?: string; // Optional ID for the example, useful for updates
  exampleName: string; // Name of the example, required field
  exampleNumber: number; // Numeric value associated with the example, required field
  exampleDate: Date; // Date associated with the example, required field
  exampleReferenceId: string; // Reference ID to another entity, required field
  exampleBoolean: boolean; // Boolean flag for the example, required field
}
