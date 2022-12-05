// import { ReactComponent as Cross } from "../assets/images/icon-cross.svg";
import cross from "../assets/images/icon-cross.svg";
import { motion } from "framer-motion";

export default function Item({ todoItem, onDelete, checked, onCheckedToggle }) {
  const handleClick = () => {
    onDelete(todoItem);
  };
  const handleCheckToggle = () => {
    onCheckedToggle(todoItem);
  };

  return (
    <div className="todo-item">
      <label className="checkbox-container">
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={checked}
          onChange={handleCheckToggle}
        />
        <span className="checkmark"></span>
        <motion.div
          key={todoItem.id}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <li className={checked ? "checked" : null}>{todoItem.todo}</li>
        </motion.div>
      </label>
      <motion.img src={cross} onClick={handleClick} whileTap={{ rotate: 90 }} />
    </div>
  );
}
