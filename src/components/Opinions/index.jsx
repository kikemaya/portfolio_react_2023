import { useEffect, useRef, useState } from "react";

// IMPORT FIREBASE CONFIG
import { auth, database } from "../../firebase/firebaseConfig";

import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";

import { onValue, ref, set } from "firebase/database";

// UUID, EXTERNAL LIBRARY
import { v4 } from "uuid";

// CUSTOM ALERTS, EXTERNAL LIBRARY
import Swal from "sweetalert2";

// CUSTOM FUNCTION TO GET A FORMATTED DATE TIME
import { getCurrentDateTime } from "../../data";

import { motion, useScroll, useTransform } from "framer-motion";

const Opinions = () => {
	// STATE TO KNOW IF THERE'S A USER SIGNED IN
	const [myUserAuth, setMyUserAuth] = useState(null);

	// SINGLE OPINION
	const [singleComment, setSingleComment] = useState("");

	// ARRAY OF ALL OPINIONS
	const [opinions, setOpinions] = useState([]);

	const domRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: domRef,
		offset: ["0 1", "0.8 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

	async function signInForComment() {
		try {
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
		} catch (err) {
			console.error(err);
		}
	}

	async function logOut(e) {
		try {
			e.preventDefault();
			await signOut(auth);
		} catch (err) {
			console.error(err);
		}
	}

	const handleUserSubmitOpinion = (e) => {
		e.preventDefault();

		set(ref(database, `clientOpinions/${v4()}`), {
			postId: v4(),
			userName: myUserAuth.displayName,
			profilePic: myUserAuth.photoURL,
			opinion: singleComment,
			timestamp: getCurrentDateTime(),
		})
			.then(() => {
				console.log("Opinion published successfully");
				e.target.reset();
			})
			.catch((err) => {
				Swal.fire("Unsuccessfull, something went wrong!");
				console.error(err);
			});
	};

	const getAllOpinions = () => {
		const dbRef = ref(database, "clientOpinions");

		onValue(dbRef, (snapshot) => {
			const arr = [];

			snapshot.forEach((childSnapshot) => {
				arr.push(childSnapshot.val());
			});

			setOpinions(arr);
		});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setMyUserAuth(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		getAllOpinions();
	}, []);

	return (
		<div className="flex flex-col justify-center w-full px-5 bg-tertiary bg-hero-pattern">
			{
				// IF THERE'S AN AUTHENTICATED USER, SHOW THE SIGN IN BAR, ELSE, SHOW THE LOG OUT BAR AND THE FORM
				myUserAuth === null ? (
					<div
						className={`flex flex-col w-full items-center ${
							opinions.length > 0 ? "pt-10 pb-0" : "py-10"
						}`}
					>
						<div className="flex flex-wrap items-center justify-center gap-5">
							<p>Do you want to let me know your opinion?</p>
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								transition={{ duration: 0 }}
								className="text-blue-600 bg-white rounded-md btn hover:bg-white"
								onClick={signInForComment}
							>
								Sign In with Google
							</motion.button>
						</div>
					</div>
				) : (
					// FORM TO SEND AN OPINION
					<div
						className={`flex flex-col gap-5 
            bg-tertiary bg-hero-pattern pt-10 sm:px-10
            ${opinions.length > 0 ? "pb-0" : "pb-10"}`}
					>
						<form
							className="flex flex-wrap items-center justify-between gap-5"
							onSubmit={logOut}
						>
							<p className="text-xl">
								Welcome, {auth.currentUser.displayName}!
							</p>
							<button type="submit" className="rounded-md btn bg-accent">
								Log out
							</button>
						</form>

						<form
							onSubmit={handleUserSubmitOpinion}
							className="flex items-center gap-5"
						>
							<input
								type="text"
								placeholder="Write an opinion"
								className="rounded-md input focus:outline-blue-600"
								onChange={(e) => setSingleComment(e.target.value)}
							/>
							<button
								type="button"
								className="bg-blue-600 rounded-md btn btn-lg hover:bg-blue-800"
							>
								Send
							</button>
						</form>
					</div>
				)
			}
			{/* PRINT OPINIONS SECTION */}
			<motion.div
				domRef={domRef}
				style={{
					scale: scaleProgress,
					opacity: opacityProgress,
				}}
				className={`flex gap-5 flex-wrap justify-center
        ${opinions.length > 0 ? "py-10" : "py-0"}`}
			>
				{opinions.length > 0 &&
					opinions.map((user) => {
						return (
							<div
								className="gap-5 p-5 rounded-lg bg-primary bg-hero-pattern w-96"
								key={user.postId}
							>
								<div className="flex flex-col gap-5">
									<p className="flex gap-3">
										<img
											src={user.profilePic}
											alt="profile"
											className="w-10 rounded-full"
										/>
										<b>{user.userName}</b>
									</p>
									<p>{user.opinion}</p>
									<p>{user.timestamp}</p>
								</div>
							</div>
						);
					})}
			</motion.div>
		</div>
	);
};

export default Opinions;
