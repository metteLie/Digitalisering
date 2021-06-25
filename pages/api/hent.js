import faunadb, { Client, Collection } from "faunadb";
import { Body } from "node-fetch";
const client = new Client({
  secret: "fnAEMFFhWoACBZJGJSlKVaVzdfzZwVxiauTfpjax",
});
const q = faunadb.query;

export default function hentDokument(id) {
    return(
    client.query(
        q.Get(q.Ref(q.Collection('oppgave2'), id))
      )
      .then((ret) => console.log(ret))
      .catch((err) => console.error('Error: %s', err))
    );
}