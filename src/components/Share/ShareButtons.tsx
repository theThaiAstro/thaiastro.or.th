import { faFacebookF, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import React from 'react';

import './ShareButtons.scss';

type Props = {
	className?: string;
	title: string;
	text: string;
	url: string;
};

const ShareButtons: React.FC<Props> = (props) => {
	const Icon = ({ social, icon, onClick }: { social: string; icon: IconDefinition; onClick: () => void }) => (
		<div className={cx('ShareButton', social)} onClick={onClick}>
			<FontAwesomeIcon icon={icon} />
		</div>
	);

	const sharingText = props.text ?? 'สมาคมดาราศาสตร์ไทย';
	const sharingUrl = encodeURIComponent(props.url ?? 'https://thaiastro.nectec.or.th');

	const onShareClick = (url: string) =>
		window.open(url.replaceAll('NEW_LINE', '%0a'), '_blank', 'width=800,height=600');

	const facebookUrl = `https://facebook.com/sharer.php?u=${sharingUrl}`;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${sharingText}NEW_LINENEW_LINE${sharingUrl}`;

	const Icons = [
		<Icon social="Facebook" icon={faFacebookF} key="Facebook" onClick={() => onShareClick(facebookUrl)} />,
		// <Icon social="Messenger" icon={faFacebookMessenger} key="Messenger" onClick={() => onShareClick()} />,
		<Icon social="Twitter" icon={faTwitter} key="Twitter" onClick={() => onShareClick(twitterUrl)} />,
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
		const { title, text, url } = props;
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
