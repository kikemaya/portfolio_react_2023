import React, { useEffect, useState } from 'react'
import Post from './Post'
import { collection, getDocs, query } from 'firebase/firestore'
import { db, storage } from '../../firebase/firebaseConfig'
import { getDownloadURL, ref } from 'firebase/storage'

const Blog = () => {

  const [postData, setPostData] = useState([])

  async function getTextData() {
    try {
      const arr = []

      const q = query(collection(db, 'posts'))

      const querySnapshot = await getDocs(q)

      querySnapshot.forEach(doc => {
        arr.push(doc.data())
      });

      const arr3 = await Promise.all(arr.map(async element => {
        let newImageRef = ref(storage, element.image)
        let publicImageUrl = await getDownloadURL(newImageRef)

        element['fullImageUrl'] = publicImageUrl
        return element
      }));

      setPostData(arr3)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTextData()
  }, [postData])

  return (
    <>
      <div id='blog' className='bg-primary bg-hero-pattern flex justify-evenly py-20 gap-20 w-full flex-wrap'>
        {
          postData.length > 0 ?
            postData.map(post => {
              return (<Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                timestamp={post.timestamp}
                image={post.fullImageUrl}
              />)
            })
            : <h2 className='text-3xl'>There are not posts yet...</h2>
        }
      </div >
    </>
  )
}

export default Blog