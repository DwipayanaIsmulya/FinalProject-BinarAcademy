import { Modal, Container } from "react-bootstrap";
import PropType from "prop-types";

const CourseVideo = ({ showCourse, closeCourseModal, name, courseKey }) => {
  return (
    <Container fluid="0">
      <Modal show={showCourse} onHide={closeCourseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={courseKey}
            frameBorder="0"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Container>
  );
};

CourseVideo.propTypes = {
  showCourse: PropType.any,
  closeCourseModal: PropType.any,
  name: PropType.any,
  courseKey: PropType.any,
};

export default CourseVideo;
