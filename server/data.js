import bcrypt from "bcryptjs";

const data = {
  users_mentor: [
    {
      name: "Sujoy Seal",
      email: "sujoyrgrsea33l@gmail.com",
      password: bcrypt.hashSync("tester123", 8),
      mobilenumber: "9064729868",
      companyName: "Conjuring",
      employeeIDNumber: "22",
      address: "Durgapur",
      employeeIDimage: "898",
      governmentIDimage: "99",
      isAdmin: false,
    },
    {
      name: "Sujoy Seal",
      email: "sujoysergera33l@gmail.com",
      password: bcrypt.hashSync("tester123", 8),
      mobilenumber: "9064729868",
      companyName: "Conjuring",
      employeeIDNumber: "22",
      address: "Durgapur",
      employeeIDimage: "898",
      governmentIDimage: "99",
      isAdmin: false,
    },
    {
      name: "Sujoy Seal",
      email: "sujoysesdfdsa33l@gmail.com",
      password: bcrypt.hashSync("tester123", 8),
      mobilenumber: "9064729868",
      companyName: "Conjuring",
      employeeIDNumber: "22",
      address: "Durgapur",
      employeeIDimage: "898",
      governmentIDimage: "99",
      isAdmin: false,
    },
  ],
  users_mentee: [
    {
      name: "Tomar Husaiin",
      email: "tomasfdsdsr@gmail.com",
      password: bcrypt.hashSync("tester123", 8),
      mobilenumber: "9066629868",
      instituteName: "erConjuring",
      enrollmentNumber: "222",
      address: "Himachal",
    },

    {
      name: "Rima Choudhury",
      email: "chrima@gmail.com",
      password: bcrypt.hashSync("tester123", 8),
      mobilenumber: "906779868",
      instituteName: "lo",
      enrollmentNumber: "222",
      address: "Himachal",
    },

    {
      name: "Shivangi Mehta",
      email: "mehtashivangi@gmail.com",
      password: bcrypt.hashSync("tester123", 8),
      mobilenumber: "9066629800",
      instituteName: "ty",
      enrollmentNumber: "922",
      address: "UK",
    },
  ],
};

export default data;
