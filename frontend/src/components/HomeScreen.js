import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'
import AddModel from './AddModel';
import Record from './Record';
import { Col,Row } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';
const HomeScreen = () => {
  const [records, setRecords] = useState([])
    const [add, setAdd] = useState(false);
    const handleModal =()=>{
        setAdd(!add);
    }
    const style = {
        minHeight:"65vh"
    }
    useEffect(() => {
      const fetchRecords = async()=>{
        const res = await axios.get('https://record-syst.herokuapp.com/getrecords');
        setRecords(res.data)
      }
      fetchRecords();
    }, [records]);
    
  return (
    <div className='mt-4' style={style}>
        <Button variant="contained" onClick={handleModal}>Add a Record</Button>
        {add?<AddModel add={add} handleModal={handleModal} />:""}
        <div className='mt-4'>
        <Row>
        {
          
          records.map((record)=>{
             return <Col md={4} className="mr-1" key={record._id}><Record record={record}  /></Col>
          })
        }
        </Row>
        
        </div>
    </div>
  )
}

export default HomeScreen;