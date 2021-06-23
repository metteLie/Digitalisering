import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
export function skjema() {
    const { register, handleSubmit } = useForm({
        
      });
    async function onSubmit(data) { const res = await fetch("/api/hello", { body: JSON.stringify(data), method: "POST", });}
      
    const [state, setState] = useState("");
    let punkt = [...Array(22).keys()];
    let kjente_avvik = punkt.slice(0,6);
    let montasje = punkt.slice(6,16);
    let solavskjerming = punkt.slice(16,19);
    let feil = punkt.slice(19,22);
    
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
        <form onSubmit={handleSubmit(onSubmit)}>
        <table>
            <thead>
                <tr>
                    <th> Profilteam.as</th>
                    <tr>Skjema: Sjekkliste</tr>
                    <th></th>
                    <tr>Skjema nr:</tr> 
                   
                </tr> 
                <tr>
                    <th></th>
                    <th>Vindu FOP</th>
                    <th></th>
                    <tr> Rev.nr/dato:</tr>
                </tr>
                <tr>
                    <th><hr /></th>
                    <th><hr /></th>
                    <th><hr /></th>
                    <th><hr /></th>
                    <th><hr /></th>

                </tr>
            
            </thead>
            
            <br />
            <tbody> 

            <tr>
                <th>pkt</th>
                <th>Tekst</th>
                <th>Resultat</th>
                <th>Anmerkninger</th>
            </tr>


            <thead>
                Allerede kjente avvik  
            </thead>
            {kjente_avvik.map((index, k)=>{
                return(<tr key ={k}>
                <td>1,{k}</td>
                <td>{tekst[index]}</td>
                <td>ja / nei</td>
                <td><input
                    placeholder="fyll inn"
                    {...register(tekst[index].slice(0,10))}
                
                    /></td>
            </tr>);
            })}

            <br />

            <thead>
                Montasje  
            </thead>
            {montasje.map((index, k)=>{
                return(<tr key= {k}>
                <td>2,{k}</td>
                <td>{tekst[index]}</td>
                <td> ja / nei</td>
                <td><input
                    placeholder="fyll inn"
                    {...register(tekst[index].slice(0,10))}
                
                    /></td>
            </tr>);
            })}
            

            <br />

            <thead>
                Solskjerming  
            </thead>
            {solavskjerming.map((index, k)=>{
                return(<tr key= {k}>
                <td>3,{k}</td>
                <td>{tekst[index]}</td>
                <td> ja / nei</td>
                <td><input
                    placeholder="fyll inn"
                    {...register(tekst[index].slice(0,10))}
                
                    /></td>
            </tr>);
            })}
            
            <br />
            <thead>
                Feil/skader  
            </thead>
            {feil.map((index, k)=>{
                return(<tr key={k}> 
                <td>4,{k}</td>
                <td>{tekst[index]}</td>
                <td> ja / nei</td>
                <td><input
                    placeholder="fyll inn"
                    {...register(tekst[index].slice(0,10))}
                
                    /></td>
            </tr>);
            })}
            <button type = "submit"> lagre </button>
            </tbody>
        </table>
        </form>
    );
};