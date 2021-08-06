import React from 'react';

import * as styles from './Badge.module.scss';

type Props = {
	text: string;
};

const Badge: React.FC<Props> = ({ text }) => <div className={styles.Badge}>{text}</div>;

export default Badge;
