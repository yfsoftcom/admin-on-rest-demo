import { englishMessages } from 'admin-on-rest';
import customEnglishMessages from './en';
import customChineseMessages from './zh';

export default {
    zh: { ...englishMessages, ...customChineseMessages },
    en: { ...englishMessages, ...customEnglishMessages },
};
