import { useEffect, useState } from "react";

// firebase products imports
import { collection, getDocs, query } from "firebase/firestore";
import { db, storage } from "../../firebase/firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";

// import components
import Post from "./Post";

const Blog = () => {
  const [dataObtained, setDataObtained] = useState([]);

  async function getFullDataFromFireStoreAndStorage() {
    try {
      const firestoreDataContainer = [];

      const q = query(collection(db, "posts"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        firestoreDataContainer.push(doc.data());
      });

      const fullDataToBePrinted = await Promise.all(
        firestoreDataContainer.map(async (element) => {
          let newImageRef = ref(storage, element.image);
          let publicImageUrl = await getDownloadURL(newImageRef);

          element["fullImageUrl"] = publicImageUrl;
          return element;
        })
      );

      setDataObtained(fullDataToBePrinted);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFullDataFromFireStoreAndStorage();
  }, []);

  return (
    <>
      <div
        id="blog"
        className="bg-primary bg-hero-pattern
        flex justify-evenly py-20 px-4 gap-10
        w-full flex-wrap"
      >
        <h2 className="w-full text-center section-title">Blog posts</h2>
        {dataObtained.length > 0 ? (
          dataObtained.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                timestamp={post.timestamp}
                image={post.fullImageUrl}
              />
            );
          })
        ) : (
          <h2 className="text-3xl">There are not posts yet...</h2>
        )}
      </div>
    </>
  );
};

export default Blog;
