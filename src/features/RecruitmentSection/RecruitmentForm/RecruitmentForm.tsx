import { useForm, Controller } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import DatePicker from "react-datepicker";
import { InputMask } from "@react-input/mask";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";
import { CAPTCHA_TOKEN, REGIONS } from "../../../shared/constants";
import { handleForm, IHandleRecruitmentForm } from "../../../app/api";

type RecruitmentFormData = {
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  birthDate: Date;
  socialMedia?: string;
  region: string;
  desiredPosition?: string;
  isMilitary: boolean;
  agree: boolean;
  captcha: string | null;
};

export default function RecruitmentForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<RecruitmentFormData>({
    defaultValues: {
      birthDate: new Date("2000-01-01"),
      region: "",
    },
  });

  const onSubmit = async (data: RecruitmentFormData) => {
    if (!data.captcha) {
      alert("Підтвердіть reCAPTCHA");
      return;
    }
    console.log("Submitted data:", data);
    const input: IHandleRecruitmentForm = {
      lastName: data.lastName,
      firstName: data.firstName,
      middleName: data.middleName,
      phone: data.phone,
      birthDate: data.birthDate,
      socialMedia: data.socialMedia,
      desiredPosition: data.desiredPosition,
      region: data.region,
      isMilitary: data.isMilitary,
      captcha: data.captcha,
    };
    const result = await handleForm(input);

    if (result === "success") {
      alert("Заявка успішно надіслана!");
      // Reset form or redirect user
    } else {
      alert("Сталася помилка при надсиланні заявки. Спробуйте ще раз.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="recruitment-form">
      <label>
        Прізвище
        <input
          placeholder="Прізвище"
          type="text"
          {...register("lastName", { required: true })}
          className={errors.lastName ? "error" : ""}
        />
      </label>
      <p className="error-msg">{errors.lastName && "Прізвище обов’язкове"}</p>

      <label>
        Ім'я
        <input
          placeholder="Ім'я"
          type="text"
          {...register("firstName", { required: true })}
          className={errors.firstName ? "error" : ""}
        />
      </label>
      <p className="error-msg">{errors.firstName && "Ім’я обов’язкове"}</p>

      <label>
        По-батькові
        <input
          placeholder="По-батькові"
          type="text"
          {...register("middleName", { required: true })}
          className={errors.middleName ? "error" : ""}
        />
      </label>
      <p className="error-msg">
        {errors.middleName && "По батькові обов’язкове"}
      </p>

      <label>
        Номер телефону
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputMask
              {...field}
              mask="+38 (0__) ___-__-__"
              showMask
              replacement={{ _: /\d/ }}
              placeholder="+38 (0__) ___-__-__"
              className={errors.phone ? "error" : ""}
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </label>
      <p className="error-msg">
        {errors.phone && "Номер телефону обов’язковий"}
      </p>

      <label className="datepicker-label">
        Дата народження
        <div className="datepicker-wrapper">
          <Controller
            name="birthDate"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                placeholderText="Дата народження"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                className={`datepicker-input ${
                  errors.birthDate ? "error" : ""
                }`}
                dateFormat="dd.MM.yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            )}
          />
        </div>
      </label>
      <p className="error-msg">
        {errors.birthDate && "Дата народження обов’язкова"}
      </p>

      <label>
        Посилання на соцмережі (опційно)
        <input
          placeholder="Інстаграм, телеграм, WhatsApp..."
          type="text"
          {...register("socialMedia")}
        />
      </label>

      <label>
        Область
        <select
          {...register("region", { required: true })}
          className={errors.region ? "error" : ""}
        >
          <option value="" disabled>
            Виберіть область
          </option>
          {REGIONS.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>
      <p className="error-msg">{errors.region && "Область обов’язкова"}</p>

      <label>
        Бажана посада (опційно)
        <input
          placeholder="Оператор БПЛА, Кулеметник..."
          type="text"
          {...register("desiredPosition")}
        />
      </label>

      <div className="radio-group">
        <label>Чи є військовослужбовцем на даний момент?</label>
        <label className="radio">
          <input
            type="radio"
            value="true"
            {...register("isMilitary", { required: true })}
          />
          Так
        </label>
        <label className="radio">
          <input
            type="radio"
            value="false"
            {...register("isMilitary", { required: true })}
          />
          Ні
        </label>
        <p className="error-msg">{errors.isMilitary && "Оберіть варіант"}</p>
      </div>

      <label className="checkbox">
        <input type="checkbox" {...register("agree", { required: true })} /> Даю
        згоду на обробку моїх персональних даних
      </label>
      <p className="error-msg">{errors.agree && "Ви повинні погодитись"}</p>

      <ReCAPTCHA
        sitekey={CAPTCHA_TOKEN}
        onChange={(value) => setValue("captcha", value)}
      />

      <input type="hidden" {...register("captcha", { required: true })} />
      <p className="error-msg">
        {errors.captcha && "Ви повинні пройти перевірку"}
      </p>
      <button type="submit">ПОДАТИ ЗАЯВКУ</button>
    </form>
  );
}
