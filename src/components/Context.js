
import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setisError] = useState({ show: "false", msg: "" })
    const [query, setQuery] = useState("titanic")

    const getMovie = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);

            if (data.Response === "True") {
                setIsLoading(false)
                setisError({
                    show: false,
                    msg: "",
                })
                setMovie(data.Search)


            } else {
                setisError({
                    show: true,
                    msg: data.Error
                })

            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovie(`${API_URL}&s=${query}`);
        }, 2000);
        return () => clearTimeout(timerOut);

    }, [query])




    return <AppContext.Provider value={{ isError, isLoading, movie, query, setQuery }}>
        {children}
    </AppContext.Provider>
}
//golobal customs hooks
const useGolobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGolobalContext }
