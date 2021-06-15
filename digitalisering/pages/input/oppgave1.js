import { useState } from "react";
import Link from "next/link";

export function skjema() {
    const [state, setState] = useState("");
    let punkt = [...Array(22).keys()];
    let kjente_avvik = punkt.slice(0,6);
    let montasje = punkt.slice(6,10);
    let solavskjerming = punkt.slice(10,13);
    let feil = punkt.slice(13,15);
    
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
        "Utført i hht tegning:"
    ]
    return ( 
        <table>
            <thead>
                Skjema
            </thead>
            <tbody>
            <tr>
                <th>pkt</th>
                <th>Tekst</th>
                <th>Resultat</th>
                <th>Dato</th>
            </tr>


            <thead>
                Allerede kjente avvik  
            </thead>
            {kjente_avvik.map((k, index)=>{
                return(<tr>
                <td>1,{index}</td>
                <td>{tekst[k]}</td>
                <td> ja / nei</td>
                <td><input
                    placeholder="test"
                    onChange={(e) => {
                        setState(e.target.value);
                }}
                    /></td>
            </tr>);
            })}

            <br />

            <thead>
                Montasje  
            </thead>
            {montasje.map((k, index)=>{
                return(<tr>
                <td>2,{k}</td>
                <td>{tekst[index]}</td>
                <td> ja / nei</td>
                <td><input
                    placeholder="test"
                    onChange={(e) => {
                        setState(e.target.value);
                }}
                    /></td>
            </tr>);
            })}

            <br />

            <thead>
                Solskjerming  
            </thead>
            {solavskjerming.map((k, index)=>{
                return(<tr>
                <td>3,{k}</td>
                <td>{tekst[index]}</td>
                <td> ja / nei</td>
                <td><input
                    placeholder="test"
                    onChange={(e) => {
                        setState(e.target.value);
                }}
                    /></td>
            </tr>);
            })}
            <br />
            <thead>
                Feil/skader  
            </thead>
            {feil.map((k, index)=>{
                return(<tr>
                <td>3,{k}</td>
                <td>{tekst[index]}</td>
                <td> ja / nei</td>
                <td><input
                    placeholder="test"
                    onChange={(e) => {
                        setState(e.target.value);
                }}
                    /></td>
            </tr>);
            })}
            
            </tbody>
        </table>
    );
};