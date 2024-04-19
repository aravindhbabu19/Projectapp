import React from 'react'

const Newpost = ({handleSubmit,Title,SetTitle,Content,SetContent}) => {
  return (
    <div>
        <form action="" onClick={handleSubmit}>
                <label htmlFor="mic1">Title</label>
                <input type="text" id="mic1" value={Title} onChange={(e)=>SetTitle(e.target.value)}/>
                <label htmlFor="mic">content</label>
                <input type="text" id="mic" value={Content} onChange={(e)=>SetContent(e.target.value)}/>
                <button type='submit'>Post</button>
        </form>
    </div>
  )
}

export default Newpost