import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

export const addSampleJobs = async (req, res) => {
  await Job.insertMany([
    {
      title: "Backend Developer",
      company: "TCS",
      location: "Ahmedabad",
      description: "Node.js backend role"
    },
    {
      title: "MERN Stack Developer",
      company: "Infosys",
      location: "Pune",
      description: "MERN role"
    }
  ]);
  res.json({ message: "Sample jobs added" });
};
