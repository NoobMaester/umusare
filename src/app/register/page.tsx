import Head from 'next/head';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register | Sailor</title>
      </Head>
      <main className="auth-page">
        <div className="container">
          <h1>Create New Account</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <Link href="/login">Login here</Link>
          </p>
        </div>
      </main>
    </>
  );
}