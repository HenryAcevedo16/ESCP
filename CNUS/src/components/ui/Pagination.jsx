import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2 mt-12 mb-8">
      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0a1a3a] text-white text-sm font-medium">
        1
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors">
        2
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors">
        3
      </button>

      <span className="text-gray-400">...</span>

      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors">
        8
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
