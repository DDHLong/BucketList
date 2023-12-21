import { useState } from "react";
import Checkbox from "./Checkbox";
import { cn } from "../lib/utils";
import PropTypes from "prop-types";

function Item({ text }) {
  const [check, setCheck] = useState(false);

  const onToggle = () => {
    setCheck(!check);
  };

  return (
    <div className="flex justify-starts items-center mt-3">
      <Checkbox check={check} onToggle={onToggle} />
      <p className={cn("text-white",{ "line-through text-gray-400": check })}>{text}</p>
    </div>
  );
}

export default Item;

Item.propTypes = {
  text: PropTypes.string,
};
