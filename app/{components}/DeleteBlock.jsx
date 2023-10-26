import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
    />
  );
};

export default DeleteBlock;
