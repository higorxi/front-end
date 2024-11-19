import React from 'react';
import { Info } from 'lucide-react';

export default function InfoBox({text}:{text : string}){
  return (
    <div className="flex items-start border border-gray-300 rounded-lg p-3">
      <Info className=" mr-3" size={20} />
      <p className="text-sm font-normal">{text}</p>
    </div>
  );
};

