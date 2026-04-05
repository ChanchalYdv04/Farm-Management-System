// farmerData.js

// Simulated database of farmers with all their info
const farmerDatabase = {
    "F001": {
        farmerDetails: [
            {
              id: "F001",
              name: "John Deo",
              Pnum: "555-123-4567",
              Add: "123 Rural Rd",
            }
          ],
        
        cropDetails: [
        {
          id: "C001",
          name: "Wheat",
          yield: "500 kg",
          planting: "2024-04-01",
          harvesting: "2024-10-15"
        }
      ],

        harvesterDetails: [
        {
          id: "H001",
          name: "Emily Clark",
          Pnum: "555-111-2222",
          email: "harv1@email.com"
        }
      ],

        plotDetails: [
        {
          id: "P001",
          size: "50",
          soil: "Loamy",
          Add: "Lowa"
        }
      ],

        maintenanceDetails: [
        {
          id: "M001",
          pid: "P001",
          eid: "E001",
          cost: "$ 150.00",
          date: "2024-01-10"
        }
      ],

      livestockDetails: [
        {
          id: "A001",
          species: "Cow",
          breed: "Holstein",
          health: "Healthy",
          schedule: "Twice Daily",
          pid:"P001",
          fid:"F001"
        }
      ],

      toolDetails: [
        {
          id: "E001",
          type: "Tractor",
          date: "2017-06-09",
          fid:"F001"
        }
      ],

    },



    "F002":{
    farmerDetails: [
        {
          id: "F002",
          name: "Sarah Smith ",
          Pnum: "555-987-6543",
          Add: "456 Farm Ln",
        }
      ],
    
    cropDetails: [
    {
      id: "C002",
      name: "Corn",
      yield: "600 kg",
      planting: "2024-05-10",
      harvesting: "2024-09-20"
    }
  ],

    harvesterDetails: [
    {
      id: "H002",
      name: "Tom Harris",
      Pnum: "555-333-4444",
      email: "harv2@email.com"
    }
  ],

    plotDetails: [
    {
      id: "P002",
      size: "30",
      soil: "Sandy",
      Add: "Nebraska"
    }
  ],

    maintenanceDetails: [
    {
      id: "M002",
      pid: "P002",
      eid: "E002",
      cost: "$ 200.00",
      date: " 2024-02-15"
    }
  ],

  livestockDetails: [
    {
      id: "A002",
      species: "Sheep",
      breed: "Merino",
      health: "Sick",
      schedule: "Once Daily",
      pid:"P002",
      fid:"F002"
    }
  ],

  toolDetails: [
    {
      id: "E002",
      type: "Plow",
      date: "2018-09-20 ",
      fid:"F002"
    }
  ],

},


    "F003": {
        farmerDetails: [
            {
              id: "F003",
              name: "Mike Brown",
              Pnum: "555-456-7890",
              Add: "789 Agri St",
            }
          ],
        
        cropDetails: [
        {
          id: "C003",
          name: "Soybean",
          yield: "450 kg",
          planting: "2024-06-15",
          harvesting: "2024-11-01"
        }
      ],

        harvesterDetails: [
        {
          id: "H003",
          name: "Lisa Green",
          Pnum: "555-555-6666",
          email: "harv3@email.com"
        }
      ],

        plotDetails: [
        {
          id: "P003",
          size: "70",
          soil: "Clayey",
          Add: "Kansas"
        }
      ],

        maintenanceDetails: [
        {
          id: "M003",
          pid: "P003",
          eid: "E003",
          cost: "$ 175.00",
          date: "2024-03-20"
        }
      ],

      livestockDetails: [
        {
          id: "A003",
          species: "Pig",
          breed: "Yorkshire",
          health: "Healthy",
          schedule: "Three times Daily",
          pid:"P003",
          fid:"F003"
        }
      ],

      toolDetails: [
        {
          id: "E003",
          type: "Seeder",
          date: " 2018-06-15",
          fid:"F003"
        }
      ],

    },
  };
  
  // Exporting for usage in other scripts
  window.farmerDatabase = farmerDatabase;
  