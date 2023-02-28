import { motion } from 'framer-motion';

const transitionConfig = {
  duration: 1.5,
};
const viewportConfig = {
  once: true,
};

export default function SectionTitle({ section, noRotate }) {
  const letterArray = Array.from(section);
  return (
    <div>
      <motion.header
        id={section}
        className={noRotate ? 'section_title-normal' : 'section_title'}
        viewport={viewportConfig}
      >
        <h2
          className={
            noRotate ? 'section_title-normal__title' : 'section_title__title'
          }
          aria-label={section}
        >
          {letterArray.map((letter, i) => (
            <motion.span
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transitionConfig, delay: 0.1 * i }}
              key={section + i + letter}
              className={
                noRotate
                  ? 'section_title-normal__title_letter'
                  : 'section_title__title_letter'
              }
              viewport={viewportConfig}
            >
              {letter}
            </motion.span>
          ))}
        </h2>
        <motion.div
          className={`${
            noRotate ? 'section_title-normal__border' : 'section_title__border'
          } background-color`}
          initial={{ opacity: 0, x: -5, width: 0 }}
          whileInView={{ opacity: 1, x: 0, width: '180px' }}
          transition={{ ...transitionConfig, delay: 0.2 }}
          viewport={viewportConfig}
        />
      </motion.header>
    </div>
  );
}
