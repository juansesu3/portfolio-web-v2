'use client';
import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import { motion, AnimatePresence } from 'framer-motion';
import CustomNode from '@/app/components/projects/CustomNode'; // Ruta a tu componente

const nodeTypes = {
  custom: CustomNode,
};

import { Node } from 'react-flow-renderer';

type CustomNodeData = {
  label: string;
  sourcePosition: string;
  targetPosition?: string;
};

const initialNodes: Node<CustomNodeData>[] = [
  { id: '1', type: 'custom', data: { label: 'WhatsApp Trigger', sourcePosition: 'right' }, position: { x: 0, y: -80 } },
  { id: '2', type: 'custom', data: { label: 'If', sourcePosition: 'right', targetPosition: 'left' }, position: { x: 200, y: -80 } },
  { id: '3', type: 'custom', data: { label: 'Date & Time', sourcePosition: 'right', targetPosition: 'left' }, position: { x: 400, y: -80 } },
  { id: '4', type: 'custom', data: { label: 'Date & Time1', sourcePosition: 'right', targetPosition: 'left' }, position: { x: 600, y: -80 } },
  { id: '5', type: 'custom', data: { label: 'Edit Fields4', sourcePosition: 'right', targetPosition: 'left' }, position: { x: 800, y: -80 } },
  { id: '6', type: 'custom', data: { label: 'Schedule Trigger', sourcePosition: 'right', targetPosition: 'left' }, position: { x: 400, y: 100 } },
  { id: '7', type: 'custom', data: { label: 'Edit Fields3', sourcePosition: 'right', targetPosition: 'left' }, position: { x: 600, y: 100 } },
  { id: '8', type: 'custom', data: { label: 'Merge', sourcePosition: 'right', targetPosition: 'left' }, position: { x: 1000, y: 10 } },
  { id: '9', type: 'custom', data: { label: 'AI Agent', targetPosition: 'bottom', sourcePosition: 'right' }, position: { x: 1200, y: 10 } },
  { id: '10', type: 'custom', data: { label: 'Memory', sourcePosition: 'top' }, position: { x: 1000, y: 250 } },
  { id: '11', type: 'custom', data: { label: 'OpenAI Model', sourcePosition: 'top' }, position: { x: 800, y: 250 } },
  { id: '12', type: 'custom', data: { label: 'Get Events', sourcePosition: 'top' }, position: { x: 1200, y: 250 } },
  { id: '13', type: 'custom', data: { label: 'Agendar Evento', sourcePosition: 'top' }, position: { x: 1400, y: 250 } },
  { id: '14', type: 'custom', data: { label: 'Cancelar Evento', sourcePosition: 'top' }, position: { x: 1600, y: 250 } },
  { id: '15', type: 'custom', data: { label: 'WhatsApp Business Cloud', sourcePosition: 'right', targetPosition: 'left' }, position: { x: 1600, y: 10 } },
];

const nodeDescriptions = {
  '1': '🔔 **WhatsApp Trigger** – Listens for incoming messages from WhatsApp Business. This node initiates the workflow whenever a user sends a message.',
  '2': '🧪 **Conditional (If)** – Evaluates conditions on the received message (e.g., checks if a message exists) to decide whether to continue the flow.',
  '3': '🕓 **Date & Time (Current)** – Captures the current system date and time to use in further logic or to provide context-aware responses.',
  '4': '📆 **Format Date & Time** – Reformats the previously retrieved date/time into a user-friendly format suitable for AI prompts or message content.',
  '5': '🛠️ **Set Fields (User Message)** – Extracts and standardizes key values from the incoming message, such as the user’s WhatsApp ID and message content, preparing the data for merging.',
  '6': '⏰ **Scheduled Trigger** – Automatically starts the workflow at a specific time of day (e.g., 6:00 AM), commonly used for proactive reminders or daily updates.',
  '7': '🧹 **Set Fields (Predefined Message)** – Simulates a default message (e.g., “Remind me of today’s appointments”) and hardcodes a WhatsApp ID, typically for scheduled or automated flows.',
  '8': '🔗 **Merge** – Combines data from different branches (such as scheduled input and live messages) into a single stream that the AI agent can process.',
  '9': '🤖 **AI Agent – Client Support** – A conversational AI agent that responds empathetically and intelligently, managing calendar interactions like fetching, scheduling, and canceling events.',
  '10': '🧠 **Postgres Chat Memory** – Stores and retrieves long-term conversation context in a PostgreSQL database, enabling the agent to remember past interactions.',
  '11': '📅 **Get Events** – Fetches events from the user’s Google Calendar (e.g., for today) and provides them to the agent for personalized summaries.',
  '12': '📝 **Schedule Event** – Adds a new event to Google Calendar based on the user’s input, including title, time, and description.',
  '13': '❌ **Cancel Event** – Deletes an existing calendar event using the event ID provided by the AI agent.',
  '14': '📤 **WhatsApp Business Cloud** – Sends the final message (e.g., summary or confirmation) back to the user via WhatsApp, completing the interaction.',
};


const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e5-8', source: '5', target: '8' },
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e8-9', source: '8', target: '9' },
  { id: 'e10-9', source: '10', target: '9' },
  { id: 'e11-9', source: '11', target: '9' },
  { id: 'e12-9', source: '12', target: '9' },
  { id: 'e13-9', source: '13', target: '9' },
  { id: 'e9-14', source: '14', target: '9' },
  { id: 'e9-15', source: '9', target: '15' },
];

function DiagramaFlujoInteractivo() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('saved-nodes');
    if (saved) setNodes(JSON.parse(saved));
  }, [setNodes]);

  useEffect(() => {
    localStorage.setItem('saved-nodes', JSON.stringify(nodes));
  }, [nodes]);

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node<CustomNodeData>) => {
    setSelectedNode({ id: node.id, label: node.data.label });
  }, []);

  return (
    <ReactFlowProvider>
      <div className="w-full h-[60vh] flex">
        <div className="flex-grow relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            style={{ background: '#f0f0f0', borderRadius: '10px' }}
            fitView
            panOnDrag
            zoomOnScroll
          >
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </div>

        <AnimatePresence>
          {selectedNode && (
            <motion.div
              key="sidebar"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-80 bg-white p-6 shadow-lg rounded-md"
            >
              <h2 className="text-xl font-bold mb-2">{selectedNode.label}</h2>
              <p className="text-gray-600 mb-4">{nodeDescriptions[selectedNode.id]}</p>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-purple-600 text-sm underline"
              >
                Cerrar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ReactFlowProvider>
  );
}

export default DiagramaFlujoInteractivo;
