const DESIRED_LENGTH = 120;
const trimSentence = (text: string = '', withEllipsis?: boolean, length: number = DESIRED_LENGTH) =>
	text.split(' ').reduce((p, c) => (p.length >= length ? p : [p, c].join(' ')), '') + (withEllipsis && text.length > length ? '…' : '');

export default trimSentence;
