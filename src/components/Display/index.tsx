type DisplayProps = {
  content: string;
};

function Display({ content }: DisplayProps) {
  return (
    <div className="display">
      <div className="lcd">{content}</div>
    </div>
  );
}

export default Display;
