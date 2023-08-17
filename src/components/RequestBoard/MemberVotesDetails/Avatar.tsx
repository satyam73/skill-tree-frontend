import Image from "next/image";
import { DUMMY_AVATAR } from "@/constants/images";

type AvatarProps = {
    url: string;
    alt: string;
    width: number;
    height: number;
};

export default function Avatar({ url, alt, width, height }: AvatarProps) {
    return (
        <div className="rounded-full mr-[-0.5rem]">
            <Image src={url || DUMMY_AVATAR} alt={alt} width={width} height={height} />
        </div>
    );
}
