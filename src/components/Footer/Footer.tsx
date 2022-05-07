import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsSa } from '@fortawesome/free-brands-svg-icons';

import Markdown from '@components/Markdown/Markdown';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

	return <footer>
        <div id="licence" className="text-slate-400 font-text mt-12 tracking-tight">
					<div className="mt-2 flex">
						<FontAwesomeIcon icon={faCreativeCommons} className="h-6 mr-2" />
						<FontAwesomeIcon icon={faCreativeCommonsBy} className="h-6 mr-2" />
						<FontAwesomeIcon icon={faCreativeCommonsSa} className="h-6 mr-2" />
					</div>
					<div className="mt-2">
						<Markdown content={`©&nbsp;${currentYear} Thammarith Likittheerameth`} />
						<Markdown content={`Licensed under the [Creative Commons Attribution-ShareAlike 4.0 International Licence](https://example.com)`} />
					</div>
				</div>
    </footer>;
};

export default Footer;
