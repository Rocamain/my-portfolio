export default function Tags({ tags, noMargin }) {
  return (
    <div className={`tags-container`}>
      {tags.map((tag, index) => (
        <span key={index * Math.random() * 10} className={`tag ${tag}`}>
          {tag}
        </span>
      ))}
    </div>
  );
}
