import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { useData, type User } from "../../Context";
import { ActionButton } from "../ActionButton/ActionButton";
import { UserForm } from "../UserForm/UserForm";
import styles from "./grid.module.css";

export const Grid = () => {
  const { users, deleteUser } = useData();

  const [colDefs, setColDefs] = useState<ColDef<User>[]>([
    { field: "name", filter: true },
    { field: "surname" },
    { field: "email" },
    { field: "description" },
    {
      flex:1,
      field: "id",
      headerName: "Actions",
      cellRenderer: (p) => (
        <div className={styles.action}>
          <ActionButton
            actionType="delete"
            onActionClick={() => {
              deleteUser(p.value);
            }}
          />
          <UserForm userId={p.value} />
        </div>
      ),
    },
   
  ]);

  const defaultColDef: ColDef = {
    flex: 2,
  };

  return (
    <>
      <div
        className={"ag-theme-quartz-dark"}
        style={{ width: "100vw", height: "100vh", padding: "0px" }}
      >
        <AgGridReact
          rowData={users}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          className={styles.mirjetaClass}
          pagination={true}
        />
      </div>
    </>
  );
};
