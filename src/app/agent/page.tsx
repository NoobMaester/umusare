"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import api from "lib/axios";
import Image from "next/image";

export default function AgentPage() {
  const searchParams = useSearchParams();
  const email = searchParams ? searchParams.get("email") : null; // Get email from query parameters

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

  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        const response = await api.get(`/?email=${email}`);
        const agentData = response.data.results[0];
        console.log(agentData);

        //Assuming the API returns an array
        if (!agentData) {
          throw new Error("User not found");
        }
        setAgent(agentData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchAgent();
    }
  }, [email]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!agent) return <div>User not found</div>;

  return (
    <div className="agent-card">
      <Image src={agent.picture.large} alt="profile" width={200} height={200} />
      <h3>
        {agent.name.first} {agent.name.last}
      </h3>
      <p>{agent.email}</p>
    </div>
  );
}
