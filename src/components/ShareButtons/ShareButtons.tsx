import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faWhatsapp, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faShareNodes, faLink } from '@fortawesome/free-solid-svg-icons';
// import { faLink, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import { SocialColours } from '@components/Pseudo/Pseudo';
import { faLine } from '@assets/icons/faLine';

// import './ShareButtons.scss';

type Props = {
	className?: string;
	text?: string;
	url: string;
};

type IconProps = {
	social: string;
	icon: IconDefinition;
	title?: string;
	onClick: () => void;
};

const ShareButtons: React.FC<Props> = props => {
	const basicShareIconClass = cx('inline-flex items-center justify-center', 'h-10', 'hover:cursor-pointer');

	const Icon = ({ social, icon, title, onClick }: IconProps) => (
		<div className={cx(basicShareIconClass, 'w-10', `text-brand-${social} hover:text-white hover:bg-brand-${social}`)} onClick={onClick} title={title}>
			<FontAwesomeIcon icon={icon} className="h-4" />
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
	const whatsAppUrl = `https://api.whatsapp.com/send/?phone&text=${encodedText}${encodedSpace}${encodedUrl}`;

	const Icons = [
		<Icon social="Facebook" icon={faFacebookF} key="Facebook" title="แชร์บทความนี้" onClick={() => onShareClick(facebookUrl)} />,
		// <Icon social="Messenger" icon={faFacebookMessenger} key="Messenger" onClick={() => onShareClick()} />,
		<Icon social="Twitter" icon={faTwitter} key="Twitter" title="ทวีตบทความนี้" onClick={() => onShareClick(twitterUrl)} />,
		<Icon social="Line" icon={faLine} key="Line" title="ส่งต่อบทความนี้ทางไลน์" onClick={() => onShareClick(lineUrl)} />,
		<Icon social="WhatsApp" icon={faWhatsapp} key="WhatsApp" title="ส่งต่อบทความนี้ทาง WhatsApp" onClick={() => onShareClick(whatsAppUrl)} />,
		<Icon social="Link" icon={faLink} key="Link" title="คลิกเพื่อคัดลอกลิงก์" onClick={() => onCopy(sharingUrl)} />,
		// <Icon social="Email" icon={faEnvelope} key="Email" onClick={() => onShareClick()} />,
	];

	return (
		<div className={cx('flex items-center', props.className)}>
			<SocialColours />
			<div
				className={cx(basicShareIconClass, 'font-display font-medium', 'mr-4 px-4', 'bg-blue-500 text-white', 'hover:bg-blue-700')}
				onClick={onNativeShareButtonClick}
			>
				ส่งต่อ &nbsp;
				<FontAwesomeIcon icon={faShareNodes} className="h-4" />
			</div>
			{Icons}
		</div>
	);

	function onNativeShareButtonClick() {
		const { text, url } = props;
		const title = text;
		const content = { title, text, url };

		if (navigator.canShare && navigator.canShare(content)) {
			navigator
				.share(content)
				.then(() => {})
				.catch(err => console.log(err));
		}
	}
};

export default ShareButtons;
