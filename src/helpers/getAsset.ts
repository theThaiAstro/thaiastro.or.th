import { baseUrl } from '@constants/urls';

const getAsset = (id?: string) => (id ? `${baseUrl}/assets/${id}` : 'https://placekitten.com/g/1000/1000');

export default getAsset;
