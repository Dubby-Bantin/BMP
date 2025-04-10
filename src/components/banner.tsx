import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface AuthorBannerProps {
  name: string;
  bio: string;
  imageUrl: string;
}

const AuthorBanner: React.FC<AuthorBannerProps> = ({ name, bio, imageUrl }) => {
  return (
    <div className="relative rounded-xl overflow-hidden flex items-center justify-center w-full">
      <div className="md:flex items-center justify-between w-full gap-55 md:px-0 px-5">
        <div className="md:w-1/2 text-center md:pl-20">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
            {name}
          </h1>

          <p className="text-gray-700 mb-4 md:text-xl">{bio}</p>
        </div>

        <div className="md:w-[750px] relative md:h-[750px] h-[500px]">
          <Image
            layout="fill"
            src={imageUrl}
            alt={`${name}`}
            className="w-full object-cover shadow-md"
          />
        </div>
      </div>
      <div className="shadow-md absolute rounded-md h-[18rem] w-[18rem] bg-white right-[34rem] top flex flex-col items-center justify-between p-5">
        <h1 className="text-[#1da0f1] font-bold text-2xl">
          Be the first to know!{" "}
        </h1>
        <p className="">
          Get notified when{" "}
          <span className="italic font-bold">MONEY DISORDER</span> and other
          book updates are live. Join the waitlist{" "}
        </p>
        <Button className="bg-black text-white" asChild variant={"outline"}>
          <Link href={"#contact"}>Join the waitlist!</Link>
        </Button>
      </div>
    </div>
  );
};

export default AuthorBanner;
