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
    return dokumenter;
};

const createDokument = async (id, Pkt, Resultat, Dato, Sign, Anmerkninger) => {
    return await faunaClient.query(
        q.Create(q.Collection('dokumenter'), {
            data: {id, pkt, Resultat, Dato, Sign, Anmerkninger},
        })
    );
};


const deleteDokument = async (id) => {
    return await faunaClient.query(
        q.Delete(q.Ref(q.Collection('dokumenter'),
        ))
    );
};


module.exports ={
    getDokumenter,
    createDokument,
    deleteDokument
};


