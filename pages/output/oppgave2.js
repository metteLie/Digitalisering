import useSWR, { mutate } from "swr";
const { data } = useSWR(`/api`, (url) =>
fetch(url).then((res) => res.json())
);
async function onSubmit(data) { 
    const res = await fetch("/api/hello", { 
        body: JSON.stringify(data), 
        method: "POST",
     });
    mutate: ("/api");
    }

{data ? (
    <>
      <TableHead>
        <TableCol>
          <TableCell align="right">Test1</TableCell>
          <TableCell align="right">Test2</TableCell>
          <TableCell align="right">Test3</TableCell>
          <TableCell align="right">Test4</TableCell>
        </TableCol>
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
  ) : null}
