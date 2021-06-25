// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import faunadb, { Client, Collection } from "faunadb";
import { Body } from "node-fetch";
const client = new Client({
  secret: "fnAEMFFhWoACBZJGJSlKVaVzdfzZwVxiauTfpjax",
});
const q = faunadb.query;

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    client
      .query(
        q.Create(q.Collection("oppgave2"), {
          data,
        })
      )
      .then((ret) => {
        res.status(200).json({ ...ret.data, id: ret.ref.id });
      })
      .catch((err) => res.status(400).json(err));
  } else if (req.method === "GET") {
    client
      .query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("oppgave2"))),
          q.Lambda((x) => q.Get(x))
        )
      )
      .then((ret) => {
        console.log(ret);
        const newData = ret.data.map((d) => {
          console.log(d);
          return { ...d.data, id: d.ref.id };
        });
        console.log(newData);
        res.status(200).json(newData);
      })
      .catch((err) => res.status(400).json(err));
  } else if (req.method === "UPDATE") {
    client.query(q.Update(q.Collection("oppgave2"), {
      data,
    })
    )
    .then((ret)=>console.log(ret))
    .catch((err)=> console.error('Error; %s', err))
  };
}
