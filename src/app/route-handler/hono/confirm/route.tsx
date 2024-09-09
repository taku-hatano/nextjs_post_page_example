/** @jsxImportSource hono/jsx */

import { Hono } from "hono";
import { Suspense } from "hono/jsx";
import { jsxRenderer } from "hono/jsx-renderer";
import { renderToReadableStream } from "hono/jsx/streaming";
import { handle } from "hono/vercel";

const app = new Hono();

// NOTE なぜか機能しない?
// const renderer = jsxRenderer(
// 	({ children }) => {
// 		console.log("Rendering");
// 		return (
// 			<html>
// 				<head>
// 					<title>Hello Hono!</title>
// 				</head>
// 				<body>{children}</body>
// 			</html>
// 		);
// 	},
// 	{
// 		stream: true,
// 	},
// );
//
// app.post("*", renderer);

app.post("*", async (c) => {
	const body = await c.req.parseBody();

	const stream = renderToReadableStream(
		<html>
			<head>
				<title>Hello Hono!</title>
			</head>
			<body>
				<div>
					Hello {body.username}!
					<Suspense fallback={<div>Loading...</div>}>
						<FetchComponent />
					</Suspense>
				</div>
			</body>
		</html>,
	);

	return c.body(stream, {
		headers: {
			"Content-Type": "text/html; charset=UTF-8",
			"Transfer-Encoding": "chunked",
		},
	});
});

async function FetchComponent() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return <div>Fetched!</div>;
}

export const POST = handle(app);
