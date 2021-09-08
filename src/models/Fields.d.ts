import SourceInstanceName from '../constants/SourceInstance';

export interface Fields {
	slug: string;
	sourceInstanceName: keyof typeof SourceInstanceName;
}
