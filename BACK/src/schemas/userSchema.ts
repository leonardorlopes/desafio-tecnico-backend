import * as yup from 'yup';

export interface UserSchema {
    userName: string;
    password: string;
}

const userSchema: yup.SchemaOf<UserSchema> = yup.object().shape({
    userName: yup
        .string()
        .required({ message: 'Username is required.' }),
    password: yup
        .string()
        .min(8, { message: 'Password must contain 8 characters or more.' })
        .required({ message: 'Password is required.' }),
});

export default userSchema;