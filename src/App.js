import Header from "./components/Header";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Tenders from "./components/Tenders";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react"
import NewTender from "./components/NewTender";
import EditTender from "./components/EditTender";
import Footer from "./components/Footer";

const appName = "Tenders Tracker"

function App() {
  const [tenders, setTenders] = useState([])
  const apiUrl = "http://localhost:8000/api/tender/"
  useEffect(() => {
    const getTenders = async () => {
      const itemsFromServer = await fetchTenders()
      setTenders(itemsFromServer)
    }    
    getTenders()
  }, [])


  // Fetch items
  const fetchTenders = async () => {
    const result = await fetch(apiUrl)
    const data = await result.json()
    return data
  }
  // Add item
  const addTender = async (tender, history) => {
    const result = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tender)
    })
    if (result.ok) {
      const data = await result.json()
      setTenders([...tenders, data])
      history.push('/tenders')
    } else {
      
    }

  }
  // Edit item
  const editTender = async (tender, history) => {
    const id = tender.id
    const result = await fetch(apiUrl+id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tender)
    })
    if (result.ok) {
      const index = tenders.findIndex((t) => t.id === id)
      tenders[index] = tender;
      history.push('/tenders')
    }else{

    }
  }
  // Delete item
  const deleteTender = async (id) => {
    const result = await fetch(apiUrl+id, {
      method: 'DELETE'
    })
    setTenders(tenders.filter((tender) => tender.id !== id));
  }


  return (
    <Router>
      <div className="app mb-5">
        <Header appName={appName}></Header>
        <div className="container">
          <Route path="/" exact render={(props) => (
            <>
              <h1 className="text-center mt-5">This is a tender tracking app.</h1>
              <p className="text-center">
                Create, update and list tenders in this demo app. Frontend is made with React JS, 
                backend API made with PHP(Laravel).
              </p>
              <div className="text-center">
                <Link to="/tenders"><Button variant="info">See all here</Button></Link>
              </div>
            </>
          )} />
          <Route path="/tenders" exact render={(props) => (
            <>
              {
                tenders.length > 0 ? 
                <Tenders tenders={tenders} onDelete={deleteTender} onEdit={editTender}></Tenders> : 
                <h1 className="text-center mt-5">Nothing to show...</h1>
              }
            </>
          )} />
          <Route path="/new" exact render={(props) => (
            <>
              <NewTender onAdd={addTender}></NewTender>
            </>
          )} />        
          <Route path="/edit" exact render={(props) => (
            <>
              <EditTender onEdit={editTender}></EditTender>
            </>
          )} />
        </div>
        <Footer></Footer>
      </div>      
    </Router>

  );
}

export default App;
