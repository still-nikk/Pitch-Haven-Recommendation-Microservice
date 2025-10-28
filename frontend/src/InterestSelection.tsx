import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import "./styles/InterestSelectionStyles.css"; // <-- Import the new CSS

type InterestSelectionProps = {
  currentUser: any;
  currentDbUser: any;
  updateUserInterests: (selectedIds: string[]) => Promise<void>;
};

type Interest = {
  id: string;
  label: string;
};

const InterestSelection: React.FC<InterestSelectionProps> = ({
  currentUser,
  currentDbUser,
  updateUserInterests,
}) => {
  const [interests, setInterests] = useState<Interest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  // Fetch all available interests
  useEffect(() => {
    async function fetchInterests() {
      try {
        const res = await fetch("http://localhost:8080/tags");
        if (!res.ok) throw new Error("Failed to fetch interests");
        const data: Interest[] = await res.json();
        setInterests(data.map((i) => ({ ...i, id: i.id.toString() })));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchInterests();
  }, []);

  // Fetch the user's already-selected interests
  useEffect(() => {
    async function fetchUserSelectedInterests() {
      if (!currentDbUser) return;

      try {
        const res = await fetch(
          `http://localhost:8080/users/${currentDbUser.id}/tags`
        );
        if (!res.ok) throw new Error("Failed to fetch user interests");
        const userTags: Interest[] = await res.json();
        setSelectedIds(userTags.map((t) => t.id.toString()));
      } catch (err) {
        console.error(err);
      }
    }
    fetchUserSelectedInterests();
  }, [currentDbUser]);

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleSave = async () => {
    if (!currentUser || !currentDbUser) {
      alert("User not logged in");
      return;
    }
    if (selectedIds.length < 3) return;
    setSaving(true);
    try {
      await updateUserInterests(selectedIds);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Failed to save interests. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Select Your Interests</h2>
      <p className="text-center text-muted mb-4">
        Choose the topics that interest you the most. This helps us personalize
        your experience.
      </p>
      {selectedIds.length < 3 && (
        <p className="text-danger text-center mt-2">
          Please select at least 3 interests to continue.
        </p>
      )}

      {/* --- MODIFIED SECTION --- */}
      <div className="interest-grid">
        {interests.map((interest) => (
          <div className="checklist-item" key={interest.id}>
            <input
              value={interest.id}
              name="interest-group"
              type="checkbox"
              id={`check-${interest.id}`}
              checked={selectedIds.includes(interest.id)}
              onChange={() => toggleSelection(interest.id)}
            />
            <label htmlFor={`check-${interest.id}`}>{interest.label}</label>
          </div>
        ))}
      </div>
      {/* --- END MODIFIED SECTION --- */}

      <div className="text-center mt-4">
        <Button
          variant="dark"
          onClick={handleSave}
          disabled={selectedIds.length < 3 || saving}
        >
          {saving ? "Saving..." : "Save & Continue"}
        </Button>
      </div>
    </Container>
  );
};

export default InterestSelection;
