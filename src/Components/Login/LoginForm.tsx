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

    return (
        <form className={styles.form}
              onSubmit={handleSubmit((data) => {
                  alert(JSON.stringify(data));
              })}
        >
            <label className={styles.labelForInput}>Example</label>
            <input className={styles.input}
                   {...register("Login", {required: true, maxLength: 12})} defaultValue="test"
            />
            {errors.Login && <p>This field is required</p>}
            <label className={styles.labelForInput}>Pass</label>
            <input className={styles.input}
                   {...register("Password", {required: "Field required", maxLength: 10})}
            />
            {errors.Password && <p>This field is required</p>}
            <div><input type="checkbox"/> remember me</div>
            <input className={styles.submitButton} type="submit"/>
        </form>
    );
}

