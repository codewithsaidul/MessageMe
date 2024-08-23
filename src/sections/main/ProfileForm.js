import React, { useCallback } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import {
  Alert,
  Button,
//   IconButton,
//   InputAdornment,
//   Link,
  Stack,
} from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { faker } from "@faker-js/faker";


const ProfileForm = () => {


  const ProfileSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is Required"),
    about: Yup.string().required("About is Required"),
    avatarUrl: Yup.string().required("Profile Image is Required").nullable(true)
  });

  const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    setError,
    handleSubmit,
     formState: { errors, /*isSubmitting, isSubmitSuccessful */ },
  } = methods;


  const values = watch();

  const handleDrop = useCallback((acceptedFiels) => {
    const file = acceptedFiels[0];

    const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file)
    })

    if(file) {
        setValue("avatarURL", newFile, {shouldValidate: true})
    }

  }, [setValue])

  const onSubmit = async (data) => {
    try {
      // submit data to backend
      console.log("data")
    } catch (error) {
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
          <Stack spacing={3}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}
            <RHFTextField name="name" label="Name" helperText={"This name is visible to your contacts"} />
    
            <RHFTextField multiline rows={3}  maxRows={5} name="about" label="About" />
    
          </Stack>
    
    
          <Stack direction="row" justifyContent="end">
            <Button color="primary" size="large" type="submit" variant="outlined">Save</Button>
          </Stack>
      </Stack>



    </FormProvider>
  );
};

export default ProfileForm;
