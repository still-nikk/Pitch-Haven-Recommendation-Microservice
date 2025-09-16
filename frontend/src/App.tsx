import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import { NewNote } from "./NewNote";
import { NoteList } from "./NoteList";
import { NoteLayout } from "./NoteLayout";
import { Note } from "./Note";
import { EditNote } from "./EditNote";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

function App() {
  const [notes, setNotes] = useState<RawNote[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch notes and tags from backend
  useEffect(() => {
    async function fetchNotesAndTags() {
      try {
        const [notesRes, tagsRes] = await Promise.all([
          fetch("http://localhost:8080/notes"),
          fetch("http://localhost:8080/tags"),
        ]);

        const notesData: {
          id: number;
          title: string;
          markdown: string;
          tags: { id: number; label: string }[];
        }[] = await notesRes.json();

        const tagsData: { id: number; label: string }[] = await tagsRes.json();

        const rawNotes: RawNote[] = notesData.map((note) => ({
          id: note.id.toString(),
          title: note.title,
          markdown: note.markdown,
          tagIds: note.tags.map((tag) => tag.id.toString()),
        }));
        setNotes(rawNotes);

        const formattedTags: Tag[] = tagsData.map((tag) => ({
          id: tag.id.toString(),
          label: tag.label,
        }));
        setTags(formattedTags);

        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch notes or tags:", err);
        setLoading(false);
      }
    }
    fetchNotesAndTags();
  }, []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => ({
      ...note,
      tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
    }));
  }, [notes, tags]);

  // Create Note
  async function onCreateNote({ tags: noteTags, ...data }: NoteData) {
    try {
      const res = await fetch("http://localhost:8080/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          tags: noteTags.map((tag) => ({
            id: Number(tag.id),
            label: tag.label,
          })),
        }),
      });

      if (!res.ok) throw new Error("Failed to create note");

      const note: {
        id: number;
        title: string;
        markdown: string;
        tags: { id: number; label: string }[];
      } = await res.json();

      setNotes((prev) => [
        ...prev,
        {
          id: note.id.toString(),
          title: note.title,
          markdown: note.markdown,
          tagIds: note.tags.map((tag) => tag.id.toString()),
        },
      ]);

      setTags((prev) => {
        const newTags = note.tags.map((tag) => ({
          id: tag.id.toString(),
          label: tag.label,
        }));
        const merged = [...prev];
        newTags.forEach((t) => {
          if (!merged.some((pt) => pt.id === t.id)) merged.push(t);
        });
        return merged;
      });
    } catch (err) {
      console.error("Error creating note:", err);
    }
  }

  // Update Note
  async function onUpdateNote(
    id: string,
    { tags: noteTags, ...data }: NoteData
  ) {
    try {
      const res = await fetch(`http://localhost:8080/notes/${Number(id)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          tags: noteTags.map((tag) => ({
            id: Number(tag.id),
            label: tag.label,
          })),
        }),
      });

      if (!res.ok) throw new Error("Failed to update note");

      const note: {
        id: number;
        title: string;
        markdown: string;
        tags: { id: number; label: string }[];
      } = await res.json();

      setNotes((prev) =>
        prev.map((n) =>
          n.id === id
            ? {
                id: note.id.toString(),
                title: note.title,
                markdown: note.markdown,
                tagIds: note.tags.map((tag) => tag.id.toString()),
              }
            : n
        )
      );

      setTags((prev) => {
        const newTags = note.tags.map((tag) => ({
          id: tag.id.toString(),
          label: tag.label,
        }));
        const merged = [...prev];
        newTags.forEach((t) => {
          if (!merged.some((pt) => pt.id === t.id)) merged.push(t);
        });
        return merged;
      });
    } catch (err) {
      console.error("Error updating note:", err);
    }
  }

  // Delete Note
  async function onDeleteNote(id: string) {
    try {
      const res = await fetch(`http://localhost:8080/notes/${Number(id)}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete note");
      setNotes((prev) => prev.filter((note) => note.id !== id));
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  }

  // Add Tag
  async function addTag(tag: Tag) {
    try {
      const res = await fetch("http://localhost:8080/tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: tag.label }),
      });
      if (!res.ok) throw new Error("Failed to add tag");
      const data: { id: number; label: string } = await res.json();
      setTags((prev) => [
        ...prev,
        { id: data.id.toString(), label: data.label },
      ]);
    } catch (err) {
      console.error("Error adding tag:", err);
    }
  }

  // Update Tag
  async function updateTag(id: string, label: string) {
    try {
      const res = await fetch(`http://localhost:8080/tags/${Number(id)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label }),
      });
      if (!res.ok) throw new Error("Failed to update tag");
      const data: { id: number; label: string } = await res.json();
      setTags((prev) =>
        prev.map((tag) =>
          tag.id === id ? { id: data.id.toString(), label: data.label } : tag
        )
      );
    } catch (err) {
      console.error("Error updating tag:", err);
    }
  }

  // Delete Tag
  async function deleteTag(id: string) {
    try {
      const res = await fetch(`http://localhost:8080/tags/${Number(id)}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete tag");
      setTags((prev) => prev.filter((tag) => tag.id !== id));
    } catch (err) {
      console.error("Error deleting tag:", err);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <Container className="my-4">
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              notes={notesWithTags}
              availableTags={tags}
              onUpdateTag={updateTag}
              onDeleteTag={deleteTag}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route
            path="edit"
            element={
              <EditNote
                onSubmit={onUpdateNote}
                onAddTag={addTag}
                availableTags={tags}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
