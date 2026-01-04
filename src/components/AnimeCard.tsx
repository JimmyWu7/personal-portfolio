import Image from "next/image";

type Props = {
  title: string;
  image: string;
  status?: string;
};

const AnimeCard = ({ title, image, status }: Props) => {
  return (
    <div className="">
      <div className="relative w-full aspect-[2/3]">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="fill"
          className="rounded-xl object-cover shadow-lg duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="text-center">
        <h3
          className={`${
            status
              ? ""
              : "min-h-[2.75rem] md:min-h-[3.25rem] lg:min-h-[3.75rem]"
          } font-rubik font-medium text-sm md:text-base lg:text-lg 2xl:text-xl leading-tight line-clamp-2`}
        >
          {title}
        </h3>
        {status && (
          <p className="font-robotoMono text-xs md:text-sm lg:text-base 2xl:text-lg text-gray-500 dark:text-gray-400">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default AnimeCard;
