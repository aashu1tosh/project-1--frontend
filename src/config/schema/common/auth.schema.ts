import { LanguageEnum } from '@type/global.types';
import { getMultiLanguageMessage } from '@utils/yupSchema.extend.utils';
import * as Yup from 'yup';

export const loginSchema = (lang: LanguageEnum) => {
    const schema = Yup.object({
        email: Yup.string()
            .required(
                getMultiLanguageMessage(lang, {
                    en: 'Email/username required',
                    ne: 'इमेल/प्रयोगकर्ता नाम आवश्यक छ',
                })
            )
            .email(
                getMultiLanguageMessage(lang, {
                    en: 'Invalid email/username',
                    ne: 'अवैध इमेल/प्रयोगकर्ता नाम',
                })
            ),

        password: Yup.string().required(
            getMultiLanguageMessage(lang, {
                en: 'Password is required',
                ne: 'पासवर्ड आवश्यक छ',
            })
        ),
    });
    return schema;
};
