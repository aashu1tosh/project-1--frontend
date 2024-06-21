import { LanguageEnum } from '@type/global.types';

export const getMultiLanguageMessage = (
    language: LanguageEnum,
    messages: Record<LanguageEnum, string>
) => messages[language] || 'Invalid Input';
