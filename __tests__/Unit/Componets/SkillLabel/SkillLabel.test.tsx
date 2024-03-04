import SkillLabel from "@/components/SkillLabel";
import { render, screen } from "@testing-library/react";

describe("Skill Label Component", function () {
    it("should render the correct details", function () {
        render(<SkillLabel title="useState" />);

        const skillLabelTitleElement = screen.getByTestId("skill-label-title");
        expect(skillLabelTitleElement).toHaveTextContent("useState");
    });
});
