import Image from "next/image";

type IconProps = {
    iconUrl: string;
    alt: string;
    width: number;
    height: number;
};

export default function Icon({ iconUrl, alt, width, height }: IconProps) {
    return (
        <div className="flex items-center justify-center">
            <Image src={iconUrl} alt={alt} width={width} height={height} />
        </div>
    );
}
