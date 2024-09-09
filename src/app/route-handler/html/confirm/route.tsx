import { NextRequest } from "next/server";
// NOTE Next.jsではreact-dom/serverのimportが許可されていない

export async function POST(req: NextRequest) {
	const data = await req.formData();
	const username = data.get("username");
	return new Response(
		`
			<html>
				<head>
					<title>Hello React!</title>
				</head>
				<body>
					<div>Hello ${username}!</div>
				</body>
			</html>,
		`,

		{
			headers: {
				"Content-Type": "text/html",
			},
		},
	);
}
