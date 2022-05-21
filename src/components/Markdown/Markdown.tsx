import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
	content: string;
	className?: string;
};

const Markdown: React.FC<Props> = ({ className, content }: Props) => <ReactMarkdown className={className} remarkPlugins={[]}>{content}</ReactMarkdown>;

export default Markdown;
