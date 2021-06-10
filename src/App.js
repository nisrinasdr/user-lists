import React, {lazy, Suspense} from 'react';
import './App.css';
import CardLoad from './components/CardLoad';
import { useGlobalContext } from './components/Context';
import Pagination from './components/Pagination';

const Card = lazy(() => import('./components/Card'));


const App = () => {
  
  const {userData, dataPerPages, currentPage, loading} = useGlobalContext()
 
  const indexOfLastData = currentPage * dataPerPages
  const indexOfFirstData = indexOfLastData - dataPerPages
  const currentData = userData.slice(indexOfFirstData, indexOfLastData)
  
  return (
    <div className="container">
        <h1 className="title">User Lists</h1>
        {
          loading? <h2 style={{marginTop:'1em'}}>Loading...</h2>:null
        }
        <div className="card-container">
          { currentData.map(user => {
            return (
            <Suspense key={user.id} fallback={<CardLoad/>}>
              <Card key={user.id} {...user}/>
            </Suspense>)
          }) }
        </div>
        <Pagination userData={userData}/>
    </div>
  );
}

export default App;
