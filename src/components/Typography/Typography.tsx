import cx from 'classnames';
import React from 'react';

import * as styles from './Typography.module.scss';

type Heading = {
	type: 'heading';
	level: 1 | 2 | 3 | 4 | 5 | 6;
};

type Text = {
	type: 'text';
	useDiv?: boolean;
	variant?: 'extra' | 'subextra';
};

type ReactProps = {
	children: string;
};

type OwnProps = {
	className?: string;
};

type Props = (Heading | Text) & ReactProps & OwnProps;

const Typography: React.FC<Props> = (props) => {
	const { children } = props;

	// prettier-ignore
	switch (props.type) {
		case 'heading': return getHeading(props.level, children);
		case 'text': return getText(children, props.variant, props.useDiv);
		default: return <>{children}</>;
	}

	// prettier-ignore
	function getHeading(level: Heading['level'], children: string) {
		const elementClass = cx(styles.Typography, props.className);

		switch (level) {
			case 1: return <h1 className={elementClass}>{children}</h1>;
			case 2: return <h2 className={elementClass}>{children}</h2>;
			case 3: return <h3 className={elementClass}>{children}</h3>;
			case 4: return <h4 className={elementClass}>{children}</h4>;
			case 5: return <h5 className={elementClass}>{children}</h5>;
			case 6: return <h6 className={elementClass}>{children}</h6>;
		}
	}

	function getText(children: string, variant?: Text['variant'], useDiv?: boolean) {
		const elementClass = cx(styles.Typography, getVariant(variant), props.className);

		if (useDiv) return <div className={elementClass}>{children}</div>;
		else return <span className={elementClass}>{children}</span>;

		function getVariant(variant?: Text['variant']) {
			// prettier-ignore
			switch (variant) {
				case 'extra': return styles.VariantExtra;
				case 'subextra': return styles.VariantSubExtra;
				default: return;
			}
		}
	}
};

export default Typography;
