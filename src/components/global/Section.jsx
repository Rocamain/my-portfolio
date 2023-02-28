import SectionTitle from './SectionTitle';

export default function Section({ children, section }) {
  return (
    <section className="section">
      <SectionTitle section={section} />
      <div className="section_container">{children}</div>
    </section>
  );
}
