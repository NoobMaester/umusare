import { notFound } from 'next/navigation';
import api from '../../../lib/axios';
import axios from 'axios';

interface Params {
  email: string;
}

export default async function AgentPage({ params }: { params: Params }) {
  try {
    const response = await api.get(`/agents?email=${params.email}`);
    const agent = response.data;

    console.log(agent);

    if (!agent || !agent.email) {
      notFound();
    }

    return (
      <div className="agent-page">
        <h1>{agent.name}</h1>
        <p>{agent.bio}</p>
        <p>Email: {agent.email}</p>
      </div>
    );
  } catch (error) {
    console.error('Error fetching user data:', error);

    if (axios.isAxiosError(error) && error.response?.status === 404) {
      notFound();
    }

    return <div>Error loading user data. Please try again later.</div>;
  }
}

