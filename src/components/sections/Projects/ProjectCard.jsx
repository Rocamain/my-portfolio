import { useState } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Tags from './Tags';

const transitionConfig = {
  type: 'spring',
  duration: 1.5,
  bounce: 0.45,
};

const viewportConfig = {
  once: true,
  margin: '0px 0px -100px 0px',
};

export default function ProjectCard({
  title,
  id,
  alt,
  img,
  desc,
  url,
  github,
  tags,
}) {
  const [show, setShow] = useState(false);
  // useMedia query use min query use ! to change to max

  const matchMobile = !useMediaQuery('laptop');

  const x = matchMobile ? 20 : 60;

  return (
    <article data-id={id.toString()} className="card_container">
      <motion.div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        aria-label={`background image${alt}`}
        className="card_container__img"
        style={{
          backgroundImage: `${show || matchMobile ? 'var(--gradient),' : ''} 
    url(${img})`,
        }}
        initial={{ opacity: 0.1 }}
        viewport={viewportConfig}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.15 }}
      >
        <Tags tags={tags} />
      </motion.div>
      <motion.h3
        className="card_container__title"
        initial={{ opacity: 0.3, x: x }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...transitionConfig, delay: 0.15 }}
        viewport={viewportConfig}
      >
        {title}
      </motion.h3>
      <motion.div
        className="flex gap-1"
        style={{ marginBottom: '1.4em' }}
        initial={{ opacity: 0.3, x: x }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...transitionConfig, delay: 0.2 }}
        viewport={viewportConfig}
      >
        <Link
          to={url}
          aria-label={id}
          rel="noopener"
          target="_blank"
          className="card_container__link btn"
        >
          Live demo
        </Link>
        <Link
          to={github}
          aria-label="Github"
          rel="noopener"
          target="_blank"
          className="card_container__link btn"
        >
          see code
        </Link>
      </motion.div>
      <motion.p
        initial={{ opacity: 0.3, x: -x }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...transitionConfig, delay: 0.15 }}
        viewport={viewportConfig}
      >
        {desc}
      </motion.p>
    </article>
  );
}
