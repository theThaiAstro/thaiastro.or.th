import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

type Props = {
	alt: string;
	image: IGatsbyImageData;
};

const Image: React.FC<Props> = (props) => <GatsbyImage alt={props.alt} image={props.image} />;

export default Image;
