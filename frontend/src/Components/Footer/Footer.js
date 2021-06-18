
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FacebookShareButton, TwitterShareButton, EmailShareButton, TelegramShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, EmailIcon, LinkedinIcon, TelegramIcon } from "react-share";

const Footer = (props) => {
    return (
        <div style={{marginTop:'10px'}}>
            <Container fluid style={{ backgroundColor: "#302c34"}}>
                <Row>
                    <Col md={9}>
                        <p className="text-white pt-2">&copy; 2021 Online-Model-test.com.All rights reserved. Powered by React.</p>
                    </Col>
                    <Col md={3} className="pt-2">
                                <FacebookShareButton
                                    url="https://www.npmjs.com/package/react-share"
                                    quote={"Hello please review my project"}
                                    hashtag="#MERN_STACK_PROJECT"
                                >
                                    <FacebookIcon round={true} size="35"></FacebookIcon>
                                </FacebookShareButton>

                                <TwitterShareButton
                                    url="https://www.npmjs.com/package/react-share"
                                    title="ONLINE MODEL TEST WEB APPLICATION"
                                    hashtag="#MERN_STACK_PROJECT"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <TwitterIcon round={true} size="35"></TwitterIcon>
                                </TwitterShareButton>


                                <EmailShareButton
                                    url="https://www.npmjs.com/package/react-share"
                                    subject="ONLINE MODEL TEST WEB APPLICATION"
                                    body="Hello please review my project"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <EmailIcon round={true} size="35"></EmailIcon>

                                </EmailShareButton>


                                <TelegramShareButton
                                    url="https://www.npmjs.com/package/react-share"
                                    title="ONLINE MODEL TEST WEB APPLICATION"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <TelegramIcon  round={true} size="35"></TelegramIcon>
                                </TelegramShareButton>



                                <LinkedinShareButton
                                    url="https://www.npmjs.com/package/react-share"
                                    title="ONLINE MODEL TEST WEB APPLICATION"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <LinkedinIcon round={true} size="35"></LinkedinIcon>
                                </LinkedinShareButton>



                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default Footer;