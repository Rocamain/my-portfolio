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

  // margin: '0px 0px -100px 0px',
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
  const MatchPads = !useMediaQuery('laptop');

  return (
    <article data-id={id.toString()} className="card_container">
      <motion.div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        aria-label={`background image${alt}`}
        className="card_container__img"
        style={{
          backgroundImage: `${
            show || MatchPads
              ? 'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(145, 170, 253, 0.8)),'
              : ''
          } 
    url(${img})`,
        }}
        initial={{ opacity: 0 }}
        viewport={viewportConfig}
        whileInView={{ opacity: 1 }}
      >
        <Tags tags={tags} />
      </motion.div>
      <motion.h3
        className="card_container__title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...transitionConfig, delay: 0.15 }}
      >
        {title}
      </motion.h3>
      <motion.div
        className="flex gap-1"
        style={{ marginBottom: '1.4em' }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...transitionConfig, delay: 0.35 }}
      >
        <Link
          href={url}
          aria-label={id}
          rel="noopener"
          target="_blank"
          className="card_container__link btn"
        >
          Live demo
        </Link>
        <Link
          href={github}
          aria-label="Github"
          rel="noopener"
          target="_blank"
          className="card_container__link btn"
        >
          see code
        </Link>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ...transitionConfig, delay: 0.55 }}
      >
        {desc}
      </motion.p>
    </article>
  );
}
