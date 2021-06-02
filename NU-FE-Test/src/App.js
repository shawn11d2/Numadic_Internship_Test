import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import "./App.css";

const countriesURL = "https://restcountries.eu/rest/v2/all";

const useStyles = makeStyles({
   root: {
    display: 'flex',
    overflowX: 'hide',
    align: 'center',
   },

  table: {
    minWidth: 150,
  },

  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
   
  }

});

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const classes = useStyles();

  const getCountriesWithAxios = async () => {
    const response = await axios.get(countriesURL);
    setCountriesData(response.data);
    
  };

  useEffect(() => {
    getCountriesWithAxios();
  }, []);

  

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow className="table-head">
                  <TableCell className="selectCheckbox " padding="checkbox">
                        <Checkbox
                          
                          className="selectCheckbox"
                          
                        />
                  </TableCell>      
                  <TableCell align="left" className="table-head">
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell align="left" className="table-head">
                    <strong>Flag</strong>
                  </TableCell>
                  <TableCell align="left" className="table-head">
                    <strong>Capital</strong>
                  </TableCell>
                  <TableCell align="left" className="table-head">
                    <strong>Population</strong>
                  </TableCell>
                  <TableCell align="left" className="table-head">
                    <strong>Region</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {countriesData.map((country) => (
                  <TableRow>
                    <TableCell className="selectCheckbox" padding="checkbox">
                        <Checkbox
                          
                          className="selectCheckbox"
                          
                        />
                    </TableCell>
                    <TableCell  align="left" className="table-row">
                      {country.name}
                    </TableCell>
                    <TableCell  align="left">
                    <img src={country.flag} alt="flag" width="32px" />
                    </TableCell>
                    <TableCell align="left" className="table-row">{country.capital}</TableCell>
                    <TableCell align="left">{country.population}</TableCell>
                    <TableCell align="left" className="table-row">{country.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
