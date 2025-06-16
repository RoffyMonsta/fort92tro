import React, { forwardRef, useState } from "react";
import { useForm, Controller, SubmitHandler, set } from "react-hook-form";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import { InputMask, InputMaskProps } from "@react-input/mask";
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from "react-google-recaptcha";
import { CAPTCHA_TOKEN } from "../../shared/constants";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useToast } from "../../hooks/useToast";
import { Severity } from "../../components/Toast";
import { handleForm, IHandleRecruitmentForm } from "../../app/api";
interface RecruitmentFormData {
  firstLastName: string;
  phone: string;
  birthDate?: Date;
  socialMedia?: string;
  desiredPosition?: string;
  additionalInfo?: string;
  captcha?: string | null;
}

const positions = [
  "Кулеметник",
  "Стрілець",
  "Розвідник",
  "Оператор БПЛА (розвідка)",
  "Оператор БПЛА (ударного типу)",
  "Бойовий медик",
  "Військовий водій",
  "Сапер",
];

const ForwardedInputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  (props, ref) => (
    <InputMask
      ref={ref}
      showMask
      mask="+38 (0__) ___-__-__"
      replacement={{ _: /\d/ }}
      {...props}
    />
  )
);

export const RecruitmentForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RecruitmentFormData>({});

  const [calendarOpen, setCalendarOpen] = useState(false);
  const toast = useToast();

  const handleTrimmedSubmit: SubmitHandler<RecruitmentFormData> = (data) => {
    const trimmed = {
      ...data,
      firstLastName: data.firstLastName.trim(),
      phone: data.phone.trim(),
      socialMedia: data.socialMedia?.trim(),
      desiredPosition: data.desiredPosition?.trim(),
      additionalInfo: data.additionalInfo?.trim(),
    };
    Object.entries(trimmed).forEach(([key, value]) => {
      if (typeof value === "string" || value === null) {
        setValue(key as any, value, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    });
    onSubmit(trimmed);
  };

  const onSubmit: SubmitHandler<RecruitmentFormData> = async (
    data: RecruitmentFormData
  ) => {
    if (!data.firstLastName || !data.phone) {
      toast({
        message: "Будь ласка, заповніть обов'язкові поля",
        severity: Severity.ERROR,
      });
      return;
    }
    if (!data.captcha) {
      toast({
        message: "Підтвердіть, будь ласка, reCAPTCHA",
        severity: Severity.ERROR,
      });
      return;
    }

    console.log("Submitted data:", data);
    const input: IHandleRecruitmentForm = {
      firstLastName: data.firstLastName,
      phone: data.phone,
      birthDate: data.birthDate,
      socialMedia: data.socialMedia,
      desiredPosition: data.desiredPosition,
      additionalInfo: data.additionalInfo,
      captcha: data.captcha,
    };
    const result = await handleForm(input);
    if (result === "success") {
      toast({
        message: "Заявка успішно надіслана!",
        severity: Severity.SUCCESS,
      });
      // Reset form or redirect user
      reset();
      // Reset form or redirect user
    } else {
      toast({
        message: "Сталася помилка при надсиланні заявки. Спробуйте ще раз.",
        severity: Severity.ERROR,
      });
    }

    // add submit logic later
  };

  const sharedSx = {
    "& .MuiInputBase-input": { color: "#B9C686", fontSize: "20px" },
    "& .MuiInputLabel-root": { color: "#B9C686", fontSize: "20px" },
    "& .MuiInput-underline:before": { borderBottomColor: "#555" },
    "& .MuiFormHelperText-root": { color: "#B9C686" },
    ".MuiSelect-icon": {
      color: "#B9C686",
    },
    ".MuiSvgIcon-root": {
      color: "#B9C686",
    },
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleTrimmedSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}
    >
      <TextField
        label="Прізвище та ім’я*"
        variant="standard"
        fullWidth
        {...register("firstLastName", { required: "Обов’язкове поле" })}
        error={!!errors.firstLastName}
        helperText={errors.firstLastName?.message}
        sx={sharedSx}
      />

      <Controller
        name="phone"
        control={control}
        rules={{ required: "Обов’язково" }}
        render={({ field }) => (
          <TextField
            label="Номер телефону*"
            variant="standard"
            fullWidth
            error={!!errors.phone}
            helperText={errors.phone?.message}
            slotProps={{
              input: {
                inputComponent: ForwardedInputMask as any,
              },
            }}
            {...field}
            sx={sharedSx}
          />
        )}
      />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name="birthDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              open={calendarOpen}
              onClose={() => setCalendarOpen(false)}
              enableAccessibleFieldDOMStructure={false}
              {...field}
              format="dd/MM/yyyy"
              sx={sharedSx}
              label="Дата народження"
              slots={{
                textField: (params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    fullWidth
                    sx={sharedSx}
                    onClick={() => setCalendarOpen(true)}
                  />
                ),
              }}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
      </LocalizationProvider>

      <TextField
        label="Посилання на соцмережі"
        variant="standard"
        fullWidth
        {...register("socialMedia")}
        sx={sharedSx}
      />

      <Controller
        name="desiredPosition"
        control={control}
        render={({ field }) => (
          <TextField
            select
            label="Бажана посада"
            variant="standard"
            fullWidth
            sx={sharedSx}
            {...field}
          >
            <MenuItem value="">
              <em>–</em>
            </MenuItem>
            {positions.map((pos) => (
              <MenuItem key={pos} value={pos}>
                {pos}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <TextField
        label="Додаткова інформація"
        variant="standard"
        fullWidth
        multiline
        rows={4}
        {...register("additionalInfo")}
        sx={sharedSx}
      />

      <ReCAPTCHA
        sitekey={CAPTCHA_TOKEN}
        onChange={(value) => setValue("captcha", value)}
      />
      {errors.captcha && (
        <Typography color="error">Ви повинні пройти перевірку</Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#B9C686",
          color: "#1D1D1D",
          alignSelf: "flex-start",
          mt: 2,
          width: "260px",
          p: "20px 22px",
          "&:hover": { backgroundColor: "#A0AB55" },
        }}
      >
        Відправити
      </Button>
    </Box>
  );
};
