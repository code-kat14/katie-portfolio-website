import { skillGroups } from "@/data/site";
import { SectionHeading, Tag } from "@/components/ui-kit";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="Index 03"
        eyebrow="(c) The workbench"
        title="What I bring to a team."
      />

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="reveal">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
