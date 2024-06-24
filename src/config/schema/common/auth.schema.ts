import { useLanguage } from '@hooks/useLang';
import { getMultiLanguageMessage } from '@utils/yupSchema.extend.utils';
import * as Yup from 'yup';

export const LoginSchema = () => {
    const { language } = useLanguage();
    const schema = Yup.object({
        email: Yup.string()
            .required(
                getMultiLanguageMessage(language, {
                    en: 'Email/username required',
                    ne: 'इमेल/प्रयोगकर्ता नाम आवश्यक छ',
                })
            )
            .email(
                getMultiLanguageMessage(language, {
                    en: 'Invalid email/username',
                    ne: 'अवैध इमेल/प्रयोगकर्ता नाम',
                })
            ),

        password: Yup.string().required(
            getMultiLanguageMessage(language, {
                en: 'Password is required',
                ne: 'पासवर्ड आवश्यक छ',
            })
        ),
    });
    return schema;
};
