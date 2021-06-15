/* Side for ulike data 
for gitt id */

export const getStaticPaths = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(objekt => {
        return {
            params: { id: objekt.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res =  await fetch('http://jsonplaceholder.typicode.com/users' + id);
    const data = await res.json();

    return {
        props: { objekt: data }
    }
}

const sjekkliste = ({objekt}) => {
    return ( 
    <div>
        <h1>Dette skal vise sjekklisten for { objekt.name } </h1>
        <h2>Burde komme opp navn?
            Merk igjen fetch må hentes fra fauna, 
            dette er kun illustrasjon
        </h2>
    </div>  );
}
 
export default sjekkliste;