import cx from 'classnames';
import React from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

import * as styles from './Video.module.scss';

interface Props {
	url: string;
	playerProps?: Omit<ReactPlayerProps, 'url'>;
	aspectRatio?: [string | number, string | number];
}

const Video: React.FC<Props> = ({ aspectRatio, playerProps, url }) => {
	return (
		<div className={cx(styles.VideoContainer, 'VideoContainer')}>
			<svg viewBox={`0 0 ${aspectRatio?.join(' ') ?? '16 9'}`}></svg>
			<ReactPlayer url={url} height="100%" width="100%" {...playerProps} />
		</div>
	);
};

export default Video;
