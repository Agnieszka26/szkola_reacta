import BlogPage from "./components/BlogPage/BlogPage";
import Card from "./components/Card/Card";
import Form from "./Form/Form";
import TimerClass from "./components/Timer/TimerClass";
import Timer from "./components/Timer/TimerFc";
import NavBar from "./components/Menu";
import Employees from "./components/Employees";
const posts = [
  {
    id: 1,
    title: "Pilne: Co to był za dzień!",
    intro: "Tego świat jeszcze nie widział",
  },
  {
    id: 2,
    title: "Wszyscy zazdroszą Polakom!",
    intro: "Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił",
  },
  {
    id: 3,
    title: "Adam Małysz Zgolił wąs",
    intro:
      "Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy",
  },
];

function App() {
  return (
    <div style={{fontFamily: "Roboto"}}>
      <NavBar />
       <BlogPage posts={posts} />
      <Timer />
      <TimerClass />
      <Form />
      <Card
        date="September 14, 2016"
        title="Shrim and Chorizo Paella"
        intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        showMore={false}
        content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
      />
      <Employees />
    </div>
  );
}

export default App;
