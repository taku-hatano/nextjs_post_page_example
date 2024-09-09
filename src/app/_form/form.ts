import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, formSchema } from "./formSchema";

export function useInputForm() {
	return useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		mode: "onBlur",
	});
}
