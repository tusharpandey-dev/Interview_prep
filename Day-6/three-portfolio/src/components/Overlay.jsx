const Overlay = ({ section }) => {
  if (!section) return null;

  return (
    <div className="overlay">
      <h2>{section}</h2>
      <p>This content belongs to {section} section.</p>
    </div>
  );
};

export default Overlay;
