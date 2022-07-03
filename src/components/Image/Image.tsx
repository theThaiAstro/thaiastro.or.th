import React from 'react';
import Image, { ImageProps } from 'next/image';

import imageLoader from '@helpers/imageLoader';

// eslint-disable-next-line jsx-a11y/alt-text
const ImageComponent: React.FC<ImageProps> = (props: ImageProps) => <Image loader={imageLoader} {...props} />;

export default ImageComponent;
