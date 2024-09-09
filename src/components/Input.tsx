import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export function InputField<T extends FieldValues>(props: {
	form: UseFormReturn<T>;
	name: Path<T>;
	label: string;
	description?: string;
}) {
	return (
		<FormField
			control={props.form.control}
			name={props.name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{props.label}</FormLabel>
					<FormControl>
						<Input {...field} />
					</FormControl>
					{props.description && (
						<FormDescription>{props.description}</FormDescription>
					)}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
