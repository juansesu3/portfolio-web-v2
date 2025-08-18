import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import {
  FaWhatsapp,
  FaRobot,
  FaCalendarAlt,
  FaEdit,
  FaClock,
  FaBolt,
  FaCodeBranch,
  FaBrain,
  FaRegCalendarCheck,
  FaRegCalendarTimes,
  FaComments,
} from 'react-icons/fa';

const iconMap = {
  'WhatsApp Trigger': { icon: <FaWhatsapp />, color: '#25D366' },
  'If': { icon: <FaCodeBranch />, color: '#4B5563' },
  'Date & Time': { icon: <FaClock />, color: '#F59E0B' },
  'Date & Time1': { icon: <FaClock />, color: '#F59E0B' },
  'Edit Fields4': { icon: <FaEdit />, color: '#3B82F6' },
  'Edit Fields3': { icon: <FaEdit />, color: '#3B82F6' },
  'Schedule Trigger': { icon: <FaBolt />, color: '#F43F5E' },
  'Merge': { icon: <FaCodeBranch />, color: '#6366F1' },
  'AI Agent': { icon: <FaRobot />, color: '#8B5CF6' },
  'Memory': { icon: <FaBrain />, color: '#14B8A6' },
  'OpenAI Model': { icon: <FaBrain />, color: '#06B6D4' },
  'Get Events': { icon: <FaCalendarAlt />, color: '#10B981' },
  'Agendar Evento': { icon: <FaRegCalendarCheck />, color: '#0EA5E9' },
  'Cancelar Evento': { icon: <FaRegCalendarTimes />, color: '#EF4444' },
  'WhatsApp Business Cloud': { icon: <FaComments />, color: '#1D4ED8' },
};

interface CustomNodeData {
  label: string;
  targetPosition?: Position;
  sourcePosition?: Position;
}

const CustomNode = ({ data }: { data: CustomNodeData }) => {
  const info = iconMap[data.label as keyof typeof iconMap] || {};
  const { icon, color } = info;

  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm text-center w-[180px] text-sm relative">
      <div className="flex flex-col justify-center items-center gap-2 font-medium">
        {icon && <span className="text-lg" style={{ color }}>{icon}</span>}
        <span>{data.label}</span>
      </div>

      <Handle
        type="target"
        position={data.targetPosition || Position.Left}
        style={{ background: '#555' }}
      />
      <Handle
        type="source"
        position={data.sourcePosition || Position.Right}
        style={{ background: '#555' }}
      />
    </div>
  );
};

export default CustomNode;
