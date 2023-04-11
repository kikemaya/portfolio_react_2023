import { useEffect, useState } from 'react';
import { auth, database } from '../../firebase/firebaseConfig'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { onValue, ref, set } from 'firebase/database';
import { v4 } from 'uuid';

const Opinions = () => {
  // single comment
  const [singleComment, setSingleComment] = useState('')

  // array of all comments
  const [comments, setComments] = useState([])

  const [userAuthenticated, setUserAuthenticated] = useState('')

  async function signInForComment() {
    try {
      const provider = new GoogleAuthProvider()
      const response = await signInWithPopup(auth, provider)

      setUserAuthenticated({
        userAuth: response.user.displayName,
        userAuthPhotoUrl: response.user.photoURL,
      })
    } catch (err) {
      console.error(err);
    }
  }

  async function logOut(e) {
    try {
      await signOut(auth)
      console.log('Signed out')
    } catch (err) {
      console.error(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    set(ref(database, "comments/" + v4()), {
      postId: v4(),
      user: userAuthenticated.userAuth,
      profilePica: userAuthenticated.userAuthPhotoUrl,
      comment: singleComment
    })
      .then(() => {
        alert("Data stored successfully!")
      })
      .catch((err) => {
        alert("Unsuccessfull, error " + err)
      })
  }

  const getAllDataOnce = () => {

    const dbRef = ref(database, "comments")

    onValue(dbRef, snapshot => {
      const arr = []

      snapshot.forEach(childSnapshot => {
        arr.push(childSnapshot.val())
      });

      setComments(arr)
    })
  }

  useEffect(() => {
    getAllDataOnce()
  }, [singleComment])

  return (
    <div className='bg-tertiary bg-hero-pattern p-10 flex flex-col gap-5 w-full'>
      {
        auth.currentUser === null
          ?
          (
            <div className='flex flex-col w-full'>
              <div className='flex items-center gap-5'>
                <p>Do you want to let me know your opinion?</p>
                <button
                  className='btn bg-white text-blue-600
                rounded-md hover:bg-white'
                  onClick={signInForComment}
                >
                  Sign In with Google
                </button>
              </div>
            </div>
          )
          :
          <div className='flex flex-col gap-5 bg-tertiary bg-hero-pattern'>
            <form className='flex items-center justify-between gap-5' onSubmit={logOut}>
              <p>Welcome, {auth.currentUser.displayName}</p>
              <button className='btn bg-accent rounded-md'>Log out</button>
            </form>

            <form onSubmit={handleSubmit} className='flex gap-5 items-center' >
              <input
                type="text"
                placeholder="Write an opinion"
                className="input focus:outline-blue-600 rounded-md"
                onChange={(e) => setSingleComment(e.target.value)}
              />
              <button
                className="btn btn-lg
              bg-blue-600 hover:bg-blue-800 rounded-md"
              >
                Send
              </button>
            </form>
          </div>
      }

      <div className='flex gap-5 py-5 flex-wrap justify-center'>
        {
          comments.length > 0 &&
          comments.map(comment => {
            return (
              <div
                className="gap-5 p-5
              bg-primary bg-hero-pattern rounded-lg w-96"
                key={comment.postId}
              >
                <div className="flex flex-col gap-5">
                  <p className="flex gap-3">
                    <img src={comment.profilePica} alt="profile pica" className="rounded-full w-10" />
                    <b>{comment.user}</b>
                  </p>
                  <p>{comment.comment}</p>
                </div>
              </div>)
          })
        }
      </div>
    </div>
  )
}

export default Opinions