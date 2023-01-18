import Header from "../components/Header";
import Http from "../components/Http";
import Image from "../components/Image";
import List from "../components/List";

const Types = {
  http: {
    name: "Http",
    component: <Http />,
    children: [],
  },
  header: {
    name: "Header",
    component: <Header />,
    children: [],
  },
  image: {
    name: "Image",
    component: <Image />,
    children: [],
  },
  list: {
    name: "List",
    component: <List />,
    children: [],
  },
};

export default Types;
