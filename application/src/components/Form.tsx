"use client";
import { Button, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  FormContainer,
  TextFieldElement,
  useForm as muiUseForm,
} from "react-hook-form-mui";
import { DatePickerElement } from "react-hook-form-mui/date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ja } from "date-fns/locale/ja";
import { LocalizationProvider } from "@mui/x-date-pickers";

export const Form = () => {
  const onSubmit = (data: { name: string }) => {
    console.log(data);
  };
  return (
    <FormContainer defaultValues={{ name: "" }} onSuccess={onSubmit}>
      <Stack direction={"column"} width={"300px"} gap={5} margin={5}>
        <TextFieldElement name="name" label="Name" required />
        <Button type={"submit"} variant={"contained"} color={"primary"}>
          Submit
        </Button>
      </Stack>
    </FormContainer>
  );
};

export const TypeSafeForm = () => {
  const { control, handleSubmit } = muiUseForm<{ name: string }>({
    defaultValues: { name: "" },
  });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} noValidate>
      <Stack direction={"column"} width={"300px"} gap={5} margin={5}>
        <TextFieldElement name="name" label="Name" required control={control} />
        <Button type={"submit"} variant={"contained"} color={"primary"}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export const TypeSafeDatePickersForm = () => {
  const { control, handleSubmit } = muiUseForm<{ date: Date }>({
    defaultValues: { date: new Date() },
  });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} noValidate>
      <Stack direction={"column"} width={"300px"} gap={5} margin={5}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
          <DatePickerElement
            name="date"
            label="Date"
            required
            control={control}
          />
        </LocalizationProvider>
        <Button type={"submit"} variant={"contained"} color={"primary"}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export const NativeForm = () => {
  const { register, handleSubmit } = useForm<{ name: string }>({
    defaultValues: { name: "" },
  });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} noValidate>
      <Stack direction={"column"} width={"300px"} gap={5} margin={5}>
        <input {...register("name", { required: "This field is required" })} />
        <Button type={"submit"} variant={"contained"} color={"primary"}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export const DefaultForm = () => {
  const { control, handleSubmit } = useForm<{ name: string }>({
    defaultValues: { name: "" },
  });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} noValidate>
      <Stack direction={"column"} width={"300px"} gap={5} margin={5}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: "This field is required",
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              label="Name"
              error={errors.name ? true : false}
              helperText={errors.name?.message as string}
            />
          )}
        />
        <Button type={"submit"} variant={"contained"} color={"primary"}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};
