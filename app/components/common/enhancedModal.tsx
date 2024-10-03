import React from "react";
import Image from "next/image";

interface EnhancedModalProps {
  onClose: () => void;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

const EnhancedModal: React.FC<EnhancedModalProps> = ({
  onClose,
  title,
  description,
  date,
  image,
  link,
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Eğer modalın iç kısmı tıklanmadıysa modalı kapat
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-[400] flex items-center justify-center backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-screen lg:w-3/4 xl:w-2/3 h-[80vh] relative overflow-auto">
        <button
          className="absolute top-3 right-5 text-logoRed hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          &#10005; {/* X işareti */}
        </button>
        <div className="flex flex-col lg:flex-row h-full">
          {/* Resim Alanı */}
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={image}
              alt="news-modal-image"
              layout="responsive" // responsive yapıda boyutları ayarlamak için
              width={700} // Orijinal genişlik değerini belirt
              height={400} // Orijinal yükseklik değerini belirt, bu oran korunacak
              objectFit="contain" // Resmin orijinal oranını koruyacak
              className="rounded-t-lg lg:rounded-none lg:rounded-l-lg"
            />
            {/* Tarih Alanı */}
            <p className="absolute left-4 text-gray-500 text-sm">{date}</p>
          </div>

          {/* İçerik Alanı */}
          <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
              <p className="mt-6 text-gray-800">{description}</p>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-white py-2 px-3 rounded-md w-auto bg-logoRed hover:shadow-md hover:scale-105 transition-transform text-center"
            >
              Haberin Kaynağına Git
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedModal;
