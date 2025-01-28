import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex">
        <h1 className="text-4xl">
          Welcome to Umusare
        </h1>
        <p className="text-lg text-center sm:text-left">
          A place where you can find the best sailor in the world.
        </p>
        <div className="flex">
          <Image
            src="/driver.png"
            alt="Sailor"
            width={200}
            height={200}
          />
          <Image
            src="/driver.png"
            alt="Sailor"
            width={200}
            height={200}
          />
          <Image
            src="/driver.png"
            alt="Sailor"
            width={200}
            height={200}
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Copyright &copy; 2025 Umusaare</p>
      </footer>
    </div>
  );
}
