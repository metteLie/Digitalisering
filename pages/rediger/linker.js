import useSWR, { mutate } from "swr";
import Link from 'next/link';

export default function OnSubmit() {
  const { data } = useSWR(`/api/hello`, (url) =>
    fetch(url).then((res) => res.json())
  );

  console.log(data);
  return (
    <>
      {" "}
      {data ? (
    <div>
        {data.map((objekt, k) => (
            <Link href={'/rediger/'+objekt.id} key={objekt.id}>
                <a>
                    <h3>{k +1}:    {objekt.id}</h3>
                </a>
            </Link>
            )) }
    </div>
      ) : null}{" "}
    </>
  );
}
