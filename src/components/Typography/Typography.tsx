import React from 'react';

import * as styles from './Typography.module.scss';

type Heading = {
	type: 'heading';
	level: 1 | 2 | 3 | 4 | 5 | 6;
};

type Text = {
	type: 'text';
	level: never;
};

type ReactProps = {
	children: string;
};

type Props = Heading | Text;

const Typography: React.FC<Props & ReactProps> = ({ type, level, children }) => {
	// prettier-ignore
	switch (type) {
		case 'heading': return getHeading(level, children);
		case 'text': return <span>{children}</span>;
		default: return <>{children}</>;
	}

	// prettier-ignore
	function getHeading(level: Heading['level'], children: string) {
		switch (level) {
			case 1: return <h1 className={styles.Typography}>{children}</h1>;
			case 2: return <h2 className={styles.Typography}>{children}</h2>;
			case 3: return <h3 className={styles.Typography}>{children}</h3>;
			case 4: return <h4 className={styles.Typography}>{children}</h4>;
			case 5: return <h5 className={styles.Typography}>{children}</h5>;
			case 6: return <h6 className={styles.Typography}>{children}</h6>;
		}
	}
};

export default Typography;
