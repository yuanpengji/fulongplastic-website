import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-bold">页面不存在</h1>
        <p className="mt-5 text-steel">您访问的页面不存在或地址有误。</p>
        <Link className="btn btn-primary mt-8" href="/">
          返回首页
        </Link>
      </div>
    </main>
  );
}
