import { COLOR_SCHEMES } from "@/constants/request-board";

type SkillLabelProps = {
    title: string;
    colorScheme?: string;
};

type SkillLabelStylesProps = {
    colorScheme?: string;
};

export function getSkillLableStyles({ colorScheme }: SkillLabelStylesProps) {
    const baseStyles = "py-1.5 px-5 text-sm rounded-[50px] font-semibold w-max";
    const variants = {
        colorScheme: {
            default: "bg-gray-100 text-black-dark",
            green: "text-[#15803D] bg-[#DCFCE7]",
            blue: "text-[#1D4ED8] bg-[#DBEAFE]",
            yellow: "text-[#A16207] bg-[#FEF9C3]",
        },
    };

    const defaultVarients = {
        colorScheme: variants.colorScheme.default,
    };

    if (colorScheme) {
        if (colorScheme === COLOR_SCHEMES.GREEN) {
            defaultVarients.colorScheme = variants.colorScheme.green;
        } else if (colorScheme === COLOR_SCHEMES.BLUE) {
            defaultVarients.colorScheme = variants.colorScheme.blue;
        } else if (colorScheme === COLOR_SCHEMES.YELLOW) {
            defaultVarients.colorScheme = variants.colorScheme.yellow;
        } else {
            defaultVarients.colorScheme = variants.colorScheme.default;
        }
    }

    return `${baseStyles} ${defaultVarients.colorScheme}`;
}

export default function SkillLabel({ title, colorScheme }: SkillLabelProps) {
    return (
        <div data-testid="skill-label-styles" className={getSkillLableStyles({ colorScheme })}>
            <p data-testid="skill-label-title">{title}</p>
        </div>
    );
}
