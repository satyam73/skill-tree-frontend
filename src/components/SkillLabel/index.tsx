type SkillLabelProps = {
    title: string;
    colorScheme?: string;
};

type SkillLabelStylesProps = {
    colorScheme?: string;
};

export function getSkillLableStyles({ colorScheme = "default" }: SkillLabelStylesProps) {
    const baseStyles = "py-1.5 px-5 text-sm rounded-[50px] font-semibold w-max";
    const variants = {
        colorScheme: {
            default: "bg-gray-100 text-black-dark",
            green: "text-[#15803D] bg-[#DCFCE7]",
            blue: "text-[#1D4ED8] bg-[#DBEAFE]",
            yellow: "text-[#A16207] bg-[#FEF9C3]",
        },
    };

    const colorSchemeClass =
        variants.colorScheme[colorScheme as keyof typeof variants.colorScheme] || variants.colorScheme.default;

    return `${baseStyles} ${colorSchemeClass}`;
}

export default function SkillLabel({ title, colorScheme }: SkillLabelProps) {
    return (
        <div data-testid="skill-label-styles" className={getSkillLableStyles({ colorScheme })}>
            <p data-testid="skill-label-title">{title}</p>
        </div>
    );
}
