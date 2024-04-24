import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup
    .string()
    .min(3, "il nome deve avere minimo 3 caratteri")
    .max(50)
    .required("Error message"),
  email: yup.string().email().required("Campo richiesto"),
  password: yup
    .string()
    .min(8, "la password deve contenere minino 8 caratteri")
    .required("Error message"),
  privacyAccepted: yup
    .bool()
    .oneOf([true], "Per favore accetta le condizioni")
    .required(),
  birthDate: yup.date().required(),
});

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  privacyAccepted: boolean;
  birthDate: Date;
};

export const useSignupForm = () => {
  const formData = useForm<SignupFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      privacyAccepted: false,
      birthDate: new Date(),
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted, errors },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        // data.name;
        console.log("SUCCES", data);
      }),
    [handleSubmit],
  );

  //  console.log({ errors });

  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};
