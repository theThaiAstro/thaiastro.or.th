export function formatDate(date: string, type?: 'short' | 'long') {
	return new Date(date).toLocaleDateString('th-TH', {
		day: 'numeric',
		month: type ?? 'long',
		year: 'numeric',
	});
}
