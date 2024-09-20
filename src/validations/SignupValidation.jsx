import { z } from "zod";

export const signupValidationSchema = z.object({
    username: z.string().min(6, {message: 'Username must be 6-15 characters long!'}).max(15, {message: 'Username cannot exceed 15 characters!'}),
    email: z.string().min(10, {message: 'Email must be 10-25 characters long!'}).max(25, {message: 'Email cannot exceed 25 characters!'}),
    phone: z.string().min(10, {message: 'Number incomplete.'}).max(12, {message: 'Invalid Phone Number: must be 11 characters long'}),
    password: z.string().min(8, {message: 'Password must be 6-15 characters long!'}).max(15, {message: 'Password cannot exceed 15 characters!'}),
});