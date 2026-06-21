import { createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext(null)

const STORAGE_KEY = "learn-ai-with-ai-user-v1"

const defaultUser = {
  name: "Learner",
  streak: 0,
  plan: "free",
  goal: "Build confidence using AI in everyday life",
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(defaultUser)

  useEffect(() => {
    const savedUser = localStorage.getItem(STORAGE_KEY)
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Failed to parse saved user", error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  }, [user])

  function updateUser(updates) {
    setUser((currentUser) => ({
      ...currentUser,
      ...updates,
    }))
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}