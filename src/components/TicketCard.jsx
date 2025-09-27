import React from "react";

const TicketCard = ({ ticket, onClick }) => {
    const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-700";
      case "In-Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Closed":
        return "bg-gray-200 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "HIGH PRIORITY":
        return "text-red-500 font-bold";
      case "MEDIUM PRIORITY":
        return "text-yellow-500 font-bold";
      case "LOW PRIORITY":
        return "text-green-500 font-bold";
      default:
        return "text-gray-500";
    }
  };
  return (
    <div
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition w-[400px] mx-auto"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{ticket.title}</h2>
            <span
              className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                ticket.status
              )}`}
            >
              {ticket.status}
            </span>
          </div>
      <p className="text-gray-600 mb-2">{ticket.description}</p>
      <div className="flex justify-between">
        <div className="flex justify-between items-center  gap-1.5">
            <div>
                <p className="text-sm text-gray-400"><strong></strong> {ticket.id}</p> 
            </div> 
            <div className="flex items-center justify-between text-sm">
            <span className={getPriorityColor(ticket.priority)}>
              {ticket.priority}
            </span>
            </div>
        </div>
        
      <div className="flex gap-1.5">
        <div>
          <p className="text-sm text-gray-400"><strong></strong> {ticket.customer}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400"><strong></strong><span role="img" aria-label="calendar">
                📅
              </span> {ticket.createdAt}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TicketCard;