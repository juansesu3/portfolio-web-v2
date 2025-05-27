
import { useTranslations } from 'next-intl';
import CertificateCard from './CertificatedCard';

export default function EducationSection() {
  const t = useTranslations('profile'); // o 'education' si separaste el namespace
  const certificates = [
    {
      certKey: 'frontend-libraries',
      image: 'https://my-page-negiupp.s3.amazonaws.com/1748254331491.png'
    },
    {
      certKey: 'python',
      image: 'https://my-page-negiupp.s3.amazonaws.com/1748326119492.jpg'
    },
    {
      certKey: 'frontend',
      image: 'https://my-page-negiupp.s3.amazonaws.com/1748328134563.jpg'
    },
    {
      certKey: 'javascript',
      image: 'https://my-page-negiupp.s3.amazonaws.com/1748326679255.png'
    },
    {
      certKey: 'bigdata',
      image: 'https://my-page-negiupp.s3.amazonaws.com/1748326107475.jpg'
    },
    {
      certKey: 'anglais',
      image: 'https://my-page-negiupp.s3.amazonaws.com/1748326385621.jpg'
    },
    {
      certKey: 'python_2',
      image: 'https://my-page-negiupp.s3.amazonaws.com/1748326129571.jpg'
    }
  ];
  
  return (
    <div>
      <h2 className="text-purple-500 font-semibold text-lg mb-4 uppercase">Education</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            certKey={cert.certKey}
            imagePreview={cert.image}
            t={t}
          />
        ))}
      </div>
    </div>
  );
}
