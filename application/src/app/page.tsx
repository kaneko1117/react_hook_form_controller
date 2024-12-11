import {
  DefaultForm,
  Form,
  NativeForm,
  TypeSafeDatePickersForm,
  TypeSafeForm,
} from "@/components/Form";

export default function Home() {
  return (
    <>
      <Form />
      <TypeSafeDatePickersForm />
      <NativeForm />
      <TypeSafeForm />
      <DefaultForm />
    </>
  );
}
