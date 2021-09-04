import SourceInstanceName from '../constants/SourceInstance';

export function getWordForSourceInstanceName(sourceInstanceName: keyof typeof SourceInstanceName | string) {
	// prettier-ignore
	switch (sourceInstanceName) {
		case SourceInstanceName.ARTICLES: return 'บทความ';
		case SourceInstanceName.IMAGES: return 'รูปภาพ';
		case SourceInstanceName.NEWS: return 'ข่าว';
	}
}
