import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (infoUpdate) {
      reset(infoUpdate);
    } else {
      reset({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: "",
      });
    }
  }, [infoUpdate, reset]);

  const submit = (data) => {
    if (infoUpdate) {
      // Update
      updateUser("/users", infoUpdate.id, data);
      setInfoUpdate();
    } else {
      // Create
      createUser("/users", data);
    }

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div className="form__items">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__value"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          id="email"
        />
        {errors.email && (
          <p className="error__message">{errors.email.message}</p>
        )}
      </div>

      <div className="form__items">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__value"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          type="password"
          id="password"
        />
        {errors.password && (
          <p className="error__message">{errors.password.message}</p>
        )}
      </div>

      <div className="form__items">
        <label className="form__label" htmlFor="first_name">
          First name
        </label>
        <input
          className="form__value"
          {...register("first_name", {
            required: "First name is required",
          })}
          type="text"
          id="first_name"
        />
        {errors.first_name && (
          <p className="error__message">{errors.first_name.message}</p>
        )}
      </div>

      <div className="form__items">
        <label className="form__label" htmlFor="last_name">
          Last name
        </label>
        <input
          className="form__value"
          {...register("last_name", {
            required: "Last name is required",
          })}
          type="text"
          id="last_name"
        />
        {errors.last_name && (
          <p className="error__message">{errors.last_name.message}</p>
        )}
      </div>

      <div className="form__items">
        <label className="form__label" htmlFor="birthday">
          Birthday
        </label>
        <input
          className="form__value"
          {...register("birthday", {
            required: "Birthday is required",
          })}
          type="date"
          id="birthday"
        />
        {errors.birthday && (
          <p className="error__message">{errors.birthday.message}</p>
        )}
      </div>

      <div className="btn__container">
        <button className="form__btn">
          {infoUpdate ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default FormUser;
