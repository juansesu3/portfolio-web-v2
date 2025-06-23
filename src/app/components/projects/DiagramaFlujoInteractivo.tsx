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

const nodeStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: 10,
  fontSize: 14,
  backgroundColor: 'white',
  width: 180,
  textAlign: 'center',
};

const initialNodes = [
  { id: '1', data: { label: '💬 WhatsApp Trigger' }, position: { x: 0, y: -80 }, sourcePosition: 'right', targetPosition: 'left',   style: nodeStyle },
  { id: '2', data: { label: '🔀 If' }, position: { x: 200, y: -80 },  sourcePosition: 'right', targetPosition: 'left', style: nodeStyle },
  { id: '3', data: { label: '🕓 Date & Time' }, position: { x: 400, y: -80 },  sourcePosition: 'right', targetPosition: 'left', style: nodeStyle },
  { id: '4', data: { label: '🕓 Date & Time1' }, position: { x: 600, y: -80 },  sourcePosition: 'right', targetPosition: 'left', style: nodeStyle },
  { id: '5', data: { label: '✍️ Edit Fields4' }, position: { x: 800, y: -80 },  sourcePosition: 'right', targetPosition: 'left', style: nodeStyle },
  { id: '6', data: { label: '⏰ Schedule Trigger' }, position: { x: 400, y: 100 },  sourcePosition: 'right', targetPosition: 'left', style: nodeStyle },
  { id: '7', data: { label: '✍️ Edit Fields3' }, position: { x: 600, y: 100 },  sourcePosition: 'right', targetPosition: 'left', style: nodeStyle },
  { id: '8', data: { label: '🔗 Merge' }, position: { x: 1000, y: 10 }, sourcePosition: 'right', targetPosition: 'left', style: nodeStyle },
  { id: '9', data: { label: '🤖 AI Agent' }, position: { x: 1200, y: 10 }, style: nodeStyle },
  { id: '10', data: { label: '🧠 Memory' }, position: { x: 1000, y: 250 }, style: nodeStyle },
  { id: '11', data: { label: '📆 Get Events' }, position: { x: 1200, y: 250 }, style: nodeStyle },
  { id: '12', data: { label: '📆 Agendar Evento' }, position: { x: 1400, y: 250 }, style: nodeStyle },
  { id: '13', data: { label: '📆 Cancelar Evento' }, position: { x: 1400, y: 250 }, style: nodeStyle },
  { id: '14', data: { label: '📤 WhatsApp Business Cloud' }, position: { x: 1600, y: 10 },  sourcePosition: 'right', targetPosition: 'left', style: nodeStyle },
];

const nodeDescriptions = {
  '1': 'Detecta mensajes entrantes en WhatsApp.',
  '2': 'Evalúa condiciones del mensaje.',
  '3': 'Procesa fecha/hora inicial.',
  '4': 'Reprocesa o convierte hora final.',
  '5': 'Prepara los datos procesados para el agente.',
  '6': 'Dispara el flujo en horarios específicos.',
  '7': 'Formatea datos desde el flujo programado.',
  '8': 'Combina entradas en una sola.',
  '9': 'Agente inteligente que interactúa con el usuario.',
  '10': 'Memoria contextual (Postgres).',
  '11': 'Consulta todos los eventos del calendario.',
  '12': 'Agrega nuevos eventos al calendario.',
  '13': 'Elimina eventos del calendario.',
  '14': 'Responde al usuario vía WhatsApp.',
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
  { id: 'e9-14', source: '9', target: '14' },
];

function DiagramaFlujoInteractivo() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  // 🧠 Persistencia de nodos en localStorage
  useEffect(() => {
    const saved = localStorage.getItem('saved-nodes');
    if (saved) setNodes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('saved-nodes', JSON.stringify(nodes));
  }, [nodes]);

  const onNodeClick = useCallback((_, node) => {
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
            fitView
            panOnDrag
            zoomOnScroll
          >
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </div>

        {/* 🧠 Panel lateral con descripción */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              key="sidebar"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-80 bg-white border-l border-gray-200 p-6 shadow-lg"
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
