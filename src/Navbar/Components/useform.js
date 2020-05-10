import { useState } from "react";

//useForm is used to call multiple hooks makeing it cleaner and less confusing to understand 
export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    //return Array
    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }]
};