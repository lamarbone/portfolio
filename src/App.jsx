import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import './App.css'
import './scss/main.scss'
import NavBar from './components/NavBar'
import { motion } from 'framer-motion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function App() {
  
  return (
   <div className='App'>
   <NavBar/>
   <motion.div animate={{x: 100 }}>
   <Card style={{ width: '180rem'}}>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </motion.div>
  <motion.div animate={{x: 100 }}>
   <Card style={{ width: '180rem'}}>
      <Card.Body>
        <Card.Title>Projects</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       </Card.Body>
    </Card>
  </motion.div>
  <motion.div animate={{x: 100 }}>
   <Card style={{ width: '180rem'}}>
      <Card.Body>
        <Card.Title>Resume</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </motion.div>


  
  
  </div>
 


 


    )
}

export default App
