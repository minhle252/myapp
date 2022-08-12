import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";
import foodsService from "../../services/foodService";

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function Tables() {
  const [foods, setFoods] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    foodsService.get().then((item) =>
      setFoods(
        item.map((i) => {
          return [
            i.id,
            i.category,
            i.name,
            i.description,
            i.prices.lastPrice + " $",
          ];
        }),
      ),
    );
  };

  return (
    <>
      <PageTitle title="Tables Product" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="List Products"
            data={foods}
            columns={[
              "ID",
              "Categories",
              "Product Name",
              "Description",
              "Price",
            ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget
            title="Material-UI Table"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableOverflow}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
