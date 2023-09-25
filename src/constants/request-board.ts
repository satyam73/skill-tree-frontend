const REQUEST_BOARD_TABLE_CATEGORIES = {
    NAME: "Name",
    SKILL: "Skill",
    VOTES: "Votes",
};

const BUTTON_VARIANTS = {
    DEFAULT: "default",
    TEXT: "text",
    OUTLINED: "outlined",
    PRIMARY: "primary",
    SECONDARY: "secondary",
};

const INPUT_VARIANTS = {
    OUTLINED: "outlined",
    FILLED: "filled",
};

const ROUNDNESS_VARIANTS = {
    PILL: "pill",
    SQUARE: "square",
    MEDIUM: "medium",
};

const COLOR_SCHEMES = {
    GREEN: "green",
    BLUE: "blue",
    YELLOW: "yellow",
};

type SkillLabelColor = "green" | "yellow" | "blue";

const SKILL_LABEL_COLOR_MAPPING: SkillLabelColor[] = ["green", "blue", "blue", "yellow", "green", "blue"];

export {
    REQUEST_BOARD_TABLE_CATEGORIES,
    COLOR_SCHEMES,
    ROUNDNESS_VARIANTS,
    BUTTON_VARIANTS,
    INPUT_VARIANTS,
    SKILL_LABEL_COLOR_MAPPING,
};
