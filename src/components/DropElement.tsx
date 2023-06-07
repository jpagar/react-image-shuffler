import React, {useState, useEffect} from "react"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Dropzone from "react-dropzone"


interface Props {
    captureDrop: (files: File[]) => void

}

export const DropElement = ({captureDrop}: Props) => {

    const dropZoneStyle = {
        display: `flex`,
        justifyContent: "center",
        padding: "100px",
        marginTop: "10px",
        borderWidth: "2px",
        borderRadius: "2px",
        borderColor: "#eeeeee",
        borderStyle: "dashed",
        backgroundColor: "#fafafa",
        color: "#bdbdbd",
        outline: "none",
        transition: "border .24s ease-in-out",
        zIndex: "-1",
    }


    return (
        <Dropzone
            onDrop={acceptedFiles => captureDrop(acceptedFiles)}
            multiple={true}
        >
            {({getRootProps, getInputProps}) => (
                <Container
                    {...getRootProps()}
                    style={dropZoneStyle}
                >
                    <input {...getInputProps()} />
                    <Row>Drop Images Here</Row>
                </Container>
            )}
        </Dropzone>
    )
}