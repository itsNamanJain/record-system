import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import axios from 'axios'
import {Form} from 'react-bootstrap'
const AddModel = ({add,handleModal}) => {
const [record, setRecord] = useState({
    title:"",
    description:"",
    tag:"Primary"
});
    let style = {
        boxShadow:"none"
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setRecord({
            ...record,
            [name]:value
        })
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      const {title,description,tag} = record;
      if(title&&description&&tag){
        if(description.length <3){
            alert("Decription Should be at least 3 charracters long")
        }
        else{
            axios.post("https://record-syst.herokuapp.com/addrecord",record).then(res=>{alert(res.data.message);
          handleModal();})
        }

      }
    }
  return (
    <>
        <Modal show={add} onHide={handleModal}>
            <Modal.Header closeButton>
            Enter Record Details
            </Modal.Header>
            <Modal.Body>
            <Form className='mt-3 m-auto' >
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control style={style}  name="title" value={record.title}  onChange={(e)=>handleChange(e)} type="text" placeholder="Enter Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control style={style} name="description" value={record.description}  onChange={(e)=>handleChange(e)} type="text" placeholder="Enter Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="tag">
        <Form.Label>Tag</Form.Label>
        <Form.Control style={style} name="tag" value={record.tag}  onChange={(e)=>handleChange(e)} type="text" placeholder="Enter Tag" />
      </Form.Group>
    </Form>
            </Modal.Body>
            <Modal.Footer>  
            <Button variant="contained" color="error" className='m-2' onClick={handleModal}>Close</Button>  
            <Button variant="contained" color="success" type="submit" className='m-2' onClick={handleSubmit}>Add</Button>  
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default AddModel