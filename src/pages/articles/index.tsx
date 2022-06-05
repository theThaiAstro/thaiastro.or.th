import type { NextPage } from 'next';
import cx from 'classnames';

import Image from '@components/Image/Image';
import Markdown from '@components/Markdown/Markdown';
import { ArticleBlock } from '@constants/classNames';
import { mockArticles } from '@data/mockData';
import GlobalLayout from '@layouts/GlobalLayout';

import CoverImage from './coverImage.jpg';

import styles from './index.module.scss';

const Home: NextPage = () => {
	const article = getContent();

	return (
		<GlobalLayout title={article.title}>
			<article className="mx-auto overflow-x-hidden">
				<div
					className={cx(
						'relative h-[72vh]',
						'left-[calc(-50vw_+_50%)] w-screen max-w-[100vw]',
						'md:left-[calc(-54ch_+_50%)] md:w-[108ch] md:max-w-[108ch]'
					)}
				>
					<Image alt={article.title} src={CoverImage} layout="fill" objectFit="cover" unoptimized={true} />
				</div>
				<section className={cx('relative mx-auto box-content max-w-[72ch] bg-white', 'px-4 py-16', 'md:-mt-16 md:px-16')}>
					<h1 className="font-['IBM_Plex_Sans_Thai'] text-4xl font-semibold">{article.title}</h1>
					<Markdown content={article.content} className={cx('pt-4', styles.Article__Content)} />
				</section>
			</article>
		</GlobalLayout>
	);
};

function getContent(): Article {
	return {
		...(mockArticles[0] as unknown as Article),
		title: 'อาร์เอสคนแบกงูปะทุความสว่างจนเห็นได้ด้วยตาเปล่า',
		content: `ผลิตโดย ชัชชาติ สิทธิพันธุ์ อาคาร Mint Tower ห้อง\n\nวันที่ 8 สิงหาคม 2564 เวลา 22:20 น. ตามเวลาสากล หรือเช้ามืดวันที่ 9 สิงหาคม 2564 ตามเวลาประเทศไทย คีท เกียรี นักดาราศาสตร์ในไอร์แลนด์รายงานการค้นพบการปะทุความสว่างของโนวาในกลุ่มดาวคนแบกงู ดาวดวงนี้มีชื่อว่าอาร์เอสคนแบกงู (RS Ophiuchi) ตามระบบการเรียกชื่อดาวแปรแสง ซึ่งเป็นดาวที่มีความสว่างผันแปรตามเวลา อักษรอาร์เอสใช้กับดาวแปรแสง ส่วนคนแบกงูคือกลุ่มดาวที่ดาวแปรแสงดวงนี้ปรากฏอยู่\n\nอาร์เอสคนแบกงูจัดเป็นโนวา (nova) ชนิดหนึ่ง เรียกว่าโนวาสว่างซ้ำ เนื่องจากพบการปะทุความสว่างหลายครั้ง คาดว่าโนวาสว่างซ้ำเกิดในระบบดาวคู่ที่ดาวสองดวงโคจรรอบกันและกัน ดวงหนึ่งเป็นดาวยักษ์แดง อีกดวงหนึ่งเป็นดาวแคระขาว ดาวทั้งสองอยู่ใกล้กันจนแก๊สซึ่งส่วนใหญ่คือไฮโดรเจนของดาวยักษ์แดงถูกแรงโน้มถ่วงของดาวแคระขาวดึงให้ไหลไปวนอยู่รอบ ๆ การปะทุความสว่างเกี่ยวข้องกับกระบวนการสะสมของแก๊สที่ทำให้อุณหภูมิสูงจนจุดปฏิกิริยาเทอร์โมนิวเคลียร์ขึ้นบนพื้นผิวของดาวแคระขาว ระบบดาวคู่จึงมีความสว่างเพิ่มขึ้นจากเดิมหลายเท่า\n\nดาวคู่ในระบบดาวอาร์เอสคนแบกงูอยู่ห่างโลกประมาณ 5,000 ปีแสง โคจรรอบกันด้วยคาบ 454 วัน การปะทุความสว่างแต่ละครั้งทิ้งช่วงห่างกันเฉลี่ยนาน 15 ปี ก่อนหน้านี้นักดาราศาสตร์ได้บันทึกการปะทุความสว่างของโนวาดวงนี้มาแล้วหลายครั้ง (ค.ศ. 1898, 1933, 1958, 1967, 1985 และ 2006) ช่วงแรกความสว่างจะเพิ่มขึ้นอย่างรวดเร็วภายใน 24 ชั่วโมง แล้วค่อย ๆ จางลง\n\nโดยทั่วไป อาร์เอสคนแบกงูสว่างที่โชติมาตร 12.5 ซึ่งไม่สามารถสังเกตได้ด้วยตาเปล่า แต่เมื่อเกิดการปะทุ ความสว่างจะเพิ่มขึ้นไปที่ราวโชติมาตร 5 ซึ่งพอจะเห็นได้ด้วยตาเปล่าในสถานที่ห่างไกลจากใจกลางเมืองใหญ่ หลังจากการค้นพบไม่นาน นักดาราศาสตร์รายงานว่าอุปกรณ์บนกล้องโทรทรรศน์อวกาศแฟร์มี (Fermi Gamma-ray Space Telescope) ได้ตรวจพบการปะทุของแหล่งรังสีแกมมาบนท้องฟ้าบริเวณตำแหน่งของดาวอาร์เอสคนแบกงู\n\n“ตอนนี้ เรามองเห็นหลุมอุกกาบาต มองเห็นก้อนหิน เห็นสภาพภูมิประเทศที่มีความหลากหลายอย่างมากในแต่ละพื้นที่ เป็นทั้งเรื่องน่าประหลาดใจในแง่วิทยาศาสตร์ และเป็นความท้าทายทางวิศวกรรมด้วย” ยุอิชิ ซึดะ ผู้จัดการโครงการของฮะยะบุซะ 2 กล่าว\n\nการสำรวจดาวเคราะห์น้อยครั้งนี้ไม่ใช่ครั้งแรกของแจ็กซา ในปี 2553 แจ็กซาได้ส่งยานฮะยะบุซะไปสำรวจดาวเคราะห์น้อยชื่ออิโตะกะวะมาแล้ว แม้ในครั้งนั้นมีปัญหามากมาย แต่ยานก็ยังนำฝุ่นจากผิวดาวเคราะห์น้อยกลับมายังโลกได้สำเร็จ ในภารกิจของฮะยะบุซะ 2 นี้จะละเอียดกว่าที่ภารกิจของฮะยะบุซะมาก`,
	};
}

export default Home;
