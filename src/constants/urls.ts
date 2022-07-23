export const baseUrl =
	Number(process.env.NEXT_PUBLIC_BASE_PORT) > 0
		? `${process.env.NEXT_PUBLIC_BASE_PROTOCOL}://${process.env.NEXT_PUBLIC_BASE_HOST}:${process.env.NEXT_PUBLIC_BASE_PORT}`
		: `${process.env.NEXT_PUBLIC_BASE_PROTOCOL}://${process.env.NEXT_PUBLIC_BASE_HOST}`;
