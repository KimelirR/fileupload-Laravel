import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PublishIcon from '@material-ui/icons/Publish';
import {useState,useEffect,useCallback, useRef} from 'react';
import Alert from '@material-ui/lab/Alert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useNavigate } from "react-router-dom";

import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';

import { makeStyles } from "@material-ui/core/styles";


const styless = makeStyles((theme) => ({
  root: {
    background: '#4caf50'
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {

  // More Code for Image Crop
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 16 / 9 });
  const [completedCrop, setCompletedCrop] = useState(null);


  const classes = styless();


  const onSelectFile = (e) => {


    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const file = new File(["foo"], "", {
    type: "text/plain",
  });

  const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        //setIsSelected(true);
    };


  const [fileList, setFileList] = useState();

  useEffect(() => {
    console.log(fileList);
  });



  const history = useNavigate();
  const[filename,setFileName]= useState([]);
  const[filesNa,setFilesNa]= useState([]);
  const[modelImg,setModelImg] = useState('');
  const[buttonSubmit,setButtonSubmit] = useState('');
  const[sendDocs,setsendDocs]= useState([]);

  const handleChange = (e) =>
  {
      if(!e.target.files[0].name.match(/.(pdf|docx)$/i))
      {
          const reader = new FileReader();
          reader.addEventListener('load', () => setFileName(reader.result));
          reader.readAsDataURL(e.target.files[0]);
          setFileName(e.target.files[0].name)
          }
        else
        {
          setFilesNa(handleClicks) // Code for Alert message show below
          setFilesNa(e.target.files[0].name)
          setsendDocs(e.target.files[0])
         // setButtonSubmit( <Button autoFocus onClick={uploadFile} color="primary"> Upload File </Button>);
        }
  }


   // Code for Snackbar

   const [opens, setOpens] = React.useState(false);

   const handleClicks = () => {
     setOpens(true);
   };

   const handleCloses = (event, reason) => {
     if (reason === 'clickaway') {
       return;
     }

     setOpens(false);
   };

   // Code for Document Upload

   const [selectedFiles, setSelectedFiles] = useState();

    const uploadImage = async (e) =>
    {
      const formData = new FormData();
      formData.append("file", filename);
      formData.append("name", "DHEERAJ");

      await fetch("http://localhost:8000/api/upload", {
        method: "POST",
        body: formData,
      })
      .then((result)=>{
        alert('Image Upload Successully')
      })
      .catch(()=>{
        alert('Error in the Code');
      });
    }

    // Code for File Upload

    const uploadFile = async (e) =>
    {
      const formData = new FormData();
      formData.append("files", sendDocs);

      await fetch("http://localhost:8000/api/upload", {
        method: "POST",
        body: formData,
      })
      .then((result)=>{
         alert('File Upload Successully')
      })
      .catch(()=>{
        alert('Error in the Code');
      });
  }


  return (
    <div>
      <Box mt={4} mb={4}><Typography variant="h6"><b> PDF and Docs File Upload in Database using React and Laravel </b></Typography></Box>
    <Button onClick={handleClickOpen} variant="contained" style={{background:"#292b78",color:"white"}} ><PublishIcon/>AddFile</Button>
      <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
       <div> {filename != '' ? <Typography><b> Image Upload </b></Typography> : <Typography><b> File Upload </b></Typography> } </div>
      </DialogTitle>

          <DialogContent dividers>
            <Box >
            <div className="File" style={{width:"300px"}}>
              <Box align="center" mt={2}>
              {filename != '' ? <p></p> : <CloudUploadIcon color="disabled" fontsiz="large"  style={{width:40, height:40,}}/>  }</Box >
              {filename != '' ? <Typography align="center">Selected Image</Typography> : <Typography align="center">{ filesNa != '' ? <p><Alert>{filesNa}</Alert> </p> : <h4>No File Selected</h4>}</Typography>  }
            </div>

            <div className="Image" style={{marginTop:"10px"}}>
             <form>
              <ReactCrop
                src={filename}

                style={{height:"120px",width:"260px",marginLeft:"20px"}}
              />
             </form>
            </div>

            {filename != '' ?
              <Box align="center" mt={2}></Box>
              :
              <Box align="center">
                 <Button variant="contained" size="small" component="label" style={{marginTop:"10px",backgroundColor:"#292b78",color:"white"}}>
                   Choose File
                 <input  type="file" accept=".png, .jpg, .jpeg, .pdf,.docx"  hidden onChange={handleChange}/>
                 </Button>
             </Box>
            }
         </Box>

        </DialogContent>
      <DialogActions>
       {filename != '' ?
        <Button autoFocus onClick={uploadImage} color="primary">
          Image Upload
        </Button>
        :
         <Button autoFocus onClick={uploadFile} color="primary">
          Upload File
        </Button>
          }
        {/* {buttonSubmit} */}
        <Button autoFocus onClick={handleClose} color="primary">
         Close
        </Button>

      </DialogActions>
    </Dialog>
    </div>
    </div>
  );
}
