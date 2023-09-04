import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col className="footer-copyright text-center text-muted py-3">
                    <p>
                        E-commerce react project &copy; {currentYear}
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer