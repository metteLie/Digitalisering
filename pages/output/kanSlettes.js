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
      {" "}
      {data ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Index</TableCell>
                {tekst.map((t, index) => (
                  <TableCell key={index} align="right">
                    {t}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={row.id}>
                  <TableCell align="right">{i + 1}</TableCell>
                  {tekst.map((t, index) => (
                    <TableCell align="right" key={index}>
                      {row[tekst[index].slice(0, 10)]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}{" "}
    </>
  ) : null}
