import {
  FaHeart,
  FaShare,
  FaChevronDown,
  FaEllipsisV,
  FaAngleUp,
} from "react-icons/fa";
import {useState} from "react";
import {styles} from "./styles";


const Card = ({date, title, intro, showMore, content}) => {
  const src =
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop";


  const [visible, setVisible] = useState(showMore);
  const handleShowMore = () => {
    setVisible((prev) => !prev);

  };

  return (
    <div style={styles.main}>
      <div style={styles.upBar}>
        <div style={styles.redCycle}>R</div>
        <div>
          <h1>{title} </h1>
          <p>{date}</p>
        </div>
        <div>
          <FaEllipsisV />
        </div>
      </div>
      <img style={styles.image} alt="obrazek" src={src} />
      <div style={{padding: "1rem"}}>
        <p>{intro}</p>
      </div>
      <div style={styles.icons}>
        <div>
          <FaHeart style={{padding: "0.5rem"}} />
          <FaShare style={{padding: "0.5rem"}} />
        </div>
        <div onClick={handleShowMore}>
          {visible ? (
            <FaChevronDown style={{padding: "0.5rem"}} />
          ) : (
            <FaAngleUp style={{padding: "0.5rem"}} />
          )}
        </div>
      </div>
      {visible ? (
        <div style={{padding: "1rem"}}>
          <p>{content}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
