import HeadComp from "@/components/Head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ServerError = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, []);
  return (
    <>
      <HeadComp title="Ninja List | 500" />

      <div className="container">
        <div className="content has-text-centered mt-6">
          <h1 className="is-size-3-tablet is-size-4-mobile title">
            Error | 500
          </h1>
          <h2 className="subtitle is-size-5-tablet is-size-6-mobile mt-5">
            Something went wrong :(
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <span>Go back to the</span>
            <Link href="/" className="button is-link is-light">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerError;
