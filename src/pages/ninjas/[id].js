export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/users");
  let data = null;
  if (res.ok) {
    data = await res.json();
    const paths = data.map((ninja) => {
      return {
        params: { id: ninja.id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:8000/users/${id}`);
  let data = null;
  if (res.ok) {
    data = await res.json();
    return {
      props: { ninja: data },
    };
  } else throw Error(res.status + " " + res.statusText);
};

const Details = ({ ninja }) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-size-4">{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
      </div>
    </section>
  );
};

export default Details;
