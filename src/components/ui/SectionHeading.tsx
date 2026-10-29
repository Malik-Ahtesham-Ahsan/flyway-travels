type SectionHeadingProps = { eyebrow: string; title: string; description?: string; light?: boolean; align?: "left" | "center" };

export default function SectionHeading({ eyebrow, title, description, light = false, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p className={`mb-3 text-xs font-bold uppercase tracking-[0.12em] ${light ? "text-[#a7ddd0]" : "text-brand"}`}>{eyebrow}</p>
      <h2 className={`font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.8rem] ${light ? "text-white" : "text-foreground"}`}>{title}</h2>
      {description && <p className={`mt-4 max-w-xl text-base leading-7 ${light ? "text-white/75" : "text-muted"} ${align === "center" ? "mx-auto" : ""}`}>{description}</p>}
    </div>
  );
}