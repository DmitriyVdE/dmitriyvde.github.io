import React from "react";

interface IButtonProps {
  text: string;
}

export const Button: React.FC<IButtonProps> = ({
  text,
}: IButtonProps): JSX.Element => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    console.log("Button clicked");
    setCount(count + 1);
  };

  return (
    <button
      onClick={() => setCount(count + 1)}
      type="button"
    >{`${text} - ${count}`}</button>
  );
};
