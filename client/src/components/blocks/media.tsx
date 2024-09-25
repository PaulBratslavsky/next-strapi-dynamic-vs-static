import { StrapiImage } from "@/lib/strapi-image";

interface MediaFile {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
  name: string;
  width: number;
  height: number;
}

interface SharedMedia {
  __component: "shared.media";
  id: number;
  file: MediaFile;
}

export function Media({ file }: Readonly<SharedMedia>) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <StrapiImage
        src={file.url}
        alt={file.alternativeText}
        width={file.width}
        height={file.height}
        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
