const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_KEY});
const q = fauabd.query;


const getDokumenter = async() => {
    const {data} = await faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('dokumenter'))
            ),
            q.Lambda('ref', q.Get(q.Var('ref')))
        )
    );
    const dokumenter = data.map(dokument => {
        dokument.id = dokument.ref.id;
        delete dokument.ref;
        return dokument;
    })
};

