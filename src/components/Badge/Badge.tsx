import cx from 'classnames';
import React from 'react';

import * as styles from './Badge.module.scss';

type Props = {
	className?: string;
	text?: string;
};

const Badge: React.FC<Props> = ({ className, text }) =>
	text ? <div className={cx(styles.Badge, className)}>{text}</div> : null;

export default Badge;
