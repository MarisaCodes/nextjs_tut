import HeadComp from "@/components/Head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeadComp title="Ninja List | Home" />
      <main className="section">
        <h1 className="is-size-2-tablet is-size-3-mobile title has-text-centered">
          Homepage
        </h1>
        <div className="container">
          <div className="content">
            <p className="is-size-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              beatae cupiditate excepturi impedit quo. Vitae ad ut aspernatur
              numquam natus illum porro culpa? Aut, tenetur reiciendis
              temporibus iste eveniet cupiditate asperiores quae, recusandae
              corrupti sit ea fugit numquam molestias placeat dolores nihil quis
              doloribus sunt laborum porro nam quibusdam ut facere. Quod,
              perferendis aperiam quisquam dolor exercitationem, laborum, minus
              enim dolores voluptatibus animi quos at rerum tempore esse in
              quibusdam reiciendis minima illum! Sapiente sint sequi quis
              aperiam libero magnam excepturi aut distinctio in porro eius,
              quibusdam iste commodi inventore soluta ab reiciendis sit.
              Explicabo nulla tempore tempora harum aperiam!
            </p>
          </div>
          <div className="has-text-centered">
            <Link href="/ninjas" className="button is-info">
              See Ninja Listing
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
