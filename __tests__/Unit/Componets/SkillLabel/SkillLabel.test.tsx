import SkillLabel from "@/components/SkillLabel/SkillLabel";
import { render, screen } from "@testing-library/react";

describe("Skill Label Component", function () {
    it("should render the correct details", function () {
        render(<SkillLabel title="useState" />);

        expect(screen.getByTestId("skill-label-title")).toHaveTextContent("useState");
    });
});
