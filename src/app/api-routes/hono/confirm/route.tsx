/** @jsxImportSource hono/jsx */

import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { handle } from "hono/vercel";

const app = new Hono();

const renderer = jsxRenderer(
	({ children }) => {
		return (
			<html>
				<head>
					<title>Hello Hono!</title>
				</head>
				<body>{children as any}</body>
			</html>
		) as any;
	},
	{
		stream: true,
	},
);

app.post("*", renderer);

app.post("*", async (c) => {
	const body = await c.req.parseBody();
	console.log(body);

	return c.html(<div>Hello {body.username}!</div>);
});

export const POST = handle(app);
