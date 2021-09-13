import { faFacebookF, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faLink, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import React from 'react';

import { faLine } from '../../assets/icons/faLine';

import './ShareButtons.scss';

type Props = {
	className?: string;
	text: string;
	url: string;
};

type IconProps = {
	social: string;
	icon: IconDefinition;
	title?: string;
	onClick: () => void;
};

const ShareButtons: React.FC<Props> = (props) => {
	const Icon = ({ social, icon, title, onClick }: IconProps) => (
		<div className={cx('ShareButton', social)} onClick={onClick} title={title}>
			<FontAwesomeIcon icon={icon} />
		</div>
	);

	const sharingUrl = props.url ?? 'https://thaiastro.nectec.or.th';
	const sharingText = props.text ?? 'สมาคมดาราศาสตร์ไทย';
	const encodedText = encodeURIComponent(sharingText);
	const encodedSpace = encodeURIComponent(' ');
	const encodedUrl = encodeURIComponent(sharingUrl);

	const onShareClick = (url: string) => {
		window.open(url.replaceAll('NEW_LINE', '%0a'), '_blank', 'width=800,height=600');
	};

	const onCopy = (url: string) => {
		navigator.clipboard.writeText(url);
	};

	const facebookUrl = `https://facebook.com/sharer.php?u=${encodedUrl}`;
	const lineUrl = `https://line.me/R/msg/text/?${encodedText}${encodedSpace}${encodedUrl}`;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}NEW_LINENEW_LINE${encodedUrl}`;

	const Icons = [
		<Icon
			social="Facebook"
			icon={faFacebookF}
			key="Facebook"
			title="แชร์บทความนี้"
			onClick={() => onShareClick(facebookUrl)}
		/>,
		// <Icon social="Messenger" icon={faFacebookMessenger} key="Messenger" onClick={() => onShareClick()} />,
		<Icon
			social="Twitter"
			icon={faTwitter}
			key="Twitter"
			title="ทวีตบทความนี้"
			onClick={() => onShareClick(twitterUrl)}
		/>,
		<Icon
			social="Line"
			icon={faLine}
			key="Line"
			title="ส่งต่อบทความนี้ทางไลน์"
			onClick={() => onShareClick(lineUrl)}
		/>,
		<Icon social="Link" icon={faLink} key="Link" title="คลิกเพื่อคัดลอกลิงก์" onClick={() => onCopy(sharingUrl)} />,
		// <Icon social="Email" icon={faEnvelope} key="Email" onClick={() => onShareClick()} />,
	];

	return (
		<div className={cx('ShareButtonsContainer', props.className)}>
			<div className="NativeShare" onClick={onNativeShareButtonClick}>
				ส่งต่อ &nbsp;
				<FontAwesomeIcon icon={faShareAlt} />
			</div>
			{Icons}
		</div>
	);

	function onNativeShareButtonClick() {
		const { text, url } = props;
		const title = text;
		const content = { title, text, url };

		// @ts-expect-error
		if (navigator.canShare && navigator.canShare(content)) {
			navigator
				.share(content)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		}
	}
};

export default ShareButtons;
