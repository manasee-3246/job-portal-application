
// controllers/applicationController.js
import Application from "../models/Application.js";

export const applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const resume = req.file.path;

    const application = new Application({
      user: req.user.id,
      job: jobId,
      resume,
    });
    await application.save();

    res.json({ message: "Job applied successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const myApplications = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user.id }).populate("job");
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

