import SectionTitle from './SectionTitle';

export default function Section({ children, section, noRotate, id, ...props }) {
  return (
    <section
      id={id}
      className={`section ${noRotate ? undefined : 'section_grid'}`}
    >
      <SectionTitle section={section} noRotate={noRotate} />
      <div
        className={
          noRotate ? 'section_block__container' : 'section_grid__container'
        }
      >
        {children}
      </div>
    </section>
  );
}
