import SectionTitle from './SectionTitle';

export default function Section({ children, section, noRotate, id, ...props }) {
  return (
    <section id={id} className={`section ${noRotate ? '' : 'section_grid'}`}>
      <SectionTitle section={section} noRotate={noRotate} />
      <div className="section_container">{children}</div>
    </section>
  );
}
