
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Navi from './Navi';
import { useEffect, useState } from 'react';
import Newpost from './Newpost';
import {format} from 'date-fns'
import Postpage from './Postpage';

function App() {
  const [search,setSearch]=useState('')
  const [Title,SetTitle]=useState('')
  const [Content,SetContent]=useState('')
  const [searchResult,setSearchResult]=useState('')
  const navigate=useNavigate()
  const [post,setPost]=useState([
    {
      id:1,
      title:'My First Post',
      date:'may 23 2023',
      content:'insta start'
    },
    {
      id:2,
      title:'My Second Post',
      date:'jun 23 2023',
      content:'insta post'
    },
    {
      id:3,
      title:'My Third Post',
      date:'jul 23 2023',
      content:'insta reel'
    },
    {
      id:4,
      title:'My Fourth Post',
      date:'aug 23 2023',
      content:'insta story'
    }
  ])
  const handleSubmit=(e)=>{
    e.preventDefault()
    const id=post.length ?post[post.length-1].id+1:1
    const date=format(Date(),'dd-mm-yyyy')
    const addn={id,title:Title,date,content:Content}
    const result=[...post,addn]
    setPost(result)
    navigate('/')
  }
  const handleDelete=(id)=>{
    const result=post.filter((po)=>po.id!==id)
    setPost(result)
    navigate('/')
  }
  useEffect(()=>{
    const result=post.filter((post)=>post.title.toLowerCase().includes(search)||post.content.toLowerCase().includes(search))
    setSearchResult(result) 
  },[post,search])
  return (
    <div>
      <Navi search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home post={searchResult} />} />
        <Route path='/New'>
        <Route index element={<Newpost handleSubmit={handleSubmit} Title={Title} SetTitle={SetTitle} Content={Content} SetContent={SetContent} />}/>
        <Route path=':id' element={<Postpage post={post} handleDelete={handleDelete}/>}/>
        </Route>
        <Route path='/Abo' element={<About />} />
       
      </Routes>
    </div>
  );
}

export default App;
