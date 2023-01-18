import Http from "../components/Http";
import Image from "../components/Image";
import List from "../components/List";

const data = [
  {
    name: "Http",
    component: <Http />,
    children: [
      {
        name: "Image",
        component: <Image />,
        children: [
          {
            name: "Http",
            component: <Http />,
            children: [],
            id: "b449eb65-9e02-4760-95f0-79a0400d8d52",
          },
        ],
        id: "89028d67-9f76-4ecb-b615-1e22a038ef6a",
      },
    ],
    id: "b92386eb-7275-4d96-b119-4114740bcaf5",
  },
  {
    name: "Image",
    component: <Image />,
    children: [
      {
        name: "Image",
        component: <Image />,
        children: [
          {
            name: "Http",
            component: <Http />,
            children: [],
            id: "46965d66-230c-40b2-957b-e84895ba7dbe",
          },
        ],
        id: "df01df3a-7377-42ec-aa98-9d01147a3e1b",
      },
    ],
    id: "5f7e8020-45d7-4fee-80a6-b4e1039cee7c",
  },
  {
    name: "List",
    component: <List />,
    children: [
      {
        name: "Image",
        component: <Image />,
        children: [
          {
            name: "Http",
            component: <Http />,
            children: [],
            id: "d33c6775-02b9-41b4-9c46-f983b9cc0563",
          },
        ],
        id: "2e320364-ecff-49b6-ae39-dbeab5aa9c0b",
      },
    ],
    id: "4b95a003-9d44-4872-9d8f-b2e475c8a97b",
  },
];

export default data;
