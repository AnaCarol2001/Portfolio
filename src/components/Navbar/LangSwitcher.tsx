import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div>
      <label htmlFor="language" className="sr-only"></label>
      <select
        name="language"
        id="language"
        defaultValue={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="w-[4.5ch] cursor-pointer rounded-md border border-black bg-transparent"
      >
        <option value="en">en</option>
        <option value="pt">pt-br</option>
      </select>
    </div>
  );
}
