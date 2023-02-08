import React from "react";
import {useForm} from "react-hook-form";
import styles from "./login.module.css";

export function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({
        defaultValues: {
            Login: "",
            Password: ""
        }
    });

    console.log(watch("Password")); // you can watch individual input by pass the name of the input
    const passOptions =
        {
            required: "Field required",
            maxLength: {
                value: 16,
                message: 'max 16 symbols'
            },
            minLength: {
                value: 8,
                message: 'min 6 symbols'
            }
        }

    return (
        <form className={styles.form}
              onSubmit={handleSubmit((data) => {
                  alert(JSON.stringify(data));
              })}
        >
            <label className={styles.labelForInput}>Login
                <input className={styles.input}
                       {...register("Login", {required: true, minLength: 3, maxLength: 12})} defaultValue="test"
                />
            </label>
            {errors.Login && <p>This field is required</p>}
            <label className={styles.labelForInput}>Password
                <input className={styles.input}
                       {...register("Password", passOptions)}
                />
            </label>
            <div>{errors.Password && <p>{errors?.Password?.message ||
                'Error'}</p>}</div>
            <div><input type="checkbox"/> remember me</div>
            <input className={styles.submitButton} type="submit"/>
        </form>
    );
}

