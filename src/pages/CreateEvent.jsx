import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { localHost, renderAPI } from "../constants";
import { ArrowLeft } from "lucide-react";
import { AdminContext } from "../context/AdminContext";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AdminContext);

  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    type: "purchase",
    startDate: "",
    endDate: "",
    requirements: {
      minPurchaseAmount: "",
      specificProducts: [],
      productCategories: [],
      referralCount: "",
    },
    rewards: {
      basePoints: "",
      bonusMultiplier: "1",
    },
    maxCompletionsPerUser: "1",
    totalMaxCompletions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setEventData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setEventData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !eventData.name ||
      !eventData.startDate ||
      !eventData.endDate ||
      !eventData.rewards.basePoints
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      // Clean up empty fields
      const cleanedData = {
        ...eventData,
        requirements: {
          ...(eventData.requirements.minPurchaseAmount && {
            minPurchaseAmount: Number(eventData.requirements.minPurchaseAmount),
          }),
          ...(eventData.requirements.referralCount && {
            referralCount: Number(eventData.requirements.referralCount),
          }),
        },
        rewards: {
          basePoints: Number(eventData.rewards.basePoints),
          bonusMultiplier: Number(eventData.rewards.bonusMultiplier),
        },
        maxCompletionsPerUser: Number(eventData.maxCompletionsPerUser),
        ...(eventData.totalMaxCompletions && {
          totalMaxCompletions: Number(eventData.totalMaxCompletions),
        }),
      };

      await axios.post(
        `${
          location.origin.includes("localhost") ? localHost : renderAPI
        }/api/events`,
        cleanedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Event created successfully!");
      navigate("/admin/events");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create event");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/admin/events")}
            className="p-2 hover:bg-gray-800 rounded-lg transition"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-bold">Create New Event</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-gray-900 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Event Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={eventData.name}
                onChange={handleChange}
                placeholder="e.g., Summer Fitness Challenge"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleChange}
                placeholder="Describe the event..."
                rows="3"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Event Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="type"
                  value={eventData.type}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="purchase">Purchase</option>
                  <option value="referral">Referral</option>
                  <option value="milestone">Milestone</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="datetime-local"
                  name="startDate"
                  value={eventData.startDate}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  End Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="datetime-local"
                  name="endDate"
                  value={eventData.endDate}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-gray-900 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <p className="text-sm text-gray-400 mb-4">
              What does a user need to do to complete this event?
            </p>

            {eventData.type === "purchase" && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Minimum Purchase Amount (₦)
                </label>
                <input
                  type="number"
                  name="requirements.minPurchaseAmount"
                  value={eventData.requirements.minPurchaseAmount}
                  onChange={handleChange}
                  placeholder="e.g., 10000"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            )}

            {eventData.type === "referral" && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Number of Referrals Required
                </label>
                <input
                  type="number"
                  name="requirements.referralCount"
                  value={eventData.requirements.referralCount}
                  onChange={handleChange}
                  placeholder="e.g., 3"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            )}
          </div>

          {/* Rewards */}
          <div className="bg-gray-900 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Rewards</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Base Points (XP) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="rewards.basePoints"
                  value={eventData.rewards.basePoints}
                  onChange={handleChange}
                  placeholder="e.g., 150"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Fixed XP reward for completing this event
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Bonus Multiplier
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="rewards.bonusMultiplier"
                  value={eventData.rewards.bonusMultiplier}
                  onChange={handleChange}
                  placeholder="e.g., 1.5"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Multiplier for purchase XP (e.g., 2.0 = double XP)
                </p>
              </div>
            </div>
          </div>

          {/* Limits */}
          <div className="bg-gray-900 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Completion Limits</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Max Completions Per User
                </label>
                <input
                  type="number"
                  name="maxCompletionsPerUser"
                  value={eventData.maxCompletionsPerUser}
                  onChange={handleChange}
                  placeholder="e.g., 1"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  How many times can one user claim this event?
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Total Max Completions (Optional)
                </label>
                <input
                  type="number"
                  name="totalMaxCompletions"
                  value={eventData.totalMaxCompletions}
                  onChange={handleChange}
                  placeholder="e.g., 100"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Global limit (first 100 users only, etc.)
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50 transition"
            >
              {loading ? "Creating..." : "Create Event"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/events")}
              className="px-8 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
