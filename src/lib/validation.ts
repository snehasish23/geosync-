import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().regex(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/, "Invalid phone number").optional().or(z.literal("")),
  org: z.string().max(200, "Organization name is too long").optional().or(z.literal("")),
  message: z.string().min(5, "Message must be at least 5 characters").max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;


