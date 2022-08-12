import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import userService from "../../services/userService";
import Moment from 'react-moment';

// const useStyles = makeStyles((theme) => ({
//   tableOverflow: {
//     overflow: "auto",
//   },
// }));

export default function Tables() {
  const [foods, setFoods] = useState([]);
 

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    userService.get().then((item) =>
      setFoods(
        item.map((i) => {
          return [
            i._id,
            i.username,
            i.email,
            <Moment format="YYYY/MM/DD">{i.createdAt}</Moment>
            
          ];
        }),
      ),
    );
  };

  return (
    <>
      <PageTitle title="Tables User" />
      <Grid container >
        <Grid item xs={12}>
          <MUIDataTable
            title="List User"
            data={foods}
            columns={[
              "ID",
              "Username",
              "Email",
              "CreatedAt",
       
            ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
       
      </Grid>
    </>
  );
}
