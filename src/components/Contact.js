import React,{useState} from "react";
import { Container, Row, Col, Accordion,Form,Button } from "react-bootstrap";

const Contact = () => {
    const[address,setAddress] = useState(true);
  return (
    <div>
      <div
        className=" py-4 text-black text-center"
        style={{ background: "rgb(193, 111, 209)" }}
      >
        <h2 className="display-4">FREQUENTLY ASKED QUESTIONS</h2>
        <h6>
          Please contact us if you cannot find an answer to your question.
        </h6>

        <Accordion className="mx-auto my-5" style={{ maxWidth: "60rem" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header
              className=" text-black"
              style={{ background: "rgb(193, 111, 209)" }}
            >
              Accordion Item #1
            </Accordion.Header>
            <Accordion.Body
              className=" text-black"
              style={{ background: "rgb(193, 111, 209)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header
              className=" text-black"
              style={{ background: "rgb(193, 111, 209)" }}
            >
              Accordion Item #2
            </Accordion.Header>
            <Accordion.Body
              className=" text-black"
              style={{ background: "rgb(193, 111, 209)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
          {
            address?(
                <div className=" mt-5">
              <h2 style={{ color: "rgb(193, 111, 209)" }}>CONTACT US</h2>
              <p
                className="mt-5 fs-xl-5"
                style={{ color: "rgb(87, 87, 87)", fontSize: "1.1rem" }}
              >
                Let's get in touch with Mr. Manoj Agrawal or follow his
                inspiring journey, please visit our page for direct
                communication, and don't forget to connect with him on your
                favorite social media platforms to stay updated on his impactful
                work and insights.
              </p>
              <p>
                <h5 className="mt-4">manojagrawal.in</h5>
                {/* <br /> */}
                <p
                  className="mt-4"
                  style={{ color: "rgb(87, 87, 87)", marginTop: "1rem" }}
                >
                  Sheopur, Madhya Pradesh, India
                </p>
                <p className="mt-4" style={{ color: "rgb(193, 111, 209)" }}>
                  9425419100
                </p>
                <br />
                <h3>Hours:</h3>
                <br />
                <div style={{ color: "rgb(87, 87, 87)" }}>
                  <p>Today: Closed</p>
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </p>
              <Button onClick={()=>{
                setAddress(false);
              }}
               style={{background:"rgb(223, 152, 237)",border:"none",color:"black",padding:"1rem"}}
              >
              {/* <h6 className="px-3"> */}
              FOR QUESTIONS OR QUOTES:
              {/* </h6> */}
              </Button>
            </div>
            ):(
                <div className="mt-5">
            <h2>FOR QUESTIONS OR QUOTES:</h2>
            <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder=" Name"
                style={{
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  padding:"0.6rem"
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder=" Email"
                style={{
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  padding:"0.6rem"

                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder=" Message"
                style={{
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  padding:"0.6rem"

                }}
              />
            </Form.Group>
            <p className="text-center mt-3" >
            This site is protected by reCAPTCHA and the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration:"none"}}
            >
              Google Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration:"none"}}
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
          <div style={{display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center",}}>

            <Button  type="submit" className="me-2" style={{background:"rgb(223, 152, 237)",border:"none",color:"black",padding:"1rem"}}
>
              Send
            </Button>
            <Button type="button" style={{background:"white",border:"none"}}>
              <p style={{color:"rgb(223, 152, 237)",borderBottom:"2px solid rgb(223, 152, 237)"}} onClick={()=>{
                setAddress(true)
              }}>Cancel</p>
            </Button>
          </div>
          </Form>
          </div>
            )
          }
          </Col>
          <Col xs={12} lg={6}>
            <div
           className="embed-responsive embed-responsive-16by9" >
              <p className="w-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10897.073531950675!2d76.69151640753091!3d25.67256394946426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397030fd21ba9cc1%3A0xf472620739178c28!2sSheopur%2C%20Madhya%20Pradesh%20476337!5e0!3m2!1sen!2sin!4v1695553844461!5m2!1sen!2sin"
                  width="100%"
                  height="680"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
