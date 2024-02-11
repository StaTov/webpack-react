import { TItemProps } from "src/utils/types/ItemPost";
import style from "./ItemPost.module.css";

const ItemPost = ({ title, body }: TItemProps) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <div className={style.body}>{body}</div>
    </div>
  )
};

export default ItemPost;
