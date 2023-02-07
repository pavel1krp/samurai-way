import React from "react";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";

export function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            example: "",
            exampleRequired: ""
        }
    });

    console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        <form className={styles.form}
            onSubmit={handleSubmit((data) => {
                alert(JSON.stringify(data));
            })}
        >
            <label className={styles.labelForInput}>Example</label>
            <input className={styles.input} {...register("example")} defaultValue="test" />
            <label  className={styles.labelForInput}>ExampleRequired</label>
            <input className={styles.input}
                {...register("exampleRequired", { required: true, maxLength: 10 })}
            />
            {errors.exampleRequired && <p>This field is required</p>}
            <input className={styles.submitButton} type="submit" />
        </form >
    );
}

