import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "./App";
import { v4 as uuidV4 } from "uuid";
import "./styles/NoteFormStyles.css";
import { StylesConfig } from "react-select";

// --- THIS OBJECT IS THE ONLY THING THAT HAS CHANGED ---
// I've updated the colors to match your dark theme CSS.
const customSelectStyles: StylesConfig = {
  // Styles the main input box
  control: (baseStyles, state) => ({
    ...baseStyles,
    height: "40px",
    backgroundColor: "transparent", // Match CSS
    border: "0.5px solid", // Let borderColor handle the color
    borderColor: state.isFocused ? "#e81cff" : "#414141", // Match CSS focus/blur
    borderRadius: "8px",
    boxShadow: "none", // Removes the blue glow
    "&:hover": {
      borderColor: state.isFocused ? "#e81cff" : "#414141", // Keep consistent
    },
  }),

  // Styles the text you type
  input: (baseStyles) => ({
    ...baseStyles,
    color: "#fff", // Match CSS
  }),

  // Styles the placeholder text
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "#717171", // Match CSS label color
  }),

  // Styles the selected tags
  multiValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#313131", // Match button color
    borderRadius: "4px",
  }),

  // Styles the text *inside* selected tags
  multiValueLabel: (baseStyles) => ({
    ...baseStyles,
    color: "#717171", // Match button text color
    fontWeight: "600",
  }),

  // Styles the 'x' remove button on a tag
  multiValueRemove: (baseStyles, state) => ({
    ...baseStyles,
    color: "#717171",
    "&:hover": {
      backgroundColor: "#414141",
      color: "#fff",
    },
  }),

  // Styles the dropdown menu container
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#212121", // Match form background
    border: "1px solid #414141",
  }),

  // Styles the options in the dropdown menu
  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? "#fff" : "#717171",
    backgroundColor: state.isFocused ? "#313131" : "transparent",
  }),

  // Styles the text of the selected value (for single-select)
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "#fff",
  }),
};
// --- END OF CHANGES ---

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

export function NoteForm({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  markdown = "",
  tags = [],
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });

    navigate("..");
  }

  return (
    // CHANGE: Added .form-container wrapper
    <div className="form-container">
      {/* CHANGE: Added .form className and removed the outer Stack */}
      <Form onSubmit={handleSubmit} className="form">
        <Row>
          <Col>
            {/* CHANGE: Added .form-group className */}
            <Form.Group controlId="title" className="form-group">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required defaultValue={title} />
            </Form.Group>
          </Col>
          <Col>
            {/* CHANGE: Added .form-group className */}
            <Form.Group controlId="tags" className="form-group">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                styles={customSelectStyles} // This prop now uses the dark styles
                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label };
                  onAddTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag: any) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>

        {/* CHANGE: Added .form-group className */}
        <Form.Group controlId="markdown" className="form-group">
          {/* CHANGE: Label text changed as requested */}
          <Form.Label>Pitch</Form.Label>
          <Form.Control
            defaultValue={markdown}
            required
            as="textarea"
            ref={markdownRef}
            rows={15}
          />
        </Form.Group>

        {/* CHANGE: Kept Stack for button layout, but changed Buttons */}
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          {/* CHANGE: Removed variant, added new custom className */}
          <Button type="submit" className="uiverse-btn-primary">
            Save
          </Button>
          <Link to="..">
            {/* CHANGE: Removed variant, added new custom className */}
            <Button type="button" className="uiverse-btn-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Form>
    </div>
  );
}
