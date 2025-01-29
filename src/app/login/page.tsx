import Head from 'next/head';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Sailor</title>
      </Head>
      <main className="auth-page">
        <div className="container">
          <h1>Login to Your Account</h1>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p>
            Do not have an account? <Link href="/register">Register here</Link>
          </p>
        </div>
      </main>
    </>
  );
}