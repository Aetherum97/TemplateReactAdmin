import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import MyExampleLoginPage from "./components/login/MyExampleLoginPage";
import { dataProvider } from "./provider/dataProvider";
import authProvider from "./provider/authProvider";
import { exampleList } from "./components/lists/exampleList";
import { exampleEdit } from "./components/edit/exampleEdit";
import { exampleCreate } from "./components/create/exampleCreate";
import { exampleShow } from "./components/show/ExampleShow";

export const App = () => (
  <Admin
    loginPage={MyExampleLoginPage}
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={Layout}
  >
    <Resource
      name="example"
      list={exampleList}
      edit={exampleEdit}
      create={exampleCreate}
      show={exampleShow}
    />
  </Admin>
);
