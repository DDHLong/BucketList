import Item from "./Item";
import useList from "../custom-hook/useList";

function Card() {
  const {
    inputValue,
    items,
    handleInputChange,
    handleKeyPress,
    handleToggleCheck,
    handleDeleteItem
  } = useList();

  return (
    <div className="w-[300px] md:w-[500px] lg:w-[700px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 p-8 text-gray-950">
      <h1 className="font-extrabold text-3xl">BUCKET LIST</h1>
      <div className="relative mt-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16"
          >
            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
          </svg>
        </div>
        <input
          type="text"
          id="todo"
          className="border-none focus:ring-0 focus:ring-offset-0 focus:outline-none text-sm block w-full bg-transparent ps-11 p-2.5 text-white"
          placeholder="Add you goal..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </div>
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          handleToggleCheck={handleToggleCheck}
          handleDeleteItem={handleDeleteItem}
        ></Item>
      ))}
    </div>
  );
}

export default Card;
