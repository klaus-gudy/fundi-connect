import { SkillAssessment } from "@/components/certificate/skill-assessment";

export default function AssessmentPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-xl font-bold tracking-tight">
          Skills & Certifications
        </h2>
      </div>

      <SkillAssessment />
    </div>
  );
}
