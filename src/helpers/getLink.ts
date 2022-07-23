export const getLink = (...params: string[]) => ['', ...params].map(encodeURIComponent).join('/');

export const getCategoryLink = (...params: string[]) => getLink('categories', ...params);

export default getLink;
