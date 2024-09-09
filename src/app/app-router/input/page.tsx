"use client";

import { Form } from "@/components/ui/form";
import { useInputForm } from "../../_form/form";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/Input";

export default function InputPage() {
	const form = useInputForm();
	return (
		<Form {...form}>
			<form method="post" action="confirm" className="space-y-8">
				<InputField
					label="ユーザー名"
					form={form}
					name="username"
					description="ユーザー名を入力してください"
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
