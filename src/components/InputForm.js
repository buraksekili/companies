import React, { useState } from "react";
import { Form, FormField, Box, Button, TextInput } from "grommet";

const InputForm = ({ fetchCompanies }) => {
  const [value, setValue] = useState({});
  return (
    <Form
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      onReset={() => setValue({})}
      onSubmit={({ value }) =>
        fetchCompanies(1, false, value.language, value.location)
      }
    >
      <FormField
        margin={0}
        name="language"
        htmlFor="text-input-language"
        label="Language"
        required
      >
        <TextInput
          plain={false}
          padding="xsmall"
          id="text-input-language"
          name="language"
        />
      </FormField>
      <FormField
        margin={{ top: "medium", horizontal: "0" }}
        name="location"
        htmlFor="text-input-location"
        label="Location"
      >
        <TextInput id="text-input-location" plain={false} name="location" />
      </FormField>
      <Box direction="row" justify="center" margin={{ vertical: "small" }}>
        <Button type="submit" primary label="Search" />
      </Box>
    </Form>
  );
};

export default InputForm;
