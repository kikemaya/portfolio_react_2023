import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

const AuthContext = React.createContext();

// Hook to access the context
const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(true);

	// state to know when the onAuthStateChanged ends their load
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Validate if there is a user signed in
		const cancelSub = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});

		return cancelSub;
	}, []);

	return (
		<AuthContext.Provider value={{ userAuth: user }}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export { AuthProvider, AuthContext, useAuth };
