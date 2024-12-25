import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <label htmlFor="language" className="sr-only">
        {t("lang")}
      </label>
      <select
        name="language"
        id="language"
        defaultValue={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="w-[4.5ch] cursor-pointer rounded-md bg-main-purple/5 p-0.5 font-semibold text-main-purple shadow-inner"
      >
        <option value="en">en</option>
        <option value="pt">pt-br</option>
      </select>
    </div>
  );
}
