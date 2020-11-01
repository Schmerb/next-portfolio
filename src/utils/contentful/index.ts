/**
 *
 * CMS data utils
 *
 *  */

export const getName = (content: any) => content.fields.name;
export const getDescription = (content: any) => content.fields.description;
export const getImgUrl = (content: any) => content.fields.image.fields.file.url;
export const getVideoUrl = (content: any) => content.fields.embedUrl;
export const getEntryId = (content: any) => content.sys.id;

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
