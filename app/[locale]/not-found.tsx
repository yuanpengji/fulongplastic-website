import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
        <p className="mt-5 text-steel">The page you requested does not exist or the address is incorrect.</p>
        <Link className="btn btn-primary mt-8" href="/en">
          Back to home
        </Link>
      </div>
    </main>
  );
}
