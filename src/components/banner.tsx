import Image from "next/image";

interface AuthorBannerProps {
  name: string;
  bio: string;
  imageUrl: string;
}

const AuthorBanner: React.FC<AuthorBannerProps> = ({ name, bio, imageUrl }) => {
  return (
    <div className=" rounded-xl overflow-hidden flex items-center justify-center w-full">
      <div className="md:flex items-center justify-between w-full gap-30">
        <div className="md:w-1/2 text-center pl-56">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {name}
          </h1>

          <p className="text-gray-700 mb-4">{bio}</p>
        </div>

        <div className="md:w-[750px] relative h-[750px]">
          <Image
            layout="fill"
            src={imageUrl}
            alt={`${name}`}
            className="w-full object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorBanner;
