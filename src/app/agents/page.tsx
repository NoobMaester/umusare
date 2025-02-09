import Link from "next/link";
import api from "lib/axios";
import Image from "next/image";

interface Agent {
  id: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

export default async function AgentsPage() {

  // Fetch Agents from the API
  const response = await api.get("/?results=10");
  const Agents = response.data.results;
  console.log(Agents);

  return (
    <div className="agents-page">
      <h1>Agents</h1>
      <ul className="agents-list">
        {Agents.map((agent: Agent) => (
          <li key={agent.email}>
            <Link href={`/agent?email=${agent.email}`} passHref>
              <div className="agent-card">
                <Image
                  src={agent.picture.large}
                  alt="profile"
                  width={200}
                  height={200}
                />
                <h3>
                  {agent.name.first} {agent.name.last}
                </h3>
                <p>{agent.email}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
