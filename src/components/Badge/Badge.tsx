import cx from 'classnames';
import React from 'react';

import * as styles from './Badge.module.scss';

type Props = {
	className?: string;
	text: string;
};

const Badge: React.FC<Props> = ({ className, text }) => <div className={cx(styles.Badge, className)}>{text}</div>;

export default Badge;
