// import React from 'react';

// const AddAsset = () => {
//   return (
//     <div style={{ padding: '2rem', textAlign: 'center' }}>
//       <h2>Add Asset Page Coming Soon</h2>
//       <p>This page will allow you to add new assets in the future.</p>
//     </div>
//   );
// };

// export default AddAsset; 







import React, { useState } from 'react';
import './AddAsset.css';

function AddAsset() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  
  const energyAssets = [
    {
      id: 1,
      title: "EV",
      description: "Electric vehicle charging infrastructure for sustainable transportation.",
      icon: "fa-car-battery",
      iconColor: "#3b82f6",
      color: "blue-500",
      // Placeholder for background photo - replace with actual image path in production
      backgroundImage: "/images/EV.jpg"
    },
    {
      id: 2,
      title: "Trees",
      description: "Reforestation projects for carbon sequestration and biodiversity.",
      icon: "fa-tree",
      iconColor: "#16a34a",
      color: "green-600",
      backgroundImage: "/images/forest.jpg"
    },
    {
      id: 3,
      title: "Solar",
      description: "Photovoltaic systems for clean, renewable energy generation.",
      icon: "fa-solar-panel",
      iconColor: "#eab308",
      color: "yellow-500",
      backgroundImage: "/images/Solar.jpg"
    },
    {
      id: 4,
      title: "Windmills",
      description: "Wind turbines harnessing natural air flow for electricity production.",
      icon: "fa-wind",
      iconColor: "#60a5fa",
      color: "blue-400",
      backgroundImage: "/images/windmill.jpg"
    },
    {
      id: 5,
      title: "Thermal Power",
      description: "Heat-based electricity generation facilities using various fuel sources.",
      icon: "fa-industry",
      iconColor: "#f97316",
      color: "orange-500",
      backgroundImage: "/images/thermal.jpg"
    },
    {
      id: 6,
      title: "Hydropower",
      description: "Water-driven turbines generating renewable electricity from flowing water.",
      icon: "fa-water",
      iconColor: "#2563eb",
      color: "blue-600",
      backgroundImage: "/images/hydro.jpg"
    },
    {
      id: 7,
      title: "Carbon Capture",
      description: "Technologies that capture and store carbon dioxide to reduce emissions.",
      icon: "fa-filter",
      iconColor: "#4b5563",
      color: "gray-600",
      backgroundImage: "/images/ccs.jpg"
    }
  ];

  const handleAddAsset = (title) => {
    alert(`Adding new ${title} asset! In a real application, this would open a form.`);
  };

  const handleClose = () => {
    setIsPopupVisible(false);
    alert('Popup closed! In a real application, this would dismiss the popup.');
    // Reset visibility for demo purposes
    setTimeout(() => setIsPopupVisible(true), 500);
  };

  // Helper function to get button class based on color
  const getButtonClass = (color) => {
    switch(color) {
      case 'blue-500': return 'blue-btn';
      case 'green-600': return 'green-btn';
      case 'yellow-500': return 'yellow-btn';
      case 'blue-400': return 'light-blue-btn';
      case 'orange-500': return 'orange-btn';
      case 'blue-600': return 'dark-blue-btn';
      case 'gray-600': return 'gray-btn';
      default: return 'blue-btn';
    }
  };

  if (!isPopupVisible) return null;

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-header">
          <h1>Energy Asset Management</h1>
          <button className="close-btn" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="card-grid">
          {energyAssets.map(asset => (
            <div key={asset.id} className="card">
              {/* Background placeholder - replace with actual images in production */}
              <div 
                className="card-bg" 
                style={{ 
                  backgroundImage: `url(${asset.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              
              <div className="card-content">
                <div className="card-header">
                  <i 
                    className={`fas ${asset.icon}`} 
                    style={{ color: asset.iconColor }}
                  ></i>
                  <h2>{asset.title}</h2>
                </div>
                <p>{asset.description}</p>
                <button 
                  className={`add-btn ${getButtonClass(asset.color)}`} 
                  onClick={() => handleAddAsset(asset.title)}
                >
                  <i className="fas fa-plus"></i> Add Asset
                </button>
              </div>
            </div>
          ))}
          
          <div className="card add-new-card">
            <div className="card-content">
              <div className="add-icon">
                <i className="fas fa-plus"></i>
              </div>
              <h2>Add New</h2>
              <p>Create a custom energy asset type</p>
              <button 
                className="add-btn blue-btn" 
                onClick={() => handleAddAsset('New Asset Type')}
              >
                <i className="fas fa-plus"></i> Create Asset Type
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAsset;


