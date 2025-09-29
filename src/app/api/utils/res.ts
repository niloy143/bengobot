import { NextResponse } from "next/server";

export function res(data: object, status: number = 200) {
	return NextResponse.json(data, { status });
}

res.success = function (data: object, status: 200 | 204 = 200) {
	return res({ success: true, data }, status);
};

res.error = function (message: string, status: number = 500) {
	return res({ success: false, message }, status);
};

res.badRequest = function (message: string) {
	return res.error(message, 400);
};

res.unauthorized = function (message: string) {
	return res.error(message, 401);
};

res.forbidden = function (message: string) {
	return res.error(message, 403);
};

res.notFound = function (message: string) {
	return res.error(message, 404);
};

res.serverError = function (message: string) {
	return res.error(message, 500);
};

res.serviceUnavailable = function (message: string) {
	return res.error(message, 503);
};
