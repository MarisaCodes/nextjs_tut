import HeadComp from "@/components/Head";
import Link from "next/link";
import styles from "../../styles/ninja.module.css";
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8000/users");
  let data = null;
  if (res.ok) {
    data = await res.json();
    return {
      props: { ninjas: data, error: null },
    };
  }
};

const Ninjas = ({ ninjas, error }) => {
  return (
    <>
      <HeadComp title="Ninja List | Ninjas" />

      <section className="section">
        <h1 className="is-size-3 title">All Ninjas</h1>

        {error ||
          ninjas.map((ninja) => {
            return (
              <Link
                href={"/ninjas/" + ninja.id}
                className={"mt-5 " + styles.ninja_item}
                key={ninja.id}
              >
                <div>
                  <span
                    className={styles.ninja_item_body}
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    {ninja.name}
                  </span>
                </div>
              </Link>
            );
          })}
      </section>
    </>
  );
};

export default Ninjas;
