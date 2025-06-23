import { useTranslations } from 'next-intl';
import {
  FaMobileAlt,
  FaLaptop,
  FaPaintBrush,
  FaUserFriends,
  FaDraftingCompass,
  FaEye
} from 'react-icons/fa';

const ICONS = {
  mobile: FaMobileAlt,
  visual: FaPaintBrush,
  prototyping: FaDraftingCompass,
  user: FaUserFriends,
  multi: FaLaptop,
  accessibility: FaEye
};

type IconKey = keyof typeof ICONS;

const FEATURES: Array<{
  icon: IconKey;
  color: string;
  titleKey: string;
  descriptionKey: string;
}> = [
  {
    icon: 'mobile',
    color: 'text-blue-500',
    titleKey: 'list.one.title',
    descriptionKey: 'list.one.description'
  },
  {
    icon: 'visual',
    color: 'text-red-500',
    titleKey: 'list.two.title',
    descriptionKey: 'list.two.description'
  },
  {
    icon: 'prototyping',
    color: 'text-purple-500',
    titleKey: 'list.three.title',
    descriptionKey: 'list.three.description'
  },
  {
    icon: 'user',
    color: 'text-green-500',
    titleKey: 'list.four.title',
    descriptionKey: 'list.four.description'
  },
  {
    icon: 'multi',
    color: 'text-indigo-500',
    titleKey: 'list.five.title',
    descriptionKey: 'list.five.description'
  },
  {
    icon: 'accessibility',
    color: 'text-orange-500',
    titleKey: 'list.six.title',
    descriptionKey: 'list.six.description'
  }
];

const UxUiDesign = () => {
  const t = useTranslations('services.ux-ui');

  return (
    <section className="max-w-7xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-8">
        {t('title')}
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        {t('description')}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map(({ icon, color, titleKey, descriptionKey }, index) => {
          const IconComponent = ICONS[icon];
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <IconComponent className={`${color} text-3xl mr-4`} />
                <h3 className="text-xl font-semibold text-gray-800">
                  {t(titleKey)}
                </h3>
              </div>
              <p className="text-gray-600">{t(descriptionKey)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UxUiDesign;
