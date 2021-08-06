export function formatDate(date: string, type?: 'short' | 'long') {
	return new Date(date).toLocaleDateString(undefined, {
		day: 'numeric',
		month: type ?? 'long',
		year: 'numeric',
	});
}
