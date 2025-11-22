import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto" />
        </div>

        <div className="space-y-6 text-gray-700">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <p className="text-center text-yellow-700 pt-4">
            {t('about.p4')}
          </p>
        </div>
      </div>
    </section>
  );
}