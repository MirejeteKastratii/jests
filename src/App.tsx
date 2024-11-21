import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ConfigProvider } from "antd";
import "./App.css";
import { DataContext } from "./Context";
import { Grid } from "./components/Grid/Grid";
import { UserForm } from "./components/UserForm/UserForm";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgBase: "transparent",
          },
          Button: {
            defaultHoverColor: "black",
            defaultActiveColor: "black",
          },
          Modal: {
            headerBg: "#F8F8FA",
          },
        },
      }}
    >
      <DataContext>
        {/* <ActionButton
        actionType="delete"
        onActionClick={() => {
          alert(4);
        }}
      />
      <ActionButton actionType="edit"  onActionClick={()=>{alert("edit")}}/> */}
        <UserForm
          isCreate
          userId={0}
        />
        <Grid />
        {/* <UserForm/> */}
      </DataContext>
    </ConfigProvider>
  );
}

export default App;
