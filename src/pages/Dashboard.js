import React from 'react'
import DashboardPage from '../components/Dashboard/DashboardPage'
import SingleMeal from '../components/simgleMeal/SingleMeal'

const Dashboard = () => {
  return (
    <React.Fragment>
      <DashboardPage />
      <SingleMeal />
    </React.Fragment>
  )
}

export default Dashboard