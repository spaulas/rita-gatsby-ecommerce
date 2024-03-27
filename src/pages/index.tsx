import React, { ReactElement, useEffect, useState } from "react"
import Loading from "../components/common/Loading"
import NavigationBar from "../components/Navigationbar"

const HomePage = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 400)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="page-wrapper">
      <NavigationBar />
    </div>
  )
}

export default HomePage
