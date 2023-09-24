import { useRouter } from "next/router"
import en_text from "./en.json"
import zh_text from "./zh.json"

export function useI18N()
{
    const { locale } = useRouter()

    let text: typeof en_text;
    switch (locale)
    {
        case "en": text = en_text; break;
        case "zh": text = zh_text; break;
        default: text = en_text; break;
    }

    return ({ locale, text })
}