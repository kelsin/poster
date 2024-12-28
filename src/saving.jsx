import { clsx } from "clsx";
import { useSelector } from "react-redux";

const Saving = () => {
  const saving = useSelector((state) => state.saving);
  const classes = clsx({ hidden: !saving });

  return <div className={`${classes}`}>Saving</div>;
};

export default Saving;
