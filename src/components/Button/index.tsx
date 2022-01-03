type ButtonProps = {
  name: string;
  content: string;
};

function Button({ name, content }: ButtonProps) {
  return <div className={name}>{content}</div>;
}

export default Button;
