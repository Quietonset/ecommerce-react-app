import { z } from "zod";

export const loginValidationSchema = z.object({
    username: z.string().min(6, {message: 'Username must be 6-15 characters long!'}).max(15, {message: 'Username cannot exceed 15 characters!'}),
    password: z.string().min(8, {message: 'Password must be 8-15 characters long!'}).max(15, {message: 'Password cannot exceed 15 characters!'})
});