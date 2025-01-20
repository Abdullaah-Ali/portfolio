import React from 'react';
import { Coffee } from 'lucide-react';

const ProjectCTA = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 flex items-center justify-between border border-blue-200 hover:shadow-md transition-all">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          Start a project
        </h2>
        <p className="text-gray-700">
          Interested in working together? We should queue up a time to chat. I'll buy the coffee.
        </p>
      </div>
      <button className="ml-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 transition-all shadow-sm hover:shadow">
        <Coffee size={18} />
        Let's do this
      </button>
    </div>
  );
};

export default ProjectCTA;