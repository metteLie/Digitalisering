import useSWR, { mutate } from "swr";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function OnSubmit() {
  const { data } = useSWR(`/api/hello`, (url) =>
    fetch(url).then((res) => res.json())
  );

  let punkt = [...Array(22).keys()];
  let kjente_avvik = punkt.slice(0, 6);
  let montasje = punkt.slice(6, 16);
  let solavskjerming = punkt.slice(16, 19);
  let feil = punkt.slice(19, 22);

  let tekst = [
    "Mottatt avviksmelding på forutgående arbeider:",
    "Registrerte avvik på forutgående / tilstøtende konstruksjoner.",
    "Hvor i bygget er avviket:",
    "Avvik varslet:",
    "Mottatt beordring om montasje av egne konstruksjoner med avvik:",
    "Beskrivelse av montaskjeavvik egne kontruksjoner.",
    "Riktig element på rett sted: Type /ID-nr. kontrollert mot skjemategninger og krav.",
    "Innfesting utført iht.tegning, vinduet i lodd side vegg og inn/ut av planet?",
    "Vinduet er plassert i åpning med omløpende spalt mellom 10 og 25 mm? Angi største og minste spalt",
    "Korrekt utført drenering og lufting iht profilteams montasjeanvisning. (plastomslag).",
    "Er bolter installert iht NS-EN 1090-2, pkt 8,3",
    "Kontroller avstand fra utvendig montasjeplate til skulder betong. Minimum 10mm, maks 13. Angi målt verdi",
    "Er fuge utført korrekt og KS skjema mottat fra UE?",
    "Treverk er montert uten synlige skader og med riktig type skruer (fargede skruer A4) ?",
    "Er sålebenkbeslag og beslag på bånnstokk montert med syrefaste skruer og med korrekte luftespalter? ",
    "Produktet er levert uten feil/skader og fungerer som den skal?",
    "Er Solskjerming montert?",
    "Er det tettet rundt kabelgjennomføring og strekkavlastning strammet?",
    "Mottatt egenkontrollskjema for solavskjerming",
    "Hva er feil / skadet:",
    "Feil / skader utbedret:",
    "Utført i hht tegning:",
  ];
  console.log(data);
  return (
    <>
      {" "}
      {data ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Index</TableCell>
                {tekst.map((t, index) => (
                  <TableCell key={index} align="left">
                    {t}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={row.id}>
                  <TableCell align="right" >{i +1}</TableCell>
                  {tekst.map((t, index) => (
                    <TableCell align="right" key={index} style={{ width: "4cm" }}>
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
  );
}
