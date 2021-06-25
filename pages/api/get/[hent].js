import faunadb, { Client, Collection } from "faunadb";
const client = new Client({
  secret: "fnAEMFFhWoACBZJGJSlKVaVzdfzZwVxiauTfpjax",
});
const q = faunadb.query;

export default function handler(req, res) {
  const {hent} = req.query
  if (req.method === "GET"){
    client.query(
        q.Get(q.Ref(q.Collection('oppgave2'), hent))
      )
      .then((ret) => res.status(200).json({ ...ret.data, id: ret.ref.id }))
      .catch((err) => console.error('Error: %s', err))
    } else if (req.method === "PUT") {
      
    client.query(q.Update(q.Collection("oppgave2"), {
      id,
    })
    )
    .then((ret)=>console.log(ret))
    .catch((err)=> console.error('Error; %s', err))
    }

}