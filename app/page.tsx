'use client'
import Sidebar from '@/components/pages/Sidebar';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import EditAgent from '@/components/pages/EditAgent';
import { IAgent } from '@/lib/types';

export default function Agents() {
  const [open, setOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<IAgent>({id: Date.now(), name: ''});
  const [agents, setAgents] = useState<IAgent[]>([
    { id: 1, name: 'Agent 1' },
    { id: 2, name: 'Agent 2' },
    { id: 3, name: 'Agent 3' },
  ]);

  const openEditDialog = (agent: IAgent = {id: Date.now(), name: ''}) => {
    setOpen(true);
    setSelectedAgent(agent);
  }

  const editAgent = () => {
    setAgents(agents => {
      const newAgents = [...agents];
      const index = newAgents.findIndex(_agent => _agent.id === selectedAgent.id);
      if (index < 0) {
        newAgents.push(selectedAgent);
      } else {
        newAgents.splice(index, 1, selectedAgent);
      }
      return newAgents;
    });
  }
  const removeAgent = (agent: IAgent) => {
    setAgents(agents.filter(_agent => _agent.id !== agent.id));
  }
  return (
    <main className="flex h-screen bg-gray-200">
      <Sidebar/>
      <div className="w-full ml-64">
        <div className="bg-gray-800 text-white p-4">Agents</div>
        <div className="flex flex-col p-10">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 ml-auto" onClick={() => openEditDialog()}>Create Agent</Button>
          <ul className="space-y-4">
            {agents.map(agent => (
              <li key={agent.id} className="flex justify-between items-center border p-4 rounded shadow">
                <span>{agent.name}</span>
                <span>{agent.status}</span>
                <div className="flex gap-1">
                  <Button variant="outline" onClick={() => openEditDialog(agent)}>Edit</Button>
                  <Button variant="destructive" onClick={() => removeAgent(agent)}>Remove</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <EditAgent open={open} setOpen={setOpen} editAgent={editAgent} agent={selectedAgent} setAgent={setSelectedAgent} />
    </main>
  );
}