'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CertificateCardProps {
  certKey: string;
  t: (key: string) => string;
  imagePreview: string;
  imageFull?: string;
}

export default function CertificateCard({
  certKey,
  t,
  imagePreview,
  imageFull
}: CertificateCardProps) {
  const [open, setOpen] = useState(false);

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer border border-gray-200 shadow-md rounded-md p-4 flex flex-col h-60 gap-4 bg-white hover:shadow-lg transition duration-300 justify-center items-center"
      >
        <div className="w-full sm:w-32 h-24 relative">
          <Image
            src={imagePreview}
            alt={`Certificado de ${t(`education.${certKey}.institutionName`)}`}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <div className="flex-1 w-full text-center">
          <h3 className="text-purple-600 font-semibold text-lg mb-1">
            {t(`education.${certKey}.certificationName`)}
          </h3>
          <p className="text-sm text-gray-500">
            <span className="font-medium">
              {t(`education.${certKey}.institutionName`)}
            </span>{' '}
            · {formatDate(t(`education.${certKey}.gotDate`))}
          </p>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-md shadow-lg max-w-4xl w-full p-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
            >
              Cerrar
            </button>
            <div className="w-full h-[70vh] relative">
              <Image
                src={imageFull || imagePreview}
                alt={`Certificado de ${t(`education.${certKey}.institutionName`)}`}
                fill
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
