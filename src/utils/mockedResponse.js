export const mockedRedisResponse = {
  "/data/service?code=HSI?package=Supreme": {
    code: "HSI",
    package: "Supreme",
    uploadSpeed: "500 mbps",
    downloadSpeed: "500 mbps",
  },
  "/data/service?code=OP?package=Deluxe": {
    code: "OP",
    package: "Deluxe",
    uploadSpeed: 150,
    downloadSpeed: 20,
  },
};

export const mockedBFF = {
  "/bff/assignment/19123135651": {
    id: 19123135651,
    technicianId: "C993366",
    startDate: "2022-06-10T02:00:00",
    endDate: "2022-06-10T04:00:00",
    status: "In Progress",
    remarks:
      "Active construction site; please ensure to inspect the are for safety before beginning work.",
    services: [
      {
        id: 12544,
        type: "High Speed Internet",
        code: "HSI",
        package: "Supreme",
      },
      {
        id: 12543,
        type: "Optik TV",
        code: "OP",
        package: "Deluxe",
      },
    ],
    location: {
      lat: 53.547,
      long: 113.4978,
      name: "Roger's Place",
      city: "Edmonton",
      province: "Alberta",
      postalCode: "T5J 0H6",
    },
  },
  "/bff/technician/C993366": {
    technicianId: "C993366",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@telus.com",
  },
};
