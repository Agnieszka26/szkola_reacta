import {v4 as uuidv4} from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const BlogPage = ({posts}) => {
  const checkLongerThan25 = (str) => {
    return str.length > 25 ? str.slice(0, 25) + "..." : str;
  };
  const styles = {
    main: {
      backgroundColor: "#fff",
    },
    card: {
      paddingTop: "5%",
      margin: "1rem",
      background: "#fef",
      height: "30vh",

      borderRadius: "35px",
      boxShadow: "1px 1px 2rem rgba(0, 0, 0, 0.3)",
      position: "relative",
    },
    title: {
      textAlign: "center",
    },
    intro: {
      textAlign: "center",
    },
  };

  return (
    <div style={styles.main}>
      <div style={styles.card}>
        {" "}
        <h2 style={styles.title}>{uuidv4()}</h2>
      </div>
      {posts.map((post) => {
        const {title, intro, id} = post;
        return (
          <div style={styles.card} key={id}>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.intro}>{checkLongerThan25(intro)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
