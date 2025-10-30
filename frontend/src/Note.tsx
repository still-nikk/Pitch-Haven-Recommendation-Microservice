import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";
import ReactMarkdown from "react-markdown";

type NoteProps = {
  onDelete: (id: string) => void;
  currentUser?: any;
};

export function Note({ onDelete, currentUser }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();
  console.log("Printing currentUser from Note: " + currentUser.user_metadata);
  console.log("Printing username from Note: " + note.username);

  const isOwner = currentUser?.user_metadata?.name === note.username;

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            {isOwner && (
              <>
                <Link to={`/${note.id}/edit`}>
                  <Button variant="primary">Edit</Button>
                </Link>
                <Button
                  onClick={() => {
                    onDelete(note.id);
                    navigate("/");
                  }}
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </>
            )}
            <Link to="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
}
