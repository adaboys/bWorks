import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Write Cardano ESROW smart contract', 7500, 6.0, "Mar 24 2022", 4.0),
  createData('Create Cardano Native and NFT token', 3600, 9.0, "April 02 2022", 2),
  createData('Build Cardano testNet node', 1500, 16.0, "Mar 13 2022", 0),
  createData('Develop android/IOS walllet', 15000, 3.7, "Mar 05 2022", 10),
  createData('OffChain and onchain functions', 11000, 16.0, "April 05 2022", 6),
  createData('Develop utils to query Cardano wallet', 8210, 6.0, "Mar 11 2022", 1),
  createData('Develop smartphone apps', 13000, 9.0, "Mar 21 2022", 2),
  createData('Create tool to manage stake pool', 6300, 16.0, "June 24 2022", 3),
  createData('Create NFT store on Amazon s3', 9400, 3.7, "June 07 2022", 4.3),
  createData('Develop cross chain function to swap ETH/ADA', 18000, 16.0, "Mar 09 2022", 8),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>JOB NAME </TableCell>
            <TableCell align="right">BUDGET (ADA)</TableCell>
            <TableCell align="right">REQUIRED FOR BID (ADA)</TableCell>
            <TableCell align="right">EXPIRED DATE</TableCell>
            <TableCell align="right">CURRENT BIDs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right"> <Button variant="outlined"  color="success">Place bid</Button> </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
