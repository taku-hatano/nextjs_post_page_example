// import { NextRequest } from "next/server";
// NOTE Next.jsではreact-dom/serverのimportが許可されていない
// import { renderToString } from "react-dom/server";

// export async function POST(req: NextRequest) {
// 	const body = await req.json();
// 	return new Response(
// 		renderToString(
// 			<html>
// 				<head>
// 					<title>Hello React!</title>
// 				</head>
// 				<body>
// 					<div>Hello {body.username}!</div>
// 				</body>
// 			</html>,
// 		),
//
// 		{
// 			headers: {
// 				"Content-Type": "text/html",
// 			},
// 		},
// 	);
// }
