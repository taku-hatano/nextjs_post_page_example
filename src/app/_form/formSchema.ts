import { z } from "zod";

export const formSchema = z.object({
	username: z.string(),
});

export type FormSchema = z.infer<typeof formSchema>;
