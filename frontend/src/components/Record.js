import React,{useState} from 'react'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios'
import EditModal from './EditModal';
const Record = ({record}) => {
    const [edit, setEdit] = useState(false);
    const handleEditModal = ()=>{
        setEdit(!edit);
    }
    const handleDelete =async()=>{
      let res = await  axios.delete('https://record-syst.herokuapp.com/delete',{data:record});
      alert(res.data.message)
    }
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <div className='ms-auto mb-2'><small><Badge bg="success">{record.tag}</Badge></small></div>
        <Card.Title>{record.title} </Card.Title>
        <Card.Text>
          {record.description}
        </Card.Text>
        <Button variant="contained" color="success" className='m-2' onClick={handleEditModal}><EditIcon/></Button>  
        <Button variant="contained" color="error" className='m-2' onClick={handleDelete} ><DeleteIcon/></Button>  
      </Card.Body>
    </Card>
    {edit?<EditModal edit={edit} handleEditModal={handleEditModal} data={record} />:""}
    </>
  )
}

export default Record;