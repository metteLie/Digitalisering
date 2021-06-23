import useSWR, { mutate } from "swr";

 export default function OnSubmit() { 
    const { data } = useSWR(`/api/hello`, (url) =>
    fetch(url).then((res) => res.json())
    );
console.log(data)
return( <> {data ? (
    <>
      <TableHead>
        <TableRow>
          <TableCell align="right">Mottatt avviksmelding på forutgående arbeider </TableCell>
          <TableCell align="right">Registrerte avvik på forutgående / tilstøtende konstruksjoner.</TableCell>
          <TableCell align="right">Hvor i bygget er avviket:</TableCell>
          <TableCell align="right">Avvik varslet:</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="right">{row.test1}</TableCell>
            <TableCell align="right">{row.test2}</TableCell>
            <TableCell align="right">{row.test3}</TableCell>
            <TableCell align="right">{row.test4}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  ) : null} </>)}